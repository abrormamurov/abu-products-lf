import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Landing,
  Error,
  About,
  Cart,
  Checkout,
  HomeLayout,
  Login,
  Orders,
  Products,
  Register,
  SingleProducts,
} from "./pages";

import { loader as LandingLoader } from "./pages/Landing";
import { loader as SingleLoader } from "./pages/SingleProducts";
import { loader as ProductsLoader } from "./pages/Products";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: LandingLoader,
        },
        {
          path: "/prodacts",
          element: <Products />,
          loader: ProductsLoader,
        },
        {
          path: "/prodact/:id",
          element: <SingleProducts />,
          loader: SingleLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/orderrs",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
