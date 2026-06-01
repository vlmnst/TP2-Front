import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BitacoraPage from '../pages/BitacoraPage';
import HomePage from '../pages/HomePage';
import MemberPage from '../pages/MemberPage';
import MetPage from '../pages/MetPage';
import NotFoundPage from '../pages/NotFoundPage';
import GalleryPage from '../pages/GalleryPage';
import JsonExplorer from '../pages/JsonExplorer';
import ArchitecturePage from '../pages/ArchitecturePage';

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
        path: 'arquitectura',
        element: <ArchitecturePage />,
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
      {
        path: 'met',
        element: <MetPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
