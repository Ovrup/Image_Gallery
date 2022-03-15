import React, { Children } from 'react';

// Modal component to display a modal when an image is clicked 

function Modal({ isOpen, onClose, children }) {

    if (!isOpen) return null
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgb(0,0,0)`, /* Fallback color */
            backgroundColor: `rgba(0,0,0,0.4)` /* Black with opacity */
        }}>
            <button onClick={onClose}>&times;</button>
            {children}
        </div>
    )
}

export default Modal;