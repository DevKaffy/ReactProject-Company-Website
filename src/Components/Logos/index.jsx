import React from 'react'
import './Logos.css'

const logos = ["/Vector.png", "/Vector2.png", "/Vector3.png", "/Vector4.png"];

const Logos = () => {
  return (
    <div className="logos">
      {logos.map((logo, index) => (
        <div key={`logos-${index}`}>
          <img src={logo} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Logos