import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';

import { Admin, Resource } from 'react-admin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FirebaseDataProvider, FirebaseAuthProvider } from 'react-admin-firebase';
import axios from 'axios';

import {
  Header,
  MainSlider,
  CardsFields,
  Announcement,
  News,
  Partners,
  Footer,
  Card,
  SectionContainer,
} from './components';

import { PostList, PostEdit, PostCreate, PostShow } from './_admin/PostMethods';
import CustomLoginPage from './_admin/CustomLoginPage';
import { Dashboard } from './_admin';
import MainLayout from './layouts/MainLayout';
import { firebaseConfig as config } from './firebase-config';

import UniversityImg from './assets/images/university.svg';
import Student from './assets/images/student.svg';
import Cap from './assets/images/cap.svg';
import Book from './assets/images/open-book.svg';
import Books from './assets/images/books.svg';
import Computer from './assets/images/desktop.svg';
import Services from './assets/images/planing.svg';
import Science from './assets/images/atom.svg';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import InfoIcon from '@material-ui/icons/Info';

const options = {
  logging: true,
};

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://firestore.googleapis.com/v1/projects/virtual-college-391/databases/(default)/documents/announcements',
      )
      .then(({ data }) => {
        setAnnouncements(data.documents);
      });

    axios
      .get('https://firestore.googleapis.com/v1/projects/virtual-college-391/databases/(default)/documents/news')
      .then(({ data }) => {
        setNews(data.documents);
      });
  }, []);

  return (
    <React.Fragment>
      <Router>
        <div>
          <Header />
          <Route path="/" exact>
            <div className="main-container">
              <Container fluid>
                <div className="main-section">
                  <MainSlider />
                </div>
                <div className="card-field-top">
                  <CardsFields>
                    <Card cardName={'Вступ'} cardIcon={UniversityImg} />
                    <Card cardName={'Студенту'} cardIcon={Student} />
                    <Card cardName={'Факультети'} cardIcon={Cap} />
                    <Card cardName={'Про Коледж'} cardIcon={Book} />
                  </CardsFields>
                </div>
                <Announcement announcements={announcements} />
                <News news={news} />
                <div className="card-field-bottom">
                  <CardsFields>
                    <Card cardName={'Бібліотека'} cardIcon={Books} />
                    <Card cardName={'Дист. навчання'} cardIcon={Computer} />
                    <Card cardName={'Сервіси'} cardIcon={Services} />
                    <Card cardName={'Наука'} cardIcon={Science} />
                  </CardsFields>
                </div>
                <Partners />
              </Container>
              <Footer />
            </div>
          </Route>
          <Route path="/news">
            <SectionContainer sectionName="Новини" visibleSidebar={true} sectionSource={news} />
          </Route>
          <Route path="/announcements">
            <SectionContainer sectionName="Оголошення" visibleSidebar={true} sectionSource={announcements} />
          </Route>
          <Route path="/admin">
            <div>
              <Admin
                authProvider={authProvider}
                dataProvider={dataProvider}
                loginPage={CustomLoginPage}
                layout={MainLayout}
                title="Virtual College Admin Panel"
                dashboard={Dashboard}
                disableTelemetry>
                <Resource
                  name="announcements"
                  icon={EmojiPeopleIcon}
                  list={PostList}
                  edit={PostEdit}
                  create={PostCreate}
                  show={PostShow}
                />
                <Resource
                  name="news"
                  icon={InfoIcon}
                  list={PostList}
                  edit={PostEdit}
                  create={PostCreate}
                  show={PostShow}
                />
              </Admin>
            </div>
          </Route>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
