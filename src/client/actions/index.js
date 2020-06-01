import axios from 'axios';
import APIConfig from '../../common/api-config';

export const FETCH_ARTICLES = 'fetch_articles';
export const FETCH_ERRORS = 'fetch_errors';

const { searchURL, searchURLDated, searchQuery, hitsPerPage, page } = APIConfig;

export const fetchArticles = (pageNum = 0, selectedPath) => async dispatch => {

    if (isNaN(pageNum)) {
        dispatch({
            type: FETCH_ERRORS,
            payload: true
        });
        return;
    }

    let url, searchPath;
    switch (selectedPath) {
        case 'news':
            searchPath = searchURL;
            break;
        case 'newest':
            searchPath = searchURLDated;
            break;
        default:
            searchPath = searchURL;
    }

    if (pageNum) {
        url = `${searchPath}?${searchQuery}&${hitsPerPage}&${page}=${pageNum}`;
    } else {
        url = `${searchPath}?${searchQuery}&${hitsPerPage}`;
    }
    const res = await axios.get(url);
    dispatch({
        type: FETCH_ARTICLES,
        payload: {
            news: res.data.hits,
            totalPages: res.data.nbPages
        }
    });
};