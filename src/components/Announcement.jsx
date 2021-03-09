import React from 'react';
import '../scss/Advertisement.scss';
import { AnnounceItem } from '.';

import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import RightArrow from '../assets/images/right-arrow.svg';

function Advertisement({ announcements }) {
  return (
    <div className="announce-section">
      <div className="announce-section-top">
        <Container fluid>
          <Row>
            <Col md={4}>
              <Link to="/announcements" className="announce-section-name">
                ОГОЛОШЕННЯ
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="announce-section-bottom">
        <Container fluid>
          <Row className="justify-content-between">
            {announcements &&
              announcements.slice(0, 4).map((item) => (
                <Col className="flex-grow-0" key={item.name}>
                  <AnnounceItem
                    announceImage={item.fields.pictures ? item.fields.pictures.mapValue.fields.src.stringValue : null}
                    announceName={item.fields.title ? item.fields.title.stringValue : null}
                    announceDate={item.fields.createdate.timestampValue}
                    announceDescribe={item.fields.body ? item.fields.body.stringValue : null}
                  />
                </Col>
              ))}
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col md={4}>
              <Link to="/announcements" className="announce-section-button">
                Всі оголошення <img className="button-arrow" src={RightArrow} alt="" />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Advertisement;
