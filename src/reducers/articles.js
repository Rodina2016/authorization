import {GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL, SET_CURRENT_ARTICLE} from "../actions/types";

const initialState = {
    items: null,
    currentArticle: null,
}

const articles =  (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                items: payload.articles?.data,
            };
        case GET_ARTICLES_FAIL:
            return {
                ...state,
                items: null,
            };
        case SET_CURRENT_ARTICLE:
            return {
                ...state,
                currentArticle: state.items.find(item => item?.id === payload?.id),
            };
        default:
            return state;
    }
}

export default articles;