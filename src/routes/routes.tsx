import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@layouts";

import {
  NewOrder,
  newOrderLoader,
  Dashboard,
  Category,
  categoryLoader,
  SubCategory,
  subCategoryLoader,
  Login,
} from "@pages";

export const ROUTES = {
  DASHBOARD: () => "/dashboard",
  NEW_ORDER: () => "/new-order",
  NEW_CATEGORY: (category: string) => `/new-order/${category}`,
};

export const router = createBrowserRouter([
  { path: "login", element: <Login /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "new-order",
        element: <NewOrder />,
        loader: newOrderLoader,
      },
      {
        path: "new-order/:categoryId",
        element: <Category />,
        loader: categoryLoader,
      },
      {
        path: "new-order/:categoryId/:subCategoryId",
        element: <SubCategory />,
        loader: subCategoryLoader,
      },
    ],
  },
]);
