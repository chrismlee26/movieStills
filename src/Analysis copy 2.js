import React, { setState, Component } from 'react'
import './Analysis.css';
import axios from 'axios'
import AlienImage from './images/4-alien.png';
import StalkerImage from './images/5-stalker.jpg';

class Analysis extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
      movies: `Alien (1979) Dir: Ridley Scott`, 
      overview: `1234567890-`,
      photography: `987654321`
    };

    const infoOn = this.state.movies = false;
  }

  render() {
    return (
      <div>
        <h1 className="analysis__title">photography analysis:</h1>
        <div className="analysis__container">
          <img
            className="analysis__image"
            src={AlienImage}
            alt=""
          />
          <div className="movie__info">{this.state.movies ? <p>{this.state.movies}</p> : <p>falsy</p>}</div>
          <div className="photo__info">{this.state.photography}</div>
        </div>
        <div className="analysis__summary">{this.state.overview}</div>
        <div className="analysis__buttons">
          <button onClick={this.infoOn}>info</button>
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
  }
}

export default Analysis
