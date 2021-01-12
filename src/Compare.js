import React from 'react'
import AlienImage from './images/4-alien.png';
import StalkerImage from './images/5-stalker.jpg';
import './Compare.css'

function Compare() {
  return (
    <div>
      <h1 className="compare__title">learn from the greats. compare your photos with your favorite films:</h1>
      <img
        className="compare__image"
        src={StalkerImage}
        alt="123"
      />
      <div className="compare__container">
        <div className="compare__text">
          <h1> your stats: </h1>
          <h3>
            perspective: {/* {perspective} */}
            <br></br>
            lens: {/* {lens} */}
            <br></br>
            aperture:  {/* {aperture} */}
            <br></br>
            ISO:  {/* {ISO} */}
            <br></br>
            exposure:  {/* {exposure} */}
            <br></br>
            color:  {/* {color} */}
            <br></br>
            most similar:  {/* `${director}'s "${title}" `*/}
            <br></br>
            subject:  {/* {subject} */}
            <br></br>
            category:  {/* {type} */}
            <br></br>
            lighting:  {/* {lighting} */}
          </h3>
        </div>
        <div className="compare__right">
          <div className="compare__thumbs">
            <img className="thumb__one"
              src={StalkerImage}
              alt="123">
            </img>
            <img className="thumb__one"
              src={StalkerImage}
              alt="123">
          </img>
          </div>
          <div className="compare__buttons">
            <button>upload</button>
            <button>analyze</button>
            <button><del>filters</del></button>
          </div>
        </div>
      </div>
      <hr className="separator"/>
    </div>
  )
}

export default Compare
