import React from 'react';
import Modal from 'react-modal';

const ArticleModal = ({modalIsOpen = false, setIsOpenModal, article}) => {

    const closeModal = () => {
        setIsOpenModal(false);
    }

    if (!article) return null;

    return (
        <div>
            <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            >
                <button onClick={closeModal}>close</button>
                <p>{article.id}</p>
                <p>{article.category.name}</p>
            </Modal>
        </div>
    )
}

export default ArticleModal;