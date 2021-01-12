import React from 'react'
import './Analysis.css';
import AlienImage from './images/4-alien.png';
import AlienImage2 from './images/4-alien-analysis.png';

class Analysis extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      infoDisplayed: false,
      overviewDisplayed: false,
      analyzeDisplayed: false,
      photoDisplayed: false
    }

    this.infoClick = this.infoClick.bind(this);
    this.displayMovieInfo = this.displayMovieInfo(this);

    this.overviewClick = this.overviewClick.bind(this);
    this.displayOverview = this.displayOverview(this);

    this.analyzeClick = this.analyzeClick.bind(this);
    this.displayLighting = this.displayLighting(this);

    this.photoClick = this.photoClick.bind(this);
    this.displayPhotoInfo = this.displayPhotoInfo(this);
  }

  infoClick = () => {
    this.setState({infoDisplayed:!this.state.infoDisplayed})
  }

  overviewClick = () => {
    this.setState({overviewDisplayed:!this.state.overviewDisplayed})
  }

  analyzeClick = () => {
    this.setState({analyzeDisplayed:!this.state.analyzeDisplayed})
  }

  photoClick = () => {
    this.setState({photoDisplayed:!this.state.photoDisplayed})
  }

  allClick = () => {
    this.setState({infoDisplayed:!this.state.infoDisplayed})
    this.setState({overviewDisplayed:!this.state.overviewDisplayed})
    this.setState({analyzeDisplayed:!this.state.analyzeDisplayed})
    this.setState({photoDisplayed:!this.state.photoDisplayed})
  }

  displayMovieInfo = () => {
    if (this.state.infoDisplayed) {
      return <p></p>  
    } else {
      return <div><u>Movie Info:</u> <br /> <strong>Alien</strong> (1979) <br /> Dir: Ridley Scott <br /> DP: Derek Vanlint <br /> Horror, Sci-Fi <br /> 1h 57min<br /> IMDB: 9/10</div> 
    }
  }

  displayOverview = () => {
    if (this.state.overviewDisplayed) {
      return <p></p>  
    } else {
      return <div><strong><u>Alien (1979):</u></strong> <br /> <i>"After a space merchant vessel receives an unknown transmission as a distress call, one of the crew  <br /> is attacked by a mysterious life form and they soon realize that its life cycle has merely begun."</i></div> 
    }
  }

  displayLighting = () => {
    if (this.state.analyzeDisplayed) {
      return AlienImage2
    } else {
      return AlienImage2
    }
  }

  displayPhotoInfo = () => {
    if (this.state.photoInfoDisplayed) {
      return <p></p>  
    } else {
      return <div><u>Photography:</u> <br /> Baroque Diagonal <br /> 35mm Film <br /> <strong>3</strong> light sources <br /> -key [1] (hard) <br /> -back [2] <br /> -fill at camera [3]</div> 
    }
  }

  render() {
    return (
      <div>
        <h1 className="analysis__title">photography analysis:</h1>
        <div className="analysis__container">
          <img
            className="analysis__image"
            src={ this.state.analyzeDisplayed ? AlienImage2 : AlienImage }
            alt=""
          />
          <div className="movie__info">{ this.state.infoDisplayed ? this.displayMovieInfo : null }</div>
          <div className="photo__info">{ this.state.photoDisplayed ? this.displayPhotoInfo : null }</div>
        </div>
        <div className="analysis__buttons">
          <button className="analysis__button" onClick={this.infoClick}>info</button>
          <button className="analysis__button" onClick={this.overviewClick}>overview</button>
          <button className="analysis__button" onClick={this.allClick}>show all</button>
          <button className="analysis__button" onClick={this.analyzeClick}>analyze</button>
          <button className="analysis__button" onClick={this.photoClick}>photography</button>
        </div>
        <br />
        <div className="analysis__summary">{ this.state.overviewDisplayed ? this.displayOverview : null }</div>
        {/* <hr className="separator"/> */}
      </div>
    );
  }
  
}

export default Analysis
