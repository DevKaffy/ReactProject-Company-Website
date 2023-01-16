import React from 'react'

const Button = ({ label, styles, className, customStyles }) => {
  return (
    <button
      className={`bg-Igreen text-white w-full h-12 outline-none rounded ${styles} ${className} ${customStyles}`}
    >
      {label}
    </button>
  );
};

export default Button