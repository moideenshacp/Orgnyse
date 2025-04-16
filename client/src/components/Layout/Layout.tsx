import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen  ">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-contentbg p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
