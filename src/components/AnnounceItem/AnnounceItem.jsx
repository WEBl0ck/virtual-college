import React from 'react';

import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import './AnnounceItem.scss';

function AnnounceItem(props) {
  return (
    <React.Fragment>
      {props.sectionSource &&
        props.sectionSource.map((item) => (
          <Col className="flex-grow-0" key={item.name}>
            <Link className="announce-item d-flex" to={`${item.name.split('documents/')[1]}`}>
              <div className="announce-item__image">
                <img
                  src={item.fields.pictures ? item.fields.pictures.mapValue.fields.src.stringValue : props.newsIcon}
                  alt=""
                />
              </div>
              <div className="announce-item__info">
                <div className="announce-item__name">{item.fields.title ? item.fields.title.stringValue : null}</div>
                <div className="announce-item__date">{item.fields.createdate.timestampValue}</div>
                <div
                  className="announce-item__describe"
                  dangerouslySetInnerHTML={{ __html: item.fields.body ? item.fields.body.stringValue : null }}></div>
              </div>
            </Link>
          </Col>
        ))}
    </React.Fragment>
  );
}

export default AnnounceItem;
