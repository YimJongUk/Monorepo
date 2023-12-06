import React, { ReactNode } from 'react';
import { Card } from 'react-bootstrap';

interface Props {
  Header: string;
  Title: string;
  children: ReactNode;
}

const CardLayout: React.FC<Props> = ({ Header, Title, children }) => {
  return (
    <Card>
      <Card.Header>{Header}</Card.Header>
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardLayout;
