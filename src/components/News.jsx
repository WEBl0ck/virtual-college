import React from 'react';
import '../scss/News.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NewsItem } from '../components';
import RightArrow from '../assets/images/right-arrow.svg';

function News({ news }) {
  return (
    <div className="news-section">
      <div className="news-section-top">
        <Container fluid>
          <Row>
            <Col md={4}>
              <Link to="/news" className="news-section-name">
                НОВИНИ
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="news-section-bottom">
        <Container fluid>
          <Row className="news-section-row">
            {news &&
              news.slice(0, 6).map((item) => (
                <Col className="flex-grow-0" key={item.name}>
                  <NewsItem
                    newsItemImage={item.fields.pictures ? item.fields.pictures.mapValue.fields.src.stringValue : null}
                    newsItemName={item.fields.title ? item.fields.title.stringValue : null}
                    newsItemDate={item.fields.createdate.timestampValue}
                    newsItemText={item.fields.body ? item.fields.body.stringValue : null}
                    newsId={item.name.split('documents/')[1]}
                  />
                </Col>
              ))}
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col md={4}>
              <Link to="/news" className="news-section-button">
                Всі новини <img className="button-arrow" src={RightArrow} alt="" />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default News;
