import React from 'react'
import Button from './Button';
import './Call.css'

const Call = () => {
  return (
    <div className="call">
      <div className="us">Call Us</div>
      <Button label="Call" customStyles="bg-[#4397A4]" classStyle="w-[13rem]" />
      <Button
        customStyles="bg-[#C6DBFF]"
        className="ml-[1.44rem]"
        label="Email"
        classStyle="w-[13rem]"
      />
    </div>
  );
}

export default Call