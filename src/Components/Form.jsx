import React from 'react'
import './Form.css'

const addresses = [
  {
    contact: "/contact1.png",
    name: "Tel",
    point: "708-790-0000",
  },
  {
    contact: "/contact2.png",
    name: "Email",
    point: "sales@buildit.site",
  },
  {
    contact: "/contact3.png",
    name: "Office",
    point: "60 Manor Station St.Fairport, NY 14450",
  },
];
const Form = () => {
  return (
    <section id='form'className="section-six">
      <div className="six-left">
        <div className="contact">Contact</div>
        <div className="touch">Get In Touch</div>
        <div className="address">
          {addresses.map((address, index) => (
            <div className="six-flex" key={`addresses-${index}`}>
              <img src={address.contact} alt="" />
              <div>
                <div className="name">{address.name}</div>
                <div className="point">{address.point}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form action="text">
        <div className="name-email">
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type="text" id="fname" name="fname" />
          </div>
        </div>
        <div className="form-input">
          <label htmlFor="subject">Subject</label>
          <input className="subject" type="text" id="fname" name="fname" />
        </div>
        <div className="form-input">
          <label htmlFor="message">Message</label>
          <textarea name="text" id="message" cols="30" rows="5"></textarea>
        </div>
        <button>Send message</button>
      </form>
    </section>
  );
}

export default Form