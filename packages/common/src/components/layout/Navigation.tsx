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
  position: fixed;
  background-color: #313a46;
  margin: 0 0;
  color: #8391a2;
  z-index: 1000;
`;

export const Navigation: React.FC<Props> = ({ width, children }) => {
  return <Base width={width}>{children}</Base>;
};
