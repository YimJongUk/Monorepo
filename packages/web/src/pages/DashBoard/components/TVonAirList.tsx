import { useQuery } from '@tanstack/react-query';
import { TvOnTheAirApi } from '../../../apis';
import { TVDetail } from '../types';
import { AxiosError } from 'axios';
import { Carousel } from 'react-bootstrap';

const TVonAirList = () => {
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
  const { data, isLoading } = useQuery<Array<TVDetail>, AxiosError>({
    queryKey: ['TV'],
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
    <Carousel>
      {data &&
        data.map((obj: TVDetail, idx: number) => (
          <Carousel.Item key={idx}>
            <img
              src={`${import.meta.env.VITE_APP_IMAGE_ANOTHER_PREFIX}/${obj.backdrop_path}`}
              style={{ width: '50px', height: '50px' }}
            />
            <Carousel.Caption>{obj.name}</Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default TVonAirList;
