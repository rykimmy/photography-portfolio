import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './Root.jsx';
import Photography from './components/Photography.jsx';
import People from './components/People.jsx';
import Nature from './components/Nature.jsx';
import Sports from './components/Sports.jsx';
import Film from './components/Film.jsx';
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
        path: "photography",
        element: <Photography />,
      },
      {
        path: "people",
        element: <People />,
      },
      {
        path: "nature",
        element: <Nature />
      },
      {
        path: "sports",
        element: <Sports />,
      },
      {
        path: "film",
        element: <Film />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <RouterProvider router={router} />
  </>,
)
