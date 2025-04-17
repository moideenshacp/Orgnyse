import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiPieChart, 
  FiUsers, 
  FiMail, 
  FiGrid, 
  FiUser, 
  FiFileText, 
  FiBarChart2, 
  FiSettings,
  FiMenu,
  FiX 
} from "react-icons/fi";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  to,
  active,
}) => {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 py-3 px-4 ${
        active
          ? "text-primary bg-blue-50 border-r-4 border-primary"
          : "text-subtitle hover:bg-gray-100"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: <FiPieChart />, label: "Dashboard", to: "/dashboard" },
    { icon: <FiUsers />, label: "Contacts", to: "/contacts" },
    { icon: <FiUsers />, label: "Committees", to: "/committees" },
    { icon: <FiMail />, label: "Email Center", to: "/email" },
    { icon: <FiGrid />, label: "Events", to: "/events" },
    { icon: <FiUser />, label: "Membership", to: "/membership" },
    { icon: <FiFileText />, label: "Surveys", to: "/surveys" },
    { icon: <FiBarChart2 />, label: "Report", to: "/report" },
    { icon: <FiSettings />, label: "Accounts", to: "/accounts" },
  ];

  return (
    <>
      {/* Mobile hamburger menu */}
      <div className="md:hidden fixed top-0 left-0 z-40 p-4">
        <button 
          onClick={toggleSidebar}
          className="flex items-center justify-center w-10 h-10 bg-white rounded-md shadow-md text-gray-700 hover:bg-gray-100"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`bg-white min-h-screen border-r border-gray-200 fixed z-30 transition-all duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0 md:static md:w-56`}
      >
        <div className="py-4 mt-6">
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              to={item.to}
              active={location.pathname === item.to}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;