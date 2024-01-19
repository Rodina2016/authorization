import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT, SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
    (data) => {
        if (data.token) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {user: data},
            });

            return Promise.resolve();
        } else {
            dispatch({
                type: LOGIN_FAIL,
            });

            const message =
            (data.response &&
            data.response.data &&
            data.response.data.message) ||
            data.message ||
            data.toString();

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    }
    ).catch(error => console.error(error));
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};
