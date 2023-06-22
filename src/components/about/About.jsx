import React from 'react'
import "./About.css";
import AboutBox from "./AboutBox";
import AboutImg from "../../assets/avatar-2.svg";
const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>


      <div className="about__container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">15%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name"> UI/UX Design</h3>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name"> Dota Player</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage dotaplayer"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About