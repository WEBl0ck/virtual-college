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
  Partners,
  Footer,
  Card,
  SectionContainer,
  Section,
  NewsItem,
  AnnounceItem,
} from './components/index';

import { PostList, PostEdit, PostCreate, PostShow } from './_admin/PostMethods';
import CustomLoginPage from './_admin/CustomLoginPage';
import { Dashboard } from './_admin';
import MainLayout from './layouts/MainLayout';
import { firebaseConfig as config } from './firebase-config';
import './i18n';
import { useTranslation } from 'react-i18next';

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
import NewsIcon from './assets/images/warning.svg';

const options = {
  logging: true,
};

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

function App() {
  const [announcements, setAnnouncements] = useState([]);
  const [news, setNews] = useState([]);
  const { t } = useTranslation();

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

  // Search
  // Code refactoring
  // Menu
  // Nav bar
  //

  const routes = [
    {
      path: '/news',
      sectionName: t('header_news'),
      visibleSidebar: true,
      sectionSource: news,
    },
    {
      path: '/announcements',
      sectionName: t('header_announcement'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
    {
      path: '/information',
      sectionName: t('header_information'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
    {
      path: '/about',
      sectionName: t('header_about'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
    {
      path: '/introduction',
      sectionName: t('top_menu_introduction'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
    {
      path: '/to-the-students',
      sectionName: t('top_menu_for_student'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
    {
      path: '/faculties',
      sectionName: t('top_menu_faculties'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
    {
      path: '/about-college',
      sectionName: t('top_menu_about'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
    {
      path: '/library',
      sectionName: t('bottom_menu_library'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
    {
      path: '/dist-learning',
      sectionName: t('bottom_menu_distance_learning'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
    {
      path: '/services',
      sectionName: t('bottom_menu_services'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
    {
      path: '/science',
      sectionName: t('bottom_menu_science'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
    {
      path: '/partners',
      sectionName: t('partners_title'),
      visibleSidebar: true,
      sectionSource: announcements,
    },
  ];

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
                    <Card cardName={t('top_menu_introduction')} cardIcon={UniversityImg} cardLink={'introduction'} />
                    <Card cardName={t('top_menu_for_student')} cardIcon={Student} cardLink={'to-the-students'} />
                    <Card cardName={t('top_menu_faculties')} cardIcon={Cap} cardLink={'faculties'} />
                    <Card cardName={t('top_menu_about')} cardIcon={Book} cardLink={'about-college'} />
                  </CardsFields>
                </div>
                <Section
                  sectionLink={'/announcements'}
                  sectionTitle={'announcements_title'}
                  sectionButton={'announcements_button'}>
                  <AnnounceItem sectionSource={announcements} maxElement={4} newsIcon={NewsIcon} />
                </Section>
                <Section sectionLink={'/news'} sectionTitle={'news_title'} sectionButton={'news_button'}>
                  <NewsItem sectionSource={news} maxElement={6} newsIcon={NewsIcon} buttonText={t('news-button')} />
                </Section>
                <div className="card-field-bottom">
                  <CardsFields>
                    <Card cardName={t('bottom_menu_library')} cardIcon={Books} cardLink={'library'} />
                    <Card
                      cardName={t('bottom_menu_distance_learning')}
                      cardIcon={Computer}
                      cardLink={'dist-learning'}
                    />
                    <Card cardName={t('bottom_menu_services')} cardIcon={Services} cardLink={'services'} />
                    <Card cardName={t('bottom_menu_science')} cardIcon={Science} cardLink={'science'} />
                  </CardsFields>
                </div>
                <Section sectionLink={'/partners'} sectionTitle={'partners_title'}>
                  <Partners />
                </Section>
              </Container>
              <Footer />
            </div>
          </Route>
          {routes &&
            routes.map((item) => (
              <Route path={item.path} key={item.path}>
                <SectionContainer
                  sectionName={item.sectionName}
                  visibleSidebar={item.visibleSidebar}
                  sectionSource={item.sectionSource}
                  sectionPath={item.path}
                />
              </Route>
            ))}
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
