import React from 'react'
import PageLayout from './PageLayout'
import { addresses } from '../data'
import './Contacts.css'

const Contacts = () => {
  return (
    <PageLayout>
      <main className='home-contacts'>
        <section className="home-sections">
          <div className="figure">
            <img src="/Figure.svg" alt="figure" />
          </div>
          <div className="section-six">
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
                <input
                  className="subject"
                  type="text"
                  id="fname"
                  name="fname"
                />
              </div>
              <div className="form-input">
                <label htmlFor="message">Message</label>
                <textarea
                  name="text"
                  id="message"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <button>Send message</button>
            </form>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

export default Contacts