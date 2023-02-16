import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="footer center">
        <div className="first-footer">
          <div className="build">Buildit</div>
          <img src="/alarm.png" alt="" />
        </div>
        <div className="second-footer">
          <div>Service 1</div>
          <div>Service 2</div>
          <div>Service 3</div>
          <div>Service 4</div>
          <div className="media">
            <img src="/insta.png" alt="" />
            <img src="/face.png" alt="" />
          </div>
        </div>
        <div className="third-footer">
          <div>About us</div>
          <div>Services</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
        <div>
          <div>Get in touch</div>
          <div className="station">60 Manor Station St. Fairport, NY 14450</div>
          <div>708-790-0000</div>
          <div>sales@buildit.site</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer