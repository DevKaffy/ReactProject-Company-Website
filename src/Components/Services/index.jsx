import React, { Fragment } from 'react'
import PageLayout from '../PageLayout'
import { servicesData } from '../../data'
import Call from '../Call'
import './Services.css'


const Services = () => {
  return (
    <PageLayout>
      <main>
        <section className="servicesBg">
          <div className="wrapper-services center">
            <div className="services-head">Services</div>
            <div className="services-title">
              Owner and Investor with a reputation
            </div>
            <div className="services-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            </div>
          </div>
        </section>
        <section className='services-two'>
          <div className="services-wrapper center">
            {servicesData.map((service, index) => (
              <div key={`${index}`}>
                <div>
                  <div className="map-services">
                    <img className="map-image" src={service.img} alt="" />
                    <div className="desc-wrapper">
                      <div className="heading">{service.heading}</div>
                      <div className="service-title">{service.title}</div>
                      <div className="service-description">{service.desc}</div>
                      <div className="flex-boxes">
                        <div className="box">
                          <div className="box-name">{service.name}</div>
                          <div className="stat">{service.statistics}</div>
                        </div>
                        <div className="box">
                          <div className="box-name">{service.name}</div>
                          <div className="stat">{service.statistics}</div>
                        </div>
                      </div>
                      <div className="see-arrow">
                        <div className="see">{service.see}</div>
                        <img className="arrow" src={service.arrow} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Call />
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

export default Services