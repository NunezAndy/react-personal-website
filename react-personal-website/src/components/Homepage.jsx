import React from 'react'
import Skills from './Skills';

function Homepage() {
  return (
    <section id="heroSection" className='hero--section'>
        <div className='hero--section--content--box'>
            <div className='hero--section--content'>
            <p className='section--title'>Hi, I'm Andy Nunez</p>
            <h1 className='hero--section--title'>
                <span className='hero--section-title--color'>Full Stack</span>{" "}
                <br />
                Developer
            </h1>
            <p className='hero--section-description'>As a professional web developer I'm responsible for designing, creating, and maintaining websites and web applications. 
                <br /> I strive to work with designers and other team members to bring a website or web application to life!</p>
        </div>
        <button className='btn btn-primary'>Download Resume</button>
        </div>
        <div className='hero--section--img'>
            <img src="./images/me.jpeg" alt="" />
        </div>
        <div>
          <Skills />
        </div>
    </section>
  
  );
}

export default Homepage