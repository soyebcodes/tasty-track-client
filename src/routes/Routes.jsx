import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import RecipeDetails from "../pages/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/recipes/:id",
        element: <RecipeDetails />,
      },
      {
        path: "/all-recipes",
        element: <h2>All Recipes</h2>,
      },

      {
        path: "/add-recipe",
        element: <h2>add Recipes</h2>,
      },
      {
        path: "/my-recipes",
        element: <h2>My Recipes</h2>,
      },
    ],
  },
]);

export default router;
