import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="FooterElements">
      <div class="row">
        <h5 className="footer__text">powered by:</h5>
        <h5 className="footer__text">React, NodeJS, Axios & Firebase</h5>
        <img
          className="footer__logo"
          href="https://www.themoviedb.org/documentation/api"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
          alt="TMDB"
        />
        <h5 className="footer__text">movieStills API access</h5>
      </div>
      <div class="row">
        <h5 className="footer__text">Want to send me amazon gift cards?</h5>
        <h5 className="footer__text">email@email.com</h5>
        <br></br>
        <h5 className="footer__text">copyright © 2020</h5>
        <h5 className="footer__text">movieStillsAI</h5>

      </div>
    </div>
  )
}

export default Footer
