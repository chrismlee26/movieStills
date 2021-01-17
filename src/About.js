import React from 'react'
import AboutImage from './images/kubrick-2000.png';
import './About.css';


function About() {
  return (
    <div>
      <h1 className="about__title">who are we?</h1>
      <img
        className="about__image"
        src={AboutImage}
        alt=""
      />
      <p className="about__text">
      movieStillsAi provides photography analytics through an image recognition neural network containing the greatest works of cinematographic art. Use our curated data for your own design + photography projects or just hang out, discover awesome movies, enjoy & explore.
      </p>
      <hr className="separator"/>
    </div>
  );
}

export default About
