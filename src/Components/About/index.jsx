import React from 'react'
import PageLayout from '../PageLayout';
import './About.css';
import Call from '../Call';
import Logos from '../Logos';
import Button from '../Button';

const images = [
  {
    imageSquare: "/rec1.png",
    imageNumber: "/_200.png",
    number: "Number",
  },
  {
    imageSquare: "/rec2.png",
    imageNumber: "/_70.png",
    number: "Number",
  },
  {
    imageSquare: "/rec3.png",
    imageNumber: "/_20.png",
    number: "Number",
  },
];

const passports = [
  {
    pictures:'/pic1.png', 
    surnames: 'Name Surname',
    workers: 'Worker',
  },
  {
    pictures:'/pic2.png', 
    surnames: 'Name Surname',
    workers: 'Worker',
  },
  {
    pictures:'/pic3.png', 
    surnames: 'Name Surname',
    workers: 'Worker'
  },
  {
    pictures:'/pic4.png', 
    surnames: 'Name Surname',
    workers: 'Worker',
  },
  {
    pictures:'/pic5.png', 
    surnames: 'Name Surname',
    workers: 'Worker',
  },
  {
    pictures:'/pic6.png', 
    surnames: 'Name Surname',
    workers: 'Worker',
  },
  {
    pictures:'/pic7.png', 
    surnames: 'Name Surname',
    workers: 'Worker',
  },
  {
    pictures:'/pic9.png', 
    surnames: 'Name Surname',
    workers: 'Worker',
  },
  {
    pictures:'/pic8.png', 
    surnames: 'Name Surname',
    workers: 'Worker'
  }
]
const About = () => {
  return (
    <PageLayout>
      <main>
        <section className="main-container">
          <div className="first-wrapper center">
            <div className="image-wrapper">
              <img className="image-one" src="/about1.png" alt="" />
              <img className="image-two" src="/about2.png" alt="" />
            </div>
            <div className="about-part">
              <p className="about-us">About us</p>
              <div className="about-title">
                Owner and investor with a reputation
              </div>
              <div className="about-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                Integer rhoncus, eros vel euismod tempor, ipsum magna tristique
                nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis
                semper aliquet. Cras hendrerit molestie sapien sed fermentum.
                Mauris dui tortor, viverra vel ultrices in, congue sed ex.
              </div>
            </div>
          </div>
        </section>
        <section className="second-section">
          <p className="statistic">Statistics</p>
          <div className="dev">Development in numbers</div>
          <div className="square">
            <div className="wrap">
              {images.map((image, index) => (
                <div key={`${index}`} className="images-wrapper">
                  <div className="flex-images">
                    <img className="img" src={image.imageSquare} alt="" />
                    <div className="imageNumber">
                      <img src={image.imageNumber} alt="" />
                      <div className="numbering">{image.number}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Logos />
        </section>
        <section className=" bg-[#F4F7FF]">
          <div className="third-section center">
            <p className="statistic">Our team</p>
            <p className="let">Let's meet</p>
            <div className="passports">
              {passports.map((passport, index) => (
                <div key={`${index}`}>
                  <div className="shadow">
                    <img src={passport.pictures} alt="" />
                    <div className="surname-wrapper">
                      <div className="surname">{passport.surnames}</div>
                      <div className="worker">{passport.workers}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Call />
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

export default About