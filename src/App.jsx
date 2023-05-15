import "./App.css";
import Accounts from "./components/Accounts/Accounts";
import Feed from "./components/Feed/Feed";
import NotFound from "./components/NotFound/NotFound";
import Reports from "./components/Reports/Reports";
import Dashboard from "./view/Dashboard";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/",
          element: <Navigate to="/feed" replace />,
        },
        {
          path: "feed",
          element: <Feed />,
        },
        {
          path: "accounts",
          element: <Accounts />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <section>
      <RouterProvider router={router} />
    </section>
  );
};

export default App;
