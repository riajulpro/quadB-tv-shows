import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/static/Home";
import Details from "../pages/dynamic/Details";
import Cart from "../pages/static/Cart";
import ErrorPage from "../components/ui/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
