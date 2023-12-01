import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

const DashBoard: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} className='bg-dark bg-opacity-25 rounded-5'>
          1 of 2
        </Col>
        <Col sm={10} className='bg-dark bg-opacity-25 rounded-5'>
          2 of 2
        </Col>
      </Row>
      <Row className='gap-5'>
        <Col sm={2}>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1
      <br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1
      <br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />1<br />2<br />
    </Container>
  );
};

export default DashBoard;
