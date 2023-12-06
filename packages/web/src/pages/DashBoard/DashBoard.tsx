import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import TVonAirList from './components/TVonAirList';
// import { getSearchMovieListApi } from '../apis';
//| "sm" | "md" | "lg" | "xl" | "xxl"

//height에 90px를 한 이유는 상단 Header height 크기(60px) 와 footer 영역의 30px 를 제외하여 스크롤 발생 안되도록 하기위해
const DashBoard: React.FC = () => {
  return (
    <Container style={{ height: 'calc(100vh - 90px)' }}>
      <Row className='flex-column row-gap-5'>
        <Col>
          <TVonAirList />
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
