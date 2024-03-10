import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@layouts";

import {
  NewOrder,
  newOrderLoader,
  Dashboard,
  Category,
  categoryLoader,
} from "@pages";

export const ROUTES = {
  DASHBOARD: () => "/dashboard",
  NEW_ORDER: () => "/new-order",
  NEW_CATEGORY: (category: string) => `/new-order/${category}`,
};

export const router = createBrowserRouter([
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
    ],
  },
]);
