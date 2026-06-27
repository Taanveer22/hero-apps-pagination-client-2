import { createBrowserRouter } from 'react-router';
import Root from '../Root';
import AllApps from '../pages/AllApps';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Installations from '../pages/Installations';
import LoadingPage from '../pages/LoadingPage';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/allApps',
        element: <AllApps></AllApps>,
      },
      {
        path: '/installations',
        element: <Installations></Installations>,
      },
    ],
  },
]);

export default myRouter;
