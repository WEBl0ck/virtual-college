import React, { useEffect } from 'react';
import '../scss/Menu.scss';
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
        <div className="menu-item">Інформація</div>
        <div className="menu-item">Про Коледж</div>
        <div className="menu-item">Новини</div>
        <div className="menu-item">Контакти</div>
      </div>
    </div>
  );
}

export default Menu;
