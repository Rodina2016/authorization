import axios from "axios";

import {API_URL} from "./constants";

const login = (username, password) => {
    return axios
    .post(API_URL + "/jwt-auth/v1/token", {
        username,
        password,
    })
    .then((response) => {
        if (response?.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response?.data;
    })
    .catch(error => {
        console.error(error.response);
        return error;
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

const AuthService =  {
    login,
    logout,
};

export default AuthService;
