import React from 'react'
import AlienImage from './images/4-alien.png';

function Analysis() {
  return (
    <div>
      <h1>photography analysis</h1>
      <img
        className="analysis__image"
        src={AlienImage}
        alt=""
      />
      <div>
        <h1> your stats: </h1>
        <h3> 
          perspective:
          lens
          aperture:
          ISO:
          exposure:
          color:
          <br></br>
          most similar: 
        </h3>
      </div>
      <div>
        <img></img>
        <img></img>
      </div>
      <div>
        <button>upload</button>
        <button>analysis</button>
        <button><del>filters</del></button>
      </div>
    </div>
  )
}

export default Analysis
