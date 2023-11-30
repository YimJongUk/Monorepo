import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  href: string;
  name: string;
}
const Container = styled.li``;

const MenuItem: React.FC<Props> = ({ href, name }) => {
  return (
    <Container>
      <Link to={href}>{name}</Link>
    </Container>
  );
};

export default MenuItem;
