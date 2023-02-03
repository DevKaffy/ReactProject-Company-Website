import React from 'react'
import PageLayout from '../PageLayout'
import './Project.css'
import { projects } from '../../data'
import Call from '../Call'
import Button from '../Button'

const Project = () => {
  return (
    <PageLayout>
      <main>
        <section className="project-one">
          <div className="wrapper-services">
            <div className="services-head">Projects</div>
            <div className="services-title">
              Owner and Investor with a reputation
            </div>
            <div className="services-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              expedita ex quia veritatis adipisci blanditiis debitis quae
              nostrum optio quibusdam, accusantium animi quasi odio, sint
              impedit, fuga sed aliquid eaque!
            </div>
          </div>
        </section>
        <section className="project-two">
          <div className="projects-title">Our Projects</div>
          <div className="projects-map">
            {projects.map((project, index) => (
              <div key={`${index}`}>
                <div className="pro-map shadow">
                  <img src={project.img} alt="" />
                  <div className="surname-wrapper">
                    <div className="surname">{project.name}</div>
                    <div className="worker">{project.info}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="button-wrapper">
            <Button
              label="More"
              classStyle="w-[13rem]"
              superClass="mt-[3.75rem] bg-[#4397A4]"
            />
          </div>
          <div className='call-wrapper'>
            <Call />
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

export default Project