import { RouterProvider } from 'react-router-dom';
import Routers from './routers/Routers.tsx';

function App() {
  return <RouterProvider router={Routers} fallbackElement={<div>Loading</div>} />;
}

export default App;
