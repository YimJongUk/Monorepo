import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

interface MapNav {
  x: number;
  y: number;
}

interface Props {
  chkStart: boolean;
  moveNav?: MapNav;
}

// class MapTest {
//   private instance: any;

//   constructor() {
//     this.instance = null;
//   }

//   public getInstance() {
//     if (!this.instance) {
//       debugger;
//       this.instance = new window.kakao.maps.Map(document.getElementById('map'), {
//         center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
//         level: 3 // 지도의 확대 레벨
//       });
//     }

//     return this.instance;
//   }

//   public destroy() {
//     this.instance = null;
//   }
// }

export const KakaoMapCustom: React.FC<Props> = ({ chkStart, moveNav }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [map, setMap] = useState<any>();
  const [start, setStart] = useState<boolean>(false);

  // 지도 생성
  useEffect(() => {
    if (start) {
      // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
      setMap(
        new window.kakao.maps.Map(document.getElementById('map'), {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        })
      );
    }
  }, [start]);

  useEffect(() => {
    if (moveNav && moveNav.x !== 0 && moveNav.y !== 0) {
      const moveLatLon = new window.kakao.maps.LatLng(moveNav.x, moveNav.y);

      map.panTo(moveLatLon);
    }
  }, [moveNav, map]);

  useEffect(() => {
    setStart(chkStart);
  }, [chkStart]);

  return <div id='map' style={{ width: '100%', height: '100%' }}></div>;
};
