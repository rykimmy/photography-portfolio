import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './Root.jsx';
import About from './components/Photography.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/photography",
        element: <Photography />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
