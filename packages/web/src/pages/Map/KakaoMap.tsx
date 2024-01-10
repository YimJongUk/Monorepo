import React, { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const KakaoMap: React.FC = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const map = new window.kakao.maps.Map(mapContainer, mapOption);
  }, []);

  return <div id='map' style={{ width: '500px', height: '400px' }}></div>;
};

export default KakaoMap;
