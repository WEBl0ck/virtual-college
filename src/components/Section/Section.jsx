import React from 'react';

import './Section.scss';

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import RightArrow from '../../assets/images/right-arrow.svg';

const Section = (props) => {
  const { t } = useTranslation();

  return (
    <div className="section">
      <div className="section-top">
        <Container fluid>
          <Row>
            <Col md={4}>
              <Link to={props.sectionLink} className="section-title">
                {t(props.sectionTitle)}
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-bottom">
        <Container fluid>
          <Row className="section-row">{props.children && props.children}</Row>
        </Container>
        {props.sectionButton && (
          <Container fluid>
            <Row>
              <Col md={4}>
                <Link to={props.sectionLink} className="section-button">
                  {t(props.sectionButton)} <img className="button-arrow" src={RightArrow} alt="" />
                </Link>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default Section;
