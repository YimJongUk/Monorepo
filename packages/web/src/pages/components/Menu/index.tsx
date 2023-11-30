import React from 'react';
import MenuItem from './MenuItem';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-left: 5px;
`;

const LogoLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const MenuList = styled.ul``;

const Menu: React.FC = () => {
  return (
    <Container>
      <LogoLayout>Logo</LogoLayout>
      <MenuList>
        <MenuItem href='board' name='Dashboard' />
        <MenuItem href='map' name='Map' />
        <MenuItem href='license' name='License' />
      </MenuList>
    </Container>
  );
};

export default Menu;
