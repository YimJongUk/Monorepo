import { useQuery } from '@tanstack/react-query';
import { TvOnTheAirApi } from '../../../apis';
import { TVDetail } from '../types';
import { AxiosError } from 'axios';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TVOnAirList = () => {
  // const { data } = useQuery<object>({
  //   queryKey: ['movie', page],
  //   queryFn: async () => {
  //     const info = await getSearchMovieListApi({});
  //     return info;
  //   }
  // });

  // const { data, fetchPreviousPage, fetchNextPage } = useInfiniteQuery<object>({
  //   queryKey: ['onTheTV'],
  //   queryFn: async ({ pageParam }) => {
  //     console.log('pageParam', pageParam);
  //     const info = await onTheAirApi({ page: pageParam });
  //     return info.data;
  //   },
  //   initialPageParam: 1,stPage, allPages, firstPageParam, allPageParams) => {
  //     return allPageParams[all
  //   getPreviousPageParam: (firPageParams.length - 1];
  //   },
  //   getNextPageParam: (lastPage, allPages, lastPageParam) => Number(lastPageParam) + 1
  // });

  // Card 하니까 P가 문제
  // enabled 확인 ( 예전만큼 계속 불러오지않음)
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<Array<TVDetail>, AxiosError>({
    queryKey: ['TVOnAirList'],
    queryFn: async () => {
      console.log('호출');
      const info = await TvOnTheAirApi();
      return info.data.results;
    },
    enabled: true
  });

  if (isLoading) return <div>로딩중</div>;

  // 슬라이더 형으로 만들자.
  return (
    <Container>
      <Row>
        <Col>
          <Carousel interval={null} style={{ height: '500px' }}>
            {data &&
              data.map((obj: TVDetail, idx: number) => (
                <Carousel.Item key={idx} style={{ height: '500px' }}>
                  <Container
                    className={'d-flex justify-content-center'}
                    onClick={() => {
                      navigate(`${obj.id}`);
                    }}
                  >
                    <img
                      src={`${import.meta.env.VITE_APP_IMAGE_ANOTHER_PREFIX}/${obj.backdrop_path}`}
                      style={{ width: '50%' }}
                    />
                  </Container>
                  <Carousel.Caption>
                    <div style={{ textAlign: 'left' }}>
                      <div>
                        <h3>{obj.name}</h3>
                      </div>
                      <div>
                        <h6>{obj.overview}</h6>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default TVOnAirList;
