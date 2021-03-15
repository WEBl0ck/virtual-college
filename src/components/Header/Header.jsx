import React, { useState } from 'react';

import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import UAFlag from '../../assets/images/ua.png';
import RUFlag from '../../assets/images/ru.png';
import USFlag from '../../assets/images/us.png';
import SearchIcon from '../../assets/images/search-icon.png';

import './Header.scss';
import '../Hamburger/Hamburger.scss';

import ClassNames from 'classnames';
import { Menu, Search } from '../index';

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const { t, i18n } = useTranslation();

  const menuHandler = () => {
    setMenuVisible((menuVisible) => !menuVisible);
  };

  const searchHandler = () => {
    setVisibleSearch((visibleSearch) => !visibleSearch);
  };

  return (
    <Navbar className="d-flex header" bg="light" expand="lg">
      <Container>
        <Nav className="w-100 d-flex justify-content-between align-items-center flex-row">
          <div className="header-left-group d-flex">
            <div className="header-toggler">
              <button
                className={ClassNames('hamburger', 'hamburger--emphatic', menuVisible ? 'is-active' : null)}
                onClick={() => {
                  setMenuVisible((menuVisible) => !menuVisible);
                }}>
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
            <div className="header-menu">
              {menuVisible && (
                <Menu
                  menuVisible={menuVisible}
                  menuHandler={menuHandler}
                  information={t('header_information')}
                  about={t('header_about')}
                  news={t('header_news')}
                  announcement={t('header_announcement')}
                />
              )}
            </div>
            <Nav.Item className="nav-link">
              <NavLink to="/information" activeClassName="header-is-active">
                {t('header_information')}
              </NavLink>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <NavLink to="/about" activeClassName="header-is-active">
                {t('header_about')}
              </NavLink>
            </Nav.Item>
          </div>
          <Navbar.Brand className="header-logo ml-3 mr-3">
            <Link to="/">
              College <span className="header-logo-number">491</span>
            </Link>
          </Navbar.Brand>
          <div className="header-right-group d-flex align-items-center">
            <Nav.Item className="nav-link">
              <NavLink to="/news" activeClassName="header-is-active">
                {t('header_news')}
              </NavLink>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <NavLink to="/announcements" activeClassName="header-is-active">
                {t('header_announcement')}
              </NavLink>
            </Nav.Item>
            <div className="header-select-language">
              <Dropdown className="select-language">
                <Dropdown.Toggle className="select-language__button">
                  {i18n.language === 'ru' ? (
                    <img src={RUFlag} alt="change language to russian" />
                  ) : i18n.language === 'en' ? (
                    <img src={USFlag} alt="change language to english" />
                  ) : i18n.language === 'ua' ? (
                    <img src={UAFlag} alt="change language to ukrainian" />
                  ) : null}
                </Dropdown.Toggle>
                <Dropdown.Menu className="select-language__menu">
                  <Dropdown.Item
                    className="select-language__menu-item"
                    href={false}
                    onClick={() => {
                      i18next.changeLanguage('ru');
                    }}>
                    <img src={RUFlag} alt="" />
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="select-language__menu-item"
                    href={false}
                    onClick={() => {
                      i18next.changeLanguage('en');
                    }}>
                    <img src={USFlag} alt="" />
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="select-language__menu-item"
                    href={false}
                    onClick={() => {
                      i18next.changeLanguage('ua');
                    }}>
                    <img className="language-ua" src={UAFlag} alt="user pic" />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="header-search d-flex align-items-center ml-3">
              <img className="header-search__icon" src={SearchIcon} alt="" onClick={searchHandler} />
              {visibleSearch && (
                <Search
                  visibleSearch={visibleSearch}
                  searchHandler={searchHandler}
                  placeholder={t('search-placeholder')}
                />
              )}
            </div>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
