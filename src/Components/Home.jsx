import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import PageLayout from './PageLayout';

const Home = () => {
  return (
    <PageLayout>
      <main className="home">
        <section className="home-sections">

        <div className="figure">
          <img src="/Figure.svg" alt="figure" srcset="" />
        </div>
          <div className="leftSection">
            <h1 className="development">Development Company</h1>
            <p className="developer">
              Forward thinking real estate developer, owner and investor with a
              reputation
            </p>
            <div className="button">
              <button className="services">Services</button>
              <button className="about">About the Company</button>
            </div>
          </div>
          <div className="right-section">
            <div className="top-house">
              <img
                className="white-house"
                src="/White house.png"
                alt=""
                srcset=""
              />
              <img src="/Blue house.png" alt="" srcset="" />
              <img src="/Pink house.png" alt="" srcset="" />
            </div>
            <div className="down-house">
              <img
                className="black-house"
                src="/Black house.png"
                alt=""
                srcset=""
              />
              <img
                className="white-pool"
                src="/White pool.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

export default Home