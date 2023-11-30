import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import DashBoard from '../pages/DashBoard';
import Map from '../pages/Map';
import UseLicense from '../pages/UseLicense';

// react-router 예전 버전 사용방법
// const Routers = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<MainPage />} />
//     </Routes>
//   );
// };

const Routers = createBrowserRouter([
  {
    path: '/',
    // loader와 action 옵션은 될수있으면 사용 안하는게 좋음
    // loader: async () => {
    //   return new Promise((res) => {
    //     setTimeout(() => {
    //       return res('finish!');
    //     }, 3000);
    //   });
    // },
    element: <MainPage />,
    errorElement: <div>Error!!</div>,
    children: [
      { path: 'board', element: <DashBoard /> },
      { path: 'map', element: <Map /> },
      { path: 'license', element: <UseLicense /> }
    ]
  }
]);

export default Routers;
