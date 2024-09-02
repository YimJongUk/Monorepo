import { KakaoMapCustom } from '@monorepo/common';
import { useState } from 'react';

const Map: React.FC = () => {
  // const [start, setStart] = useState<boolean>(false);
  const [nav, setNav] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const onClick = () => {
    setNav({ x: 33.45058, y: 126.574942 });
  };

  const onInit = () => {
    setNav({ x: 33.452613, y: 126.570888 });
  };

  return (
    <>
      <div style={{ width: '500px', height: '300px' }}>
        <KakaoMapCustom chkStart={true} moveNav={nav} />
      </div>
      <button onClick={onInit} style={{ width: '100px', height: '100px' }}>
        초기화
      </button>
      <button onClick={onClick} style={{ width: '100px', height: '100px' }}>
        이동
      </button>
    </>
  );
};

export default Map;
