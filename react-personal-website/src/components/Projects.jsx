import React from 'react'
import data from "../data/index.json";

function Projects() {
  return (
    <section className='portfolio--section' id='MyPortfolio'>
      <div className='portfolio--container-box'>
        <div className='portfolio--container'>
          <p className='sub--title'>Recent Projects</p>
          <h2 className='section--heading'>My Portfolio</h2>
        </div>
        <div>
          <button>Visit my Github</button>
        </div>
      </div>
      <div className='portfolio--section--container'>
        {data?.portfolio?.map((item, index) => (
          <div key={index} className='portfolio--section--card'>
            <div className='portfolio--section--img'>
              <img src={item.img} alt="Placeholder" />
            </div>
            <div className='portfolio--section--card--content'>
              <div>
                <h3 className='portfolio--section--title'>{item.title}</h3>
                <p className='text-md'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects