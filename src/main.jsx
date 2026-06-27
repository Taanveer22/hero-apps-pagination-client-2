import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './index.css';
import myRouter from './routes/myRouter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter}></RouterProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>
);
