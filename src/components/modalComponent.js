import React, { Children } from 'react';

// Modal component to display a modal when an image is clicked 

function Modal({ isOpen, onClose, children }) {

    if (!isOpen) return null
    return (
        <div style={{
            position: "fixed",
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: "black",
            opacity: 0.95,


        }}>
            <button onClick={onClose}>&times;</button>
            {children}

        </div>
    )
}

export default Modal;