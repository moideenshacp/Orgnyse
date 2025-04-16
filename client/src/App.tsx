import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { routes } from "./routes/routeConfig";
import CreateEvent from "./pages/CreateEvent";
import EventPage from "./pages/EventPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/events" replace />} />

        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}

        <Route path="*" element={<Navigate to="/events" replace />} />
      </Route>
      <Route path="/events/create" element={<CreateEvent/>} ></Route>
      <Route path="/events/:id" element={<EventPage />} />
    </Routes>
  );
};

export default AppRoutes;
