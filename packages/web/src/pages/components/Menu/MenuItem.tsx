import styled from '@emotion/styled';
import React from 'react';
import { BsApple } from 'react-icons/bs';

interface Props {
  name: string;
}

const List = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 10px;
`;

const MenuName = styled.div`
  padding-left: 10px;
`;

const MenuItem: React.FC<Props> = ({ name }) => {
  return (
    <List>
      <BsApple />
      <MenuName>{name}</MenuName>
    </List>
  );
};

export default MenuItem;
