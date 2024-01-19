import React, {useCallback} from "react";
import {Routes, Route, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Login from "./components/Login/Login";
import Articles from "./components/Articles/Articles";
import {logout} from "./actions/auth";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const dispatch = useDispatch();

    const {user: currentUser} = useSelector((state) => state.auth);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto flex-row">
                {currentUser ? (
                <>
                    <li className="nav-item">
                        <a href="/login" className="nav-link" onClick={logOut}>
                            LogOut
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link to="/articles" className="nav-link">
                            Articles
                        </Link>
                    </li>
                </>
                ) : (
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                )}
            </ul>
        </nav>


        <div className="container mt-3">
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/articles" element={<Articles/>}/>
            </Routes>
        </div>
    </div>
    );
}

export default App;
