import axios from "axios";

import {API_URL} from "./constants";
import requestHeader from "./auth-header";

const get = () => {
    return axios.get(API_URL + "/wp/v2/posts", {headers: requestHeader()}).catch(error => {
        console.error(error)
    });
};

const ArticlesService = {
    get,
};

export default ArticlesService;