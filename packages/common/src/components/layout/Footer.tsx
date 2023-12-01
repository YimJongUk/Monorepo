import React from 'react';
import styled from '@emotion/styled';

interface Props {
  height?: number;
}

const Base = styled.div<{ height?: number }>`
  bottom: 0;
  margin-left: 200px;
  position: fixed;
  width: 100vw;
  z-index: 1000;
  background-color: #313a46;
  height: ${({ height }) => (height ? `${height}px` : '0px')};
`;

export const Footer: React.FC<Props> = ({ height }) => {
  return <Base height={height}></Base>;
};
