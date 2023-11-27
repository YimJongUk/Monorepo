import React from 'react';
import styled from '@emotion/styled';

interface Props {
  height?: number;
}

const Base = styled.div<{ height?: number }>`
  top: 1000;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: #3f3f3f;
  height: ${({ height }) => (height ? `${height}px` : '0px')};
`;

export const Footer: React.FC<Props> = ({ height }) => {
  return <Base height={height}></Base>;
};
