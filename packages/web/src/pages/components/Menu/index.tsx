import React from 'react';
import MenuItem from './MenuItem';
import styled from '@emotion/styled';
import { getMenu } from '../../../apis';
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';

interface Menu {
  NAME: string;
  URL: string;
  ICON_NAME: string;
}

const Container = styled.div``;

const LogoLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const MenuContainer = styled.div`
  height: calc(100vh - 60px);
  overflow: hidden scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    height: 10%;
    background: #ffff00;
    border-radius: 10px;
  }
`;

const MenuList = styled.ul`
  padding: 0;
  a {
    text-decoration: none;
    color: #8391a2;
    :hover {
      color: #bccee4;
    }
  }
  a.active {
    color: #ffffff;
  }
  svg:hover {
    color: #bccee4;
  }
  svg.active {
    color: #ffffff;
  }
`;

const Menu: React.FC = () => {
  const { data: menuData } = useQuery({ queryKey: ['menu'], queryFn: getMenu });

  return (
    <Container>
      <LogoLayout>Logo</LogoLayout>
      <MenuContainer>
        <MenuList>
          {menuData &&
            menuData.map((obj: Menu, idx: number) => (
              <NavLink
                to={obj.URL}
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
              >
                <MenuItem key={idx} name={obj.NAME} />
              </NavLink>
            ))}
        </MenuList>
      </MenuContainer>
    </Container>
  );
};

export default Menu;
