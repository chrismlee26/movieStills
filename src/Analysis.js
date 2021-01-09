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
        <div className="movie__info">Bottom Left</div> {/* Dynamically changed from info */}
        <div className="photo__info">Bottom Right</div> {/* Dynamically changed from photography */}
      </div>
      <div className="analysis__summary">
        <p>summary text</p>
      </div>
      <div className="analysis__buttons">
        <button>info</button>
        <button>overview</button> {/* Pulls TMDB API to make new text */}
        <button>show all</button> {/* Shows everything all buttons go yellow */}
        <button>lighting</button> {/* Photo changes to lighting */}
        <button>photography</button> {/* Photo changes to photography + BR API */}
      </div>
      {/* Palette to be inserted here */}
      <hr className="separator"/>
      <h1 className="palette__title">color palette</h1>
      <hr className="separator"/>
    </div>
  )
}

export default Analysis
