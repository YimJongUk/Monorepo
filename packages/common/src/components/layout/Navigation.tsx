import React from 'react';
import styled from '@emotion/styled';

interface Props {
  width?: number;
}

const Base = styled.div<{ width?: number }>`
  top: 0;
  left: 0;
  height: 100dvh;
  width: ${({ width }) => (width ? `${width}px` : `200px`)};
  position: relative;
  background-color: #3f3f3f;
  margin: 0 0;
`;

export const Navigation: React.FC<Props> = ({ width }) => {
  return <Base width={width}></Base>;
};
