// Modal.js
import React from 'react';

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};


const modalStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '4px',
    zIndex: 1001
};

const Modal = ({ isFormVisible, onClose, children }) => {
    const handleOverlayClick = (e) => {
    e.stopPropagation();  // イベント伝播を止める
  };

  return (
    isFormVisible && (
      <div style={overlayStyle} onClick={handleOverlayClick}>
        <div style={modalStyle}>
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    )
  );
};


export default Modal;
