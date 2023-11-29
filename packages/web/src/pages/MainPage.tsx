import styled from '@emotion/styled';
import { Button, Footer, Header } from '@monorepo/common';
import { Outlet } from 'react-router-dom';

const Base = styled.div`
  max-width: 1200px;
  margin-top: 30px;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <Header height={30} />
      <Base>Header 와 Footer 추가</Base>
      <Button />
      <Outlet />
      <Footer height={30} />
    </>
  );
};

export default MainPage;
