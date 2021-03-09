import React from 'react';
import '../scss/Card.scss';
import { Col } from 'react-bootstrap';

function Card(props) {
  return (
    <Col xl="auto" lg="auto" md={5} className="card-custom-col">
      <div className="card-item">
        <div className="card-icon d-flex justify-content-center">
          <img className="card-icon__image" src={props.cardIcon} alt="" />
        </div>
        <div className="card-name">{props.cardName}</div>
      </div>
    </Col>
  );
}

export default Card;
