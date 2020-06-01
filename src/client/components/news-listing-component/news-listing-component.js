import React from 'react';

import { dateDiff, shortUrl } from '../../../common/utility';
import UIConfig from '../../../common/config';

import VoteLink from '../vote-component/vote-component';
/**
 * 
 * @param  props 
 * This is used for the creating the row of news 
 */

const NewsListing = (props) => {
    const { news, onVoteClick, onHideClick, pageNum, totalPages } = props;
    const { directionText } = UIConfig.newsListingPage.voteLink;
    if (!(news && news.length) && (pageNum >= totalPages)) {
        return <h2>{UIConfig.noDataText}</h2>
    }
    const renderNews = (news) => {
        return news.map(item => {
            return (
                <div key={item.objectID} className="row">
                    <div className="comment">{item.num_comments}</div>
                    <div className="t-vote">{item.points}</div>
                    {!item.hide && <VoteLink onVoteLinkClick={onVoteClick} anchorTitle={directionText.upVote} direction={directionText.up} newsID={item.objectID} newsPoint={item.points} />}
                    {item.hide && <VoteLink onVoteLinkClick={onVoteClick} anchorTitle={directionText.downVote} direction={directionText.down} newsID={item.objectID} newsPoint={item.points} />}
                    <div className="title">
                        <span className="title-h2">{item.title}</span>
                        {item.url ? (<span className="sitebit comhead"> ( <a href={item.url}>{shortUrl(item.url)}</a> ) </span>) : ""}
                        <span className="author"> {UIConfig.byText} <span> {item.author} </span></span>
                        <span className="created">{dateDiff(item.created_at)} {UIConfig.agoText} </span>
                        <span className="hide">[ <span><a href="#" onClick={(e) => onHideClick(e, item.objectID)}>{UIConfig.hideText}</a></span> ]</span>
                    </div>
                </div>
            );
        });
    }
    return renderNews(news);
}
export default NewsListing;