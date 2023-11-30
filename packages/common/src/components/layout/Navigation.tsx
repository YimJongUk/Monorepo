import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  width?: number;
  children: ReactNode;
}

const Base = styled.div<{ width?: number }>`
  top: 0;
  left: 0;
  height: 100dvh;
  width: ${({ width }) => (width ? `${width}px` : `200px`)};
  position: relative;
  background-color: #3f3f3f;
  margin: 0 0;
  color: white;
  a {
    text-decoration: none;
    :visited {
      color: white;
    }
  }
`;

export const Navigation: React.FC<Props> = ({ width, children }) => {
  return <Base width={width}>{children}</Base>;
};
