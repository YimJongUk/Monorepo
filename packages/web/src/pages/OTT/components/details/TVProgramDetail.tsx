import { useParams } from 'react-router-dom';
import { detailApi } from '../../../../apis';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { TVDetail } from '../../types';

const TVProgramDetail: React.FC = () => {
  // TV 디테일 프로그램
  const { id } = useParams();
  const { data, isLoading } = useQuery<TVDetail, AxiosError>({
    queryKey: ['TVProgramDetail'],
    queryFn: async () => {
      const info = await detailApi(id as string);
      return info.data;
    },
    enabled: true
  });
  console.log(data, id);

  if (isLoading) return;

  return <></>;
};
export default TVProgramDetail;
