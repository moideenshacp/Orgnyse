import Dashboard from "../pages/Dashboard";
import Events from "../pages/Events";

export const routes = [
  {
    path: "events",
    element: <Events />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
];
