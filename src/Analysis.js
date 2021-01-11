import React, { Component } from 'react'
import './Analysis.css';
import AlienImage from './images/4-alien.png';
import StalkerImage from './images/5-stalker.jpg'
import data from './data'

class Analysis extends Component {
  render() {
    return (
      <div>

          return (

              <div>
                <h1 className="analysis__title">photography analysis:</h1>
                <div className="analysis__container">
                  <img
                    className="analysis__image"
                    src={AlienImage}
                    alt=""
                  />
                  <div className="movie__info">12345</div>
                  <div className="photo__info">photography text</div>
                </div>
                <div className="analysis__summary">12345</div>
                <div className="analysis__buttons">
                  <button>info</button>
                  <button>overview</button>
                  <button>show all</button>
                  <button>lighting</button>
                  <button>photography</button>
                </div>
                <hr className="separator"/>
                <h1 className="palette__title">color palette</h1>
                <hr className="separator"/>
              </div>

          );

        
    </div>
    );
  }
}





export default Analysis
