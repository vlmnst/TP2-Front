import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BitacoraPage from '../pages/BitacoraPage';
import HomePage from '../pages/HomePage';
import MemberPage from '../pages/MemberPage';
import MetPage from '../pages/MetPage';
import NotFoundPage from '../pages/NotFoundPage';
import GalleryPage from '../pages/GalleryPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'bitacora',
        element: <BitacoraPage />,
      },
      {
        path: 'integrantes/:memberId',
        element: <MemberPage />,
      },
      {
        path: 'galeria',
        element: <GalleryPage />,
      },
      {
        path: 'met',
        element: <MetPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);