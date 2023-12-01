import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  height?: number;
  children?: ReactNode;
}

const Base = styled.div<{ height?: number }>`
  top: 0;
  margin-left: 200px;
  position: sticky;
  z-index: 1000;
  background-color: #ffffff;
  height: ${({ height }) => (height ? `${height}px` : `0px`)};
`;

export const Header: React.FC<Props> = ({ height, children }) => {
  return <Base height={height}>{children}</Base>;
};
