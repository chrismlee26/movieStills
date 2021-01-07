import React from 'react'
import './Analysis.css';
import AlienImage from './images/4-alien.png';
// Import AnalysisList Photo + Data to load into the src image

function Analysis() {
  return (
    <div>
      <h1 className="analysis__title">photography analysis:</h1>
      {/* this div to be replaced with component */}
      <div className="analysis__container">
        <img
          className="analysis__image"
          src={AlienImage}
          alt=""
        />
        <div className="movie__info">Bottom Left</div>
      </div>
      <div className="analysis__buttons">
        <button>info</button>
        <button>rating</button>
        <button>show all</button>
        <button>lighting</button>
        <button>photography</button>
      </div>
      {/* Palette to be inserted here */}
      <hr className="separator"/>
      <h1 className="palette__title">color palette:</h1>
      <hr className="separator"/>
    </div>
  )
}

export default Analysis
