import React, {useEffect, useState} from 'react';
import './Modal.css';
const Modal = ({isOpen, setIsOpen, children}) => {
    const [windowPos, setWindowPos] = useState(0)

    const handleScroll = () => {
        setWindowPos(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        document.body.style.overflow = "auto"
        setIsOpen(false)
    }

    if(!isOpen) return null;

    return (
        <div className="customContainer">
            <div className="customModal" style={{top: windowPos}} >
                <button className="button" type={"button"} onClick={handleClick}>Close</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;