import React, {useEffect, useState} from 'react';
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getArticles, setCurrentArticle} from "../../actions/articles";
import ArticleModal from "../ArticleModal/ArticleModal";
import Loader from "../loader/Loader";

import "./Article.css";

const Articles = () => {
    const dispatch = useDispatch();

    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch, getArticles]);

    const {items, currentArticle} = useSelector(state => state.articles);
    const {isLoggedIn} = useSelector(state => state.auth);

    const handleClick = (id) => {
        dispatch(setCurrentArticle(id))
        if (!isOpenModal) setIsOpenModal(true);
    }

    if (!isLoggedIn) {
        return <Navigate to="/login"/>;
    }

    if (!items) return <Loader/>;

    return (
        <>
            <div className="articles">
                {items?.map(item => {
                    return (
                    <div key={item.id} className="articlesItem card" onClick={() => {
                        handleClick(item.id)
                    }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.title.rendered}</h5>
                            <div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}}/>
                        </div>
                    </div>
                    )
                })}

                <ArticleModal modalIsOpen={isOpenModal} article={currentArticle} setIsOpenModal={setIsOpenModal}/>
            </div>
        </>
    )
}

export default Articles;