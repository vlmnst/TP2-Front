import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BitacoraPage from '../pages/BitacoraPage';
import HomePage from '../pages/HomePage';
import MemberPage from '../pages/MemberPage';
import NotFoundPage from '../pages/NotFoundPage';
import GalleryPage from '../pages/GalleryPage';
import JsonExplorer from '../pages/JsonExplorer';

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
        path: 'jsonexplorer',
        element: <JsonExplorer />,
      },
      {
        path: 'integrantes/:memberId',
        element: <MemberPage />,
      },
      {
        path: 'galeria',
        element: <GalleryPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);