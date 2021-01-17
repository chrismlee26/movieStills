import React from 'react'
import StalkerImage from './images/5-stalker.jpg';
import WomanImage from './images/5-woman.png';
import CompareImage from './images/5-compare.png';
import './Compare.css'

class Compare extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      statsDisplayed: false,
      thumbOneDisplayed: false,
      thumbTwoDisplayed: false,
      compareDisplayed: false,
    }

    this.uploadClick = this.uploadClick.bind(this);
    this.displayStats = this.displayStats(this);

    this.compareClick = this.compareClick.bind(this);

    this.displayThumbOne = this.displayThumbOne(this);
    this.displayThumbTwo = this.displayThumbTwo(this);
  }

  uploadClick = () => {
    this.setState({statsDisplayed:!this.state.statsDisplayed})
    this.setState({thumbOneDisplayed:!this.state.thumbOneDisplayed})
    this.setState({thumbTwoDisplayed:!this.state.thumbTwoDisplayed})    
  }

  compareClick = () => {
    this.setState({compareDisplayed:!this.state.compareDisplayed})
    // this.setState({thumbTwoDisplayed:!this.state.thumbTwoDisplayed})    
  }

  displayStats = () => {
    if (this.state.statsDisplayed) {
      return <p></p>  
    } else {
      return <div><u><strong>your photo:</strong></u><br /><small>one-point perspective<br />35mm lens<br />aperture: f/4.0<br />ISO: 1600<br />exposure: 1/125<br />color: bw<br />subject: person<br />category: street<br />lighting: natural <br />most similar: <u>Andrei Tarkovski's "Stalker"</u></small></div>
    }
  }

  displayThumbOne = () => {
    if (this.state.thumbOneDisplayed) {
      return WomanImage
    } else {
      return WomanImage
    }
  }

  displayThumbTwo = () => {
    if (this.state.thumbTwoDisplayed) {
      return StalkerImage
    } else {
      return StalkerImage
    }
  }

  render() {
    return (
      <div>
        <h1 className="compare__title">learn from the greats.<br /> compare your photos with your favorite films:</h1>
        <div className="compare__buttons">
          <button className="compare__button" onClick={this.uploadClick}><small>1</small> upload</button>
          <button className="compare__button" onClick={this.compareClick}><small>2</small> compare</button>
          <button className="compare__button"><del><small>3</small> filter</del></button>
        </div>
        <div className="bottom__content">
          <img
            className="compare__image"
            src={ this.state.compareDisplayed ? CompareImage : '' }
            alt=""
          />
          
          <div className="compare__thumbs">
            <img 
              className="thumb__one"
              src={ this.state.thumbOneDisplayed ? WomanImage : '' }
              alt="">
            </img>
            <img 
              className="thumb__two"
              src={ this.state.thumbTwoDisplayed ? StalkerImage : '' }
              alt="">
            </img>
          </div>
          <div className="compare__text">{ this.state.statsDisplayed ? this.displayStats : null }</div>
        </div>
        <hr className="separator"/>
      </div>
    )
  }
}

export default Compare
