import { useQuery } from '@tanstack/react-query';
import { onTheAirApi } from '../../../apis';
import { TVDetail } from '../types';
import { AxiosError } from 'axios';
import { Stack } from 'react-bootstrap';

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
  //   initialPageParam: 1,
  //   getPreviousPageParam: (firstPage, allPages, firstPageParam, allPageParams) => {
  //     return allPageParams[allPageParams.length - 1];
  //   },
  //   getNextPageParam: (lastPage, allPages, lastPageParam) => Number(lastPageParam) + 1
  // });

  // Card 하니까 P가 문제
  // enabled 확인 ( 예전만큼 계속 불러오지않음)
  const { data, isLoading } = useQuery<Array<TVDetail>, AxiosError>({
    queryKey: ['TV'],
    queryFn: async () => {
      console.log('호출');
      const info = await onTheAirApi();
      return info.data.results;
    },
    enabled: true
  });

  if (isLoading) return <div>로딩중</div>;

  return (
    <Stack gap={5}>
      <div className='p-5 border border-black rounded-5'>
        {data && data.map((obj: TVDetail, idx: number) => <div key={idx}>{obj.name}</div>)}
      </div>
      <div className='p-1'>{data && data.map((obj: TVDetail, idx: number) => <div key={idx}>{obj.name}</div>)}</div>
    </Stack>
  );
};

export default TVonAirList;
