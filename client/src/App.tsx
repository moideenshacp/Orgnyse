import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { routes } from "./routes/routeConfig";

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
    </Routes>
  );
};

export default AppRoutes;
