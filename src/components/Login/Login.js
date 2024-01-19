import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-modal";
import {Navigate} from 'react-router-dom';

import {login} from "../../actions/auth";
import {clearMessage} from "../../actions/message";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const {isLoggedIn} = useSelector(state => state.auth);
    const {message} = useSelector(state => state.message);


    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target?.value?.replace(/\s/g, "");
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        dispatch(login(username, password))
        .then(() => {
            setLoading(false);
        });
    };

    if (isLoggedIn) {
        return <Navigate to="/articles"/>;
    }

    return (
    <div className="col-md-12">
        <div className="card card-container p-3">

            <div className="form-group mb-3">
                <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
                placeholder={"login"}
                />
            </div>

            <div className="form-group mb-3">
                <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                placeholder={'password'}
                />
            </div>

            <div className="form-group mb-3">
                <button className="btn btn-primary btn-block" disabled={loading} onClick={handleLogin}>
                    {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                </button>
            </div>

            {message && (
            <Modal
            ariaHideApp={false}
            className='messageModal'
            isOpen={Boolean(message)}
            onRequestClose={() => dispatch(clearMessage())}
            >
                <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                        <p dangerouslySetInnerHTML={{__html: message}}/>
                    </div>
                </div>
            </Modal>
            )}
        </div>
    </div>
    );
};

export default Login;
