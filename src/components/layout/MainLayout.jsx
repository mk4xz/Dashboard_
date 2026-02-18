import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import SupportModal from "../support/SupportModal";
import "./MainLayout.css";

export default function MainLayout() {
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <div className="appShell">
      <Sidebar onSupport={() => setSupportOpen(true)} />

      <div className="appMain">
        <Header />
        <div className="appContent">
          <Outlet />
        </div>
      </div>

      <SupportModal
        open={supportOpen}
        onClose={() => setSupportOpen(false)}
        onSubmit={() => setSupportOpen(false)}
      />
    </div>
  );
}
