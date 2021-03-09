import React from 'react';
import '../scss/Footer.scss';
import EmailImage from '../assets/images/message.svg';
import PhoneImage from '../assets/images/phone.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner d-flex">
        <div className="footer-left">
          <div className="college-name mt-3 mb-3">
            Віртуальне підприємство College <span className="college-name-numbers">491</span>
          </div>
          <div className="college-contacts">
            <div className="coolege-contacts__email">
              <span>
                <img className="coolege-contacts__icon" src={EmailImage} alt="" />
              </span>{' '}
              college491@gmail.com
            </div>
            <div className="coolege-contacts__phone-number mt-3">
              <span>
                <img className="coolege-contacts__icon" src={PhoneImage} alt="" />
              </span>{' '}
              +380 12 345 6789
            </div>
          </div>
          <div className="web-site-creator mt-5">Created by Anton Tamazlukar 2020</div>
        </div>
        <div className="footer-right">
          <div className="footer-social-networks"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
