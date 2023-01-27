import React from 'react'
import Button from '../Button';
import './Call.css'

const Call = () => {
  return (
    <div id='form' className="call">
      <div className="us">Call Us</div>
      <Button label="Call" classStyle="lg:w-[13rem]" />
      <Button
        customStyles="bg-[#C6DBFF]"
        className="lg:ml-[1.44rem] text-[#486A6F]"
        label="Email"
        classStyle="lg:w-[13rem]"
      />
    </div>
  );
}

export default Call