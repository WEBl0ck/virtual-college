import React from 'react';

import './Footer.scss';

import EmailImage from '../../assets/images/message.svg';
import PhoneImage from '../../assets/images/phone.svg';
import { ReactComponent as ReactLogo } from '../../assets/images/github.svg';

import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-inner d-flex">
        <div className="footer-left">
          <div className="college-name mt-3 mb-3">
            {t('footer_title')} College <span className="college-name-numbers">491</span>
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
          <div className="web-site-creator mt-3">
            <a href="https://github.com/WEBl0ck/virtual-college">
              Created by Anton Tamazlukar <ReactLogo className="ml-2" width="22" height="22" fill="#FFF" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-social-networks"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
