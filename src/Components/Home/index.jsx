import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import PageLayout from "../PageLayout";
import Form from "../Form";
import Logos from "../Logos";
import Button from "../Button";

const Home = () => {
  const innovations = [
    {
      icon: "/Icon1.png",
      title: "Featured Listing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "/Icon2.png",
      title: "Available Properties",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "/Icon3.png",
      title: "In the news",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
  ];
  
  const cards = [
    "/Card1.png",
    "/card2.png",
    "/card3.png",
    "/card4.png",
    "/card5.png",
    "/card6.png",
  ];
 
  return (
    <div>
      <PageLayout>
        <main className="home">
          <section className="bg-[#e1ebfa] relative">
            <div className="figure">
              <img src="/public/Figure.png" alt="figure" />
            </div>
            <div className="home-sections center">
              <div className="leftSection">
                <h1 className="development">Development Company</h1>
                <p className="developer">
                  Forward thinking real estate developer, owner and investor
                  with a reputation
                </p>
                <div className="button">
                  <button className="services">Services</button>
                  <button className="about">About the Company</button>
                </div>
              </div>
              <div className="right-section">
                <div className="top-house">
                  <img className="white-house" src="/White house.png" alt="" />
                  <img className="blue-house" src="/Blue house.png" alt="" />
                  <img className="pink-house" src="/Pink house.png" alt="" />
                </div>
                <div className="down-house">
                  <img className="black-house" src="/Black house.png" alt="" />
                  <img className="white-pool" src="/White pool.png" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="section-two">
            <div className="wrapper">
              <p className="title">Innovative Execution</p>
              <div className="second-wrapper">
                {innovations.map((innovation, index) => (
                  <div key={`innovation-${index}`} className="little-wrapper">
                    <div className="img-box">
                      <img src={innovation.icon} alt="" />
                    </div>
                    <div className="inside-wrapper">
                      <p className="innovation-title">{innovation.title}</p>
                      <p className="description">{innovation.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section-three">
            <Logos/>
            <div className="about-section">
              <img src="/Фото.png" alt="" />
              <div className="about-right">
                <p className="about-us">About us</p>
                <div className="about-title">
                  Owner and investor with a reputation
                </div>
                <div className="about-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                  Integer rhoncus, eros vel euismod tempor, ipsum magna
                  tristique nisi, quis ullamcorper enim magna eu orci. Sed
                  semper ex quis semper aliquet. Cras hendrerit molestie sapien
                  sed fermentum. Mauris dui tortor, viverra vel ultrices in,
                  congue sed ex.
                </div>
                <div className="w-[12.5rem] h[3.25rem]">
                  <Button label="Explore" />
                </div>
              </div>
            </div>
          </section>
          <section className="section-four">
            <div className="wrapper-four">
              <div className="left-four">
                <div className="four-available">Available Properties</div>
                <div className="four-featured">Featured Listing</div>
                <div className="four-lorem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                  Integer rhoncus, eros vel euismod tempor, ipsum magna
                  tristique nisi, quis ullamcorper enim magna eu orci. Sed
                  semper ex quis semper aliquet. Cras hendrerit molestie sapien
                  sed fermentum. Mauris dui tortor, viverra vel ultrices in,
                  congue sed ex.
                </div>
                <div className="w-[12.5rem] h[3.25rem]">
                  <Button label="Explore" />
                </div>
              </div>
              <div className="right-four">
                <div className="pt-20 four-top">
                  <img className="first-image" src="/Photo1.png" alt="" />
                  <img className="second-image" src="/Photo3.png" alt="" />
                </div>
                <div className="four-down">
                  <img className="third-image" src="/Photo2.png" alt="" />
                  <img className="fourth-image" src="/Photo4.png" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="section-five">
            <div className="five-one">Socials</div>
            <div className="five-two">On Instagram</div>
            <div className="cards">
              {cards.map((card, index) => (
                <div key={`cards-${index}`}>
                  <img src={card} alt="" />
                </div>
              ))}
            </div>
          </section>
          <Form className='send'/>
        </main>
      </PageLayout>
    </div>
  );
};

export default Home;
