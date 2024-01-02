import { useQuery } from '@tanstack/react-query';
import { TVDetail } from '../types';
import { AxiosError } from 'axios';
import { TvTopRatedApi } from '../../../apis';
import { Col, Container, Row } from 'react-bootstrap';
import SubSlider from './layout/SubSlider';

const TVTopRatedList: React.FC = () => {
  const { data, isLoading } = useQuery<Array<Array<TVDetail>>, AxiosError>({
    queryKey: ['TVTopRatedList'],
    queryFn: async () => {
      const info = await TvTopRatedApi();
      // 리스트 갯수만큼 잘라서 중간 배열을 하나 더 만들어야함.
      return info.data.results.reduce((init: Array<Array<TVDetail>>, tvinfo: TVDetail, idx: number) => {
        const indiCnt = init.length; // 1
        if (idx % 5 !== 0) {
          init[indiCnt - 1].push(tvinfo);
        } else {
          init[indiCnt] = [];
          init[indiCnt].push(tvinfo);
        }

        return init;
      }, []);
    },
    enabled: true
  });

  if (isLoading) return <div>로딩중</div>;

  // 슬라이더 형으로 만들자.
  return (
    <Container>
      <Row className='flex-column row-gap-5'>
        <Col className='text-white'>상위 추천 프로그램</Col>
        <Col>
          <SubSlider data={data} />
        </Col>
      </Row>
    </Container>
  );
};

export default TVTopRatedList;
