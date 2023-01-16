import React, { Fragment } from 'react'
import './Services.css'
import PageLayout from './PageLayout'
import {servicesData} from '../data/index'


const Services = () => {
  return (
    <PageLayout className="bg-transparent fixed">
      <main>
        <section className="servicesBg">
          <div className='wrapper-services'>
            <div className='services-head'>Services</div>
            <div className='services-title'>Owner and Investor with a reputation</div>
            <div className='services-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              expedita ex quia veritatis adipisci blanditiis debitis quae
              nostrum optio quibusdam, accusantium animi quasi odio, sint
              impedit, fuga sed aliquid eaque!
            </div>
          </div>
        </section>
        <section className='services-two'>
          {
            servicesData.map((service, index)=>(
              <div key={`${index}`}>
                <div>
                  <div>
                    <img src={service.img} alt="" />
                    <div>
                      <div>{service.title}</div>
                      <div>{service.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </section>
      </main>
    </PageLayout>
  );
}

export default Services