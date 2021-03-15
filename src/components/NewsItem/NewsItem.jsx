import React from 'react';

import './NewsItem.scss';

import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NewsItem(props) {
  return (
    <React.Fragment>
      {props.sectionSource &&
        props.sectionSource.slice(0, props.maxElement).map((item) => (
          <Col className="flex-grow-0" key={item.name}>
            <Card className="news-item-card">
              <Card.Img
                variant="top"
                src={item.fields.pictures ? item.fields.pictures.mapValue.fields.src.stringValue : props.newsIcon}
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  <div className="news-item-name">{item.fields.title ? item.fields.title.stringValue : null}</div>
                  <div className="news-item-date">{item.fields.createdate.timestampValue}</div>
                </Card.Title>
                <div
                  className="news-item-body"
                  dangerouslySetInnerHTML={{ __html: item.fields.body ? item.fields.body.stringValue : null }}
                />
                <Link to={`${item.name.split('documents/')[1]}`} className="news-item-button">
                  {props.buttonText}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </React.Fragment>
  );
}
