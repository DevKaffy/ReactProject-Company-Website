import React from 'react'
import Button from './Button';
import './Call.css'

const Call = () => {
  return (
    <div className="call">
      <div className="us">Call Us</div>
      <Button label="Call" customStyles="bg-[#4397A4]" />
      <Button styles="bg-[#C6DBFF]" className="ml-[1.44rem]" label="Email" />
    </div>
  );
}

export default Call