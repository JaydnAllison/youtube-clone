import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home.tsx";
import Shorts from "./pages/Shorts/Shorts.tsx";
import Subscriptions from "./pages/Subscriptions/Subscriptions.tsx";
import You from "./pages/You/You.tsx";
import './styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/shorts',
    element: <Shorts/>
  },
  {
    path: '/subscriptions',
    element: <Subscriptions/>
  },
  {
    path: '/you',
    element: <You/>
  }
])

export default function App(): JSX.Element {
  return (
    <RouterProvider router={router}/>
  )
}