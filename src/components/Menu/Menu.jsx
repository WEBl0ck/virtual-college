import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Menu.scss';

function Menu(props) {
  useEffect(() => {
    if (props.menuVisible) {
      document.body.style.overflow = 'hidden';
    }
    // Указываем, как сбросить этот эффект:
    return function cleanup() {
      document.body.style.overflow = 'unset';
    };
  });

  return (
    <div className="menu d-flex justify-content-center align-items-center">
      <div className="menu-list d-flex flex-column">
        <Link to={'/information'} onClick={props.menuHandler} className="menu-item">
          {props.information}
        </Link>
        <Link to={'/about'} onClick={props.menuHandler} className="menu-item">
          {props.about}
        </Link>
        <Link to={'/news'} onClick={props.menuHandler} className="menu-item">
          {props.news}
        </Link>
        <Link to={'/contacts'} onClick={props.menuHandler} className="menu-item">
          {props.announcement}
        </Link>
      </div>
    </div>
  );
}

export default Menu;
