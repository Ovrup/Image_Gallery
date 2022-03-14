import React from 'react';

// Modal component to display a modal when an image is clicked 

function Modal({ isOpen, onClose, image, increment, decrement }) {

    if (!isOpen) return null
    return (
        <div style={{
            position: "fixed",
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: "grey",
            opacity: 0.95,


        }}>
            <button onClick={onClose}>&times;</button>
            <div className='modal-flex'>
                <button onClick={() => decrement()} className='modal-dec'>&#9665;</button>
                <img src={image.url} alt={image.title} />
                <button onClick={() => increment()} className='modal-inc'>&#9655;</button>
            </div>

        </div>
    )
}

export default Modal;