import styled from '@emotion/styled';
import { /*Button, Footer, Header,*/ Navigation } from '@monorepo/common';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

const Container = styled.div`
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

const Body = styled.div`
  margin-left: 200px;
  position: relative;
  background-color: #3f3f3f;
  /* margin-bottom: 30px; // Footer가 있을경우 */
`;

const MainPage: React.FC = () => {
  return (
    <Container>
      {/* <Header height={60}>Header</Header> */}
      <Navigation width={200}>
        <Menu />
      </Navigation>
      <Body>
        <Outlet />
      </Body>
      {/* <Footer height={30} /> */}
    </Container>
  );
};

export default MainPage;
