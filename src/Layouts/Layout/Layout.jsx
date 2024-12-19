import Sidebar from "../Layout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
