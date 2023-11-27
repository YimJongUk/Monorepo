import styled from '@emotion/styled';
import { Footer, Header } from '@monorepo/common';

const Base = styled.div`
  max-width: 1200px;
  margin-top: 30px;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <Header height={30} />
      <Base>Header 와 Footer 추가</Base>
      <Footer height={30} />
    </>
  );
};

export default MainPage;
