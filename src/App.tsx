import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }
])

export default function App(): JSX.Element {
  return (
    <RouterProvider router={router}/>
  )
}