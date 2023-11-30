import styled from '@emotion/styled';
import { /*Button,*/ Footer, Header, Navigation } from '@monorepo/common';
import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';

const Container = styled.div`
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

const Body = styled.div`
  top: 60px;
  left: 200px;
  color: black;
  position: fixed;
`;

const MainPage: React.FC = () => {
  return (
    <Container>
      <Header height={60} />
      <Navigation width={200}>
        <Menu />
      </Navigation>
      <Body>
        <Outlet />
      </Body>
      <Footer height={30} />
    </Container>
  );
};

export default MainPage;
