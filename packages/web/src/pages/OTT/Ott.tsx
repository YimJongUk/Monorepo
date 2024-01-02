import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import TVOnAirList from './components/TVOnAirList';
import TVPopularList from './components/TVPopularList';
import TVTopRatedList from './components/TVTopRatedList';
import TVAiringTodayList from './components/TVAiringTodayList';

// import { getSearchMovieListApi } from '../apis';
//| "sm" | "md" | "lg" | "xl" | "xxl"

//height에 90px를 한 이유는 상단 Header height 크기(60px) 와 footer 영역의 30px 를 제외하여 스크롤 발생 안되도록 하기위해
const Ott: React.FC = () => {
  return (
    // <Container style={{ height: 'calc(100vh - 90px)' }}>
    <Container>
      <Row className='pt-5 flex-column row-gap-5'>
        <Col>
          <TVOnAirList />
        </Col>
        <Col>
          <TVPopularList />
        </Col>
        <Col>
          <TVTopRatedList />
        </Col>
        <Col>
          <TVAiringTodayList />
        </Col>
      </Row>
    </Container>
  );
};

export default Ott;
