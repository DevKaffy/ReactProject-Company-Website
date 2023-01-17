import React from 'react'

const Button = ({ label, className, customStyles, classStyle, superClass }) => {
  return (
    <button
      className={`bg-Igreen text-white w-full h-12 outline-none rounded  ${className} ${customStyles} ${classStyle} ${superClass}`}
    >
      {label}
    </button>
  );
};

export default Button