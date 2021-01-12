import React from 'react'
import './Analysis.css';
import AlienImage from './images/4-alien.png';
import StalkerImage from './images/5-stalker.jpg';

class Analysis extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      infoDisplayed: false,
      overviewDisplayed: false,
      lightingDisplayed: false,
    }

    this.infoClick = this.infoClick.bind(this)
    this.displayMovieInfo = this.displayMovieInfo(this)

    this.overviewClick = this.overviewClick.bind(this)
    this.displayOverview = this. displayOverview(this)

    this.lightingClick = this.lightingClick.bind(this)
    this.displayLighting = this. displayLighting(this)

    this.photoClick = this.photoClick.bind(this)
    this.displayPhotoInfo = this. displayPhotoInfo(this)
  }

  infoClick = () => {
    this.setState({infoDisplayed:!this.state.infoDisplayed})
  }

  overviewClick = () => {
    this.setState({overviewDisplayed:!this.state.overviewDisplayed})
  }

  lightingClick = () => {
    this.setState({lightingDisplayed:!this.state.lightingDisplayed})
  }

  photoClick = () => {
    this.setState({photoDisplayed:!this.state.photoDisplayed})
  }


  displayMovieInfo = () => {
    if (this.state.infoDisplayed) {
      return <p></p>  
    } else {
      return <div><u>Movie Info:</u> <br /> Alien (1979) <br /> Dir: Ridley Scott <br /> DP: Derek Vanlint <br /> IMDB: 9/10</div> 
    }
  }

  displayOverview = () => {
    if (this.state.overviewDisplayed) {
      return <p></p>  
    } else {
      return <div><i>After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a  <br />mysterious life form and they soon realize that its life cycle has merely begun.</i></div> 
    }
  }

  displayLighting = () => {
    if (this.state.lightingDisplayed) {
      return StalkerImage
    } else {
      return StalkerImage
    }
  }

  displayPhotoInfo = () => {
    if (this.state.overviewDisplayed) {
      return <p></p>  
    } else {
      return <div><u>Cinematography:</u> <br /> Single Point Perspective <br /> 35mm Film <br /> 3 points of lighting <br /> -key (1) hard <br /> -back at (2) <br /> -fill at camera (3)</div> 
    }
  }

  render() {
    return (
      <div>
        <h1 className="analysis__title">photography analysis:</h1>
        <div className="analysis__container">
          <img
            className="analysis__image"
            src={ this.state.lightingDisplayed ? StalkerImage : AlienImage }
            alt=""
          />
          <div className="movie__info">{ this.state.infoDisplayed ? this.displayMovieInfo : null }</div>
          <div className="photo__info">{ this.state.photoDisplayed ? this.displayPhotoInfo : null }</div>
        </div>
        
        <div className="analysis__buttons">
          <button onClick={this.infoClick}>movie info</button>
          <button onClick={this.overviewClick}>overview</button>

          <button onClick={this.lightingClick}>analyze</button>
          <button onClick={this.photoClick}>photo info</button>
        </div>
        <br />
        <div className="analysis__summary">{ this.state.overviewDisplayed ? this.displayOverview : null }</div>
        <hr className="separator"/>
        <h1 className="palette__title">color palette</h1>
        <hr className="separator"/>
      </div>
    );
  }
  
}

export default Analysis
