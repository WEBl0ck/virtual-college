import React from 'react';
import './Card.scss';

import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <Col xl="auto" lg="auto" md={5} className="card-custom-col">
      <Link className="card-item" to={props.cardLink}>
        <div className="card-icon d-flex justify-content-center">
          <img className="card-icon__image" src={props.cardIcon} alt="" />
        </div>
        <div className="card-name">{props.cardName}</div>
      </Link>
    </Col>
  );
}

export default Card;
