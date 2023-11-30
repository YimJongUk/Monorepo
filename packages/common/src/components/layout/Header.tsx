import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  height?: number;
  children?: ReactNode;
}

const Base = styled.div<{ height?: number }>`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : `0px`)};
  background-color: #3f3f3f;
`;

export const Header: React.FC<Props> = ({ height, children }) => {
  return <Base height={height}>{children}</Base>;
};
