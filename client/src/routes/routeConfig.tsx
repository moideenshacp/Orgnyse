import Dashboard from "../pages/Dashboard";
import Events from "../pages/Events";


// For handling the outlet of main dashboard view
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
