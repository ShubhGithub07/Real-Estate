import React from "react";
import Home from "./routes/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
// import SinglePage from "./routes/singlePage/singlePage";
// import ProfilePage from "./routes/profilePage/profilePage";
// import Login from "./routes/login/login";
// import Register from "./routes/register/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
        //   path: "/:id",
        //   element: <SinglePage />,
        // },
        // {
        //   path: "/profile",
        //   element: <ProfilePage />,
        // },
        // {
        //   path: "/login",
        //   element: <Login />,
        // },
        // {
        //   path: "/register",
        //   element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
