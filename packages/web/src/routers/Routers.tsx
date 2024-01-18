import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Ott from '../pages/OTT/Ott';
import UseLicense from '../pages/UseLicense/UseLicense';
import TVProgramDetail from '../pages/OTT/components/details/TVProgramDetail';
import Map from '../pages/Map/Map';

// react-router 예전 버전 사용방법
// const Routers = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<MainPage />} />
//     </Routes>
//   );
// };

// path 선언후 loader와 action 옵션은 될수있으면 사용 안하는게 좋음
// loader: async () => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       return res('finish!');
//     }, 3000);
//   });
// },

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <div>Error!!</div>,
    children: [
      {
        path: '',
        element: <Navigate to='map' />,
        index: true
      },
      {
        path: 'ott',
        element: <Ott />
      },
      { path: 'ott/:id', element: <TVProgramDetail /> },
      { path: 'map', element: <Map /> },
      { path: 'license', element: <UseLicense /> },
      { path: 'menu1', element: <div>menu1</div> },
      { path: 'menu2', element: <div>menu2</div> },
      { path: 'menu3', element: <div>menu3</div> },
      { path: 'menu4', element: <div>menu4</div> }
    ]
  }
]);

export default Routers;
