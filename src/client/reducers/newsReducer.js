import { FETCH_ARTICLES, FETCH_ERRORS } from '../actions/index';


const inititalstate = {
    items: {},
    error: false
}
export default (state = inititalstate, action) => {
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                items: action.payload
            };
        case FETCH_ERRORS:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};