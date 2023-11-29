import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';

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
      {
        path: 'home',
        element: <div>홈</div>
      },
      { path: 'user/', element: <div>유저</div> },
      { path: 'user/:userId', element: <div>상세</div> }
    ]
  }
]);

export default Routers;
