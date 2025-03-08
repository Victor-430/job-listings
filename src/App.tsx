import { RouterProvider } from "react-router-dom";
import { RootLayout } from "./routes/RootLayout";

export const App = () => {
  return <RouterProvider router={RootLayout} />;
};
