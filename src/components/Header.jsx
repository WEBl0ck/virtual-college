import React, { useState } from 'react';
import '../scss/Header.scss';
import { Navbar, Nav, NavDropdown, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UAFlag from '../assets/images/ua.png';
import RUFlag from '../assets/images/ru.png';
import USFlag from '../assets/images/us.png';
import SearchIcon from '../assets/images/search-icon.png';
import '../scss/Hamburger.scss';
import ClassNames from 'classnames';
import Menu from './Menu';

function Header() {
  const [active, setActive] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Navbar className="d-flex header" bg="light" expand="lg">
      <Container>
        <Nav className="w-100 d-flex justify-content-between align-items-center flex-row">
          <div className="header-left-group d-flex">
            <div className="header-toggler">
              <button
                className={ClassNames('hamburger', 'hamburger--emphatic', active ? 'is-active' : null)}
                onClick={() => {
                  setActive((active) => !active);
                  setMenuVisible((menuVisible) => !menuVisible);
                }}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
            <div className="header-menu">{menuVisible && <Menu menuVisible={menuVisible} />}</div>

            <NavDropdown title="Інформація" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.5">Контакти</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Організація освітнього процесу</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Стандарти освіти</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Освітня програма</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Навчальні плани</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Особливості навчання в умовах карантину</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Про Коледж" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/2.1">Історія коледжу</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">Стратегія коледжу</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">Можливості освіти</NavDropdown.Item>
            </NavDropdown>
          </div>
          <Navbar.Brand className="header-logo ml-3 mr-3">
            <Link to="/">
              College <span className="header-logo-number">491</span>
            </Link>
          </Navbar.Brand>
          <div className="header-right-group d-flex align-items-center">
            <Nav.Item className="nav-link">
              <Link to="/news">Новини</Link>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <Link to="/announcements">Оголошення</Link>
            </Nav.Item>
            <div className="header-select-language">
              <Dropdown className="select-language">
                <Dropdown.Toggle className="select-language__button">
                  <img className="language-ua" src={UAFlag} alt="user pic" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="select-language__menu">
                  <Dropdown.Item className="select-language__menu-item" href="#/action-1">
                    <img src={RUFlag} alt="" />
                  </Dropdown.Item>
                  <Dropdown.Item className="select-language__menu-item" href="#/action-2">
                    <img src={USFlag} alt="" />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="header-search d-flex align-items-center ml-3">
              <img className="header-search__icon" src={SearchIcon} alt="" />
            </div>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
