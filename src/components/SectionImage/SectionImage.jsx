import React, { useState } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

import WarningIcon from '../../assets/images/warning.svg';

import './SectionImage.scss';

const SectionImage = ({ src, className }) => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div className="image-container">
      {src ? (
        <img onLoad={() => setIsLoaded(false)} src={src} alt="" className={className}></img>
      ) : (
        <img onLoad={() => setIsLoaded(false)} src={WarningIcon} alt="warning icon"></img>
      )}
      <MoonLoader loading={isLoaded} size={50} css="position: absolute" />
    </div>
  );
};

export default SectionImage;
