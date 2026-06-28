import { createBrowserRouter } from 'react-router';
import Root from '../Root';
import baseURL from '../api/baseURL';
import AllApps from '../pages/AllApps';
import AppCardDetails from '../pages/AppCardDetails';
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
        loader: () => fetch(`${baseURL}/apps?limit=8`),
      },
      {
        path: '/apps',
        element: <AllApps></AllApps>,
      },
      {
        path: '/appDetails/:id',
        element: <AppCardDetails></AppCardDetails>,
        loader: ({ params }) => fetch(`${baseURL}/apps/${params.id}`),
      },
      {
        path: '/installations',
        element: <Installations></Installations>,
      },
    ],
  },
]);

export default myRouter;
