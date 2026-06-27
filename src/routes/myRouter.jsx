import { createBrowserRouter } from 'react-router';
import Root from '../Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
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
    ],
  },
]);

export default myRouter;
