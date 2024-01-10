import React from 'react';
import styled from '@emotion/styled';

const Body = styled.div`
  color: white;
`;

const UseLicense: React.FC = () => {
  return (
    <>
      <Body>
        <span>OTT</span>
        <ul>
          <li>react-query</li>
          <li>react-bootstrap</li>
          <li>axios</li>
        </ul>
      </Body>
      <Body>
        <span>메인 FrameWork</span>
        <ul>
          <li>React</li>
          <li>pnpm</li>
        </ul>
      </Body>
    </>
  );
};

export default UseLicense;
