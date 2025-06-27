import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NotFound from "../pages/Shared/NotFound/NotFound";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import AddRecipe from "../pages/AddRecipe/AddRecipe";
import MyRecipes from "../pages/MyRecipes/MyRecipes";
import PublicRoute from "../Routes/PublicRoute";
import AllRecipes from "../pages/AllRecipes/AllRecipes";
import Overview from "../pages/Dashboard/OverView";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";

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
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/recipes/:id",

        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-recipes",
        Component: AllRecipes,
      },

      {
        path: "/add-recipe",
        element: (
          <PrivateRoute>
            <AddRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-recipes",
        element: (
          <PrivateRoute>
            <MyRecipes />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true, // default: /dashboard
        element: <Overview />,
      },
      {
        path: "all-recipes",
        element: <AllRecipes />,
      },
      {
        path: "my-recipes",
        element: <MyRecipes />,
      },
      {
        path: "add-recipe",
        element: <AddRecipe />,
      },
    ],
  },
]);

export default router;
