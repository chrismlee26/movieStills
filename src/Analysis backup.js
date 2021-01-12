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
    }

    this.infoClick = this.infoClick.bind(this)
    this.displayMovieInfo = this.displayMovieInfo(this)

  }

  infoClick = () => {
    this.setState({infoDisplayed:!this.state.infoDisplayed})
  }

  displayMovieInfo = () => {
    if (this.state.infoDisplayed) {
      return <p></p>  
    } else {
      return <div><u>Movie Info:</u> <br /> Alien (1979) <br /> Dir: Ridley Scott <br /> DP: Derek Vanlint <br /> IMDB: 9/10</div> 
    }
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
          <div className="movie__info">{ this.state.infoDisplayed ? this.displayMovieInfo : null }</div>
          <div className="photo__info">1234567</div>
        </div>
        <div className="analysis__summary">1234567</div>
        <div className="analysis__buttons">
          <button onClick={this.infoClick}>info</button>
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
