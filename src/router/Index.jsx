//routes
import { createBrowserRouter } from "react-router-dom";
import Loayaut from "../components/Loayaut";
import App from "../App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Loayaut />,
    children: [
      {
        path: "/",
        element: <App />,
      }
    ]
  }
]);

export { Router };