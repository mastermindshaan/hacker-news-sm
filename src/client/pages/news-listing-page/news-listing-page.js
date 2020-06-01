
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import { fetchArticles } from '../../actions';
import { canUseDOM } from '../../../common/utility';
import UIConfig from '../../../common/config';
import HeadHoc from "../../components/base/meta-component/meta-component";
import NewsListing from '../../components/news-listing-component/news-listing-component';
import MoreLink from '../../components/more-link-component/more-link-component';

const { metaTags, hideIdsText, voteObjText, voteLink: { directionText } } = UIConfig.newsListingPage;

/**
 * 
 * @param {*} props
 * Used for the page of showing the list of News
 *  
 */
const NewsListingPageRender = props => {
    let { id: paramId } = useParams(),
        { pathname } = useLocation(),
        selectedPath = pathname.split('/')[1],
        hideIds = [],
        voteObj = {};


    paramId = paramId || 0;
    const [currentNews, setCurrentNews] = useState(props.articles);
    const { fetchArticles: loadArticles } = props;
    if (canUseDOM()) {
        hideIds = JSON.parse(localStorage.getItem(hideIdsText)) || [];
        voteObj = JSON.parse(localStorage.getItem(voteObjText)) || {};
    }


    useEffect(() => {
        loadArticles(paramId, selectedPath);
    }, [loadArticles, paramId, selectedPath]);

    useEffect(() => {
        let filteredNews = props.articles.filter(item => hideIds.indexOf(item.objectID) === -1);
        let votedNews = filteredNews.map(item => {
            if (voteObj[item.objectID]) {
                item.points = voteObj[item.objectID];
                item.hide = true;
            }
            return item;
        });
        setCurrentNews(votedNews);
    }, [props.articles]);

    const onHideClick = (e, newsId) => {
        e.preventDefault();
        hideIds.push(newsId);
        localStorage.setItem(hideIdsText, JSON.stringify(hideIds));
        const filteredNews = currentNews.filter(item => item.objectID !== newsId);
        setCurrentNews(filteredNews);
    }

    const onVoteClick = (e, newsId, points, direction) => {

        e.preventDefault();
        if (directionText.up === direction) {
            voteObj[newsId] = ++points;
        }
        if (directionText.down === direction) {
            delete voteObj[newsId];
        }
        localStorage.setItem(voteObjText, JSON.stringify(voteObj));
        const votedNews = currentNews.map(item => {
            if (newsId === item.objectID) {
                if (directionText.up === direction) {
                    item.points = voteObj[newsId];
                    item.hide = true;
                }
                else {
                    item.points = --points;
                    item.hide = false;
                }
            }
            return item;
        });
        setCurrentNews(votedNews);
    }

    return (
        <>
            {props.error ? <h2>{UIConfig.errorMsg}</h2> :
                (
                    <>
                        <NewsListing news={currentNews} onVoteClick={onVoteClick} onHideClick={onHideClick} pageNum={paramId} totalPages={props.totalpages} />
                        {props.totalpages > (+paramId + 1) && <MoreLink path={selectedPath} paramId={paramId} />}
                    </>
                )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        articles: state.articles.items.news,
        totalpages: state.articles.items.totalPages,
        error: state.articles.error
    };
};

const loadData = (store, param, selectedPath) => {

    // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
    // So we need to use store itself to load data
    return store.dispatch(fetchArticles(param, selectedPath)); // Manually dispatch a network request
};

const NewsListingPage = HeadHoc(NewsListingPageRender, metaTags);

NewsListingPage.defaultProps = {
    articles: [],
    fetchArticles: null
};


export default {
    component: connect(
        mapStateToProps,
        { fetchArticles }
    )(NewsListingPage),
    loadData
};