import {GET_ARTICLES_FAIL, GET_ARTICLES_SUCCESS, SET_CURRENT_ARTICLE,} from "./types";
import ArticlesService from "../services/articles.service";

export const getArticles = () => (dispatch) => {
    return ArticlesService.get().then(
    (data) => {
        dispatch({
            type: GET_ARTICLES_SUCCESS,
            payload: {articles: data},
        });

        return Promise.resolve();
    },
    (error) => {
        dispatch({
            type: GET_ARTICLES_FAIL,
        });

        console.error(error);
        return Promise.reject();
    });
};

export const setCurrentArticle = (id) => (dispatch) => {
    dispatch({
        type: SET_CURRENT_ARTICLE,
        payload: {id: id},
    });
}