import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import Home from './pages/Home.js';

import ErrorPage from './pages/ErrorPage.js';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PoliticasPrivacidadePage from './pages/PoliticasPrivacidadePage.js';
import TermosDeUsoPage from './pages/TermosDeUsoPage.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/politica-privacidade",
        element: <PoliticasPrivacidadePage />,
      },
      {
        path: "/termos-uso",
        element: <TermosDeUsoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);