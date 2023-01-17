import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import { addresses } from "../data";
import Button from "./Button";

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
  const logos = ["/Vector.png", "/Vector2.png", "/Vector3.png", "/Vector4.png"];
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
          <section className="home-sections">
            <div className="figure">
              <img src="/Figure.svg" alt="figure"/>
            </div>
            <div className="leftSection">
              <h1 className="development">Development Company</h1>
              <p className="developer">
                Forward thinking real estate developer, owner and investor with
                a reputation
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
                />
                <img src="/Blue house.png" alt=""/>
                <img src="/Pink house.png" alt="" />
              </div>
              <div className="down-house">
                <img
                  className="black-house"
                  src="/Black house.png"
                  alt=""
                />
                <img
                  className="white-pool"
                  src="/White pool.png"
                  alt=""
                />
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
                    <p className="innovation-title">{innovation.title}</p>
                    <p className="description">{innovation.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section-three">
            <div className="logos">
              {logos.map((logo, index) => (
                <div key={`logos-${index}`}>
                  <img src={logo} alt="" />
                </div>
              ))}
            </div>
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
                <div className="pt-20">
                  <img className="first-image" src="/Photo1.png" alt="" />
                  <img className="second-image" src="/Photo3.png" alt="" />
                </div>
                <div>
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
          <section className="section-six">
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
          </section>
        </main>
      </PageLayout>
    </div>
  );
};

export default Home;
