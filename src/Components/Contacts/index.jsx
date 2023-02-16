import React from 'react'
import PageLayout from '../PageLayout'
import Form from '../Form'
import './Contacts.css'

const Contacts = () => {
  return (
    <PageLayout>
        <section className="home-contacts">
          <div className="fig">
            <img src="/Figure.png" alt="figure"/>
          </div>
        <Form />
        </section>
    </PageLayout>
  );
}

export default Contacts