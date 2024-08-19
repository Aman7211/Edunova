// src/components/Modal.js
import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-0 flex justify-end items-center z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mt-16 relative h-[61vh] border-2">
        <button
          className="absolute top-3 right-4 text-white text-2xl  "
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
