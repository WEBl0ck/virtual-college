import React from 'react';
import '../scss/AnnounceItem.scss';

import NewsIcon from '../assets/images/warning-sign.svg';

function AnnounceItem({ announceImage, announceName, announceDate, announceDescribe }) {
  return (
    <div className="announce-item d-flex">
      <div className="announce-item__image">
        <img src={announceImage ? announceImage : NewsIcon} alt="" />
      </div>
      <div className="announce-item__info">
        <div className="announce-item__name">{announceName}</div>
        <div className="announce-item__date">{announceDate}</div>
        <div className="announce-item__describe" dangerouslySetInnerHTML={{ __html: announceDescribe }}></div>
      </div>
    </div>
  );
}

export default AnnounceItem;
