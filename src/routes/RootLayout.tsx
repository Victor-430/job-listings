import { createBrowserRouter } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { PageNotFound } from "./PageNotFound";
import { Jobs } from "../components/Jobs";

export const RootLayout = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Jobs />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
