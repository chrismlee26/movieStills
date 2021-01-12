import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="FooterElements">
      <div class="footer__row__left">
        <div className="footer__text"><strong>powered by:</strong></div>
        <div className="footer__text">React, NodeJS, <del>Axios</del> & Firebase</div>
        <img
          className="footer__logo"
          href="https://www.themoviedb.org/documentation/api"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
          alt="TMDB"
        />
        <div className="footer__text">movieStillsAI API</div>
      </div>
      <div class="footer__row__right">
        <div className="footer__text">Want to send me amazon gift cards?</div>
        <div className="footer__text">Sign-up for updates</div>
        <div className="footer__text">email@email.com</div>
        <br></br>
        <div className="footer__text">copyright © 2020</div>
        <div className="footer__text">movieStillsAI</div>

      </div>
    </div>
  )
}

export default Footer
