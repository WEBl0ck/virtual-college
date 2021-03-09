import React from 'react';
import '../scss/CardsFields.scss';
import { Container, Row } from 'react-bootstrap';

function CardsFields(props) {
  return (
    <div className="cards-field d-flex justify-content-center">
      <Container fluid>
        <Row className="justify-content-between">{props.children}</Row>
      </Container>
    </div>
  );
}

export default CardsFields;
