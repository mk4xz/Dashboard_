import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import NearestEvents from "./pages/nearest-events/NearestEvents";

import Projects from "./pages/projects/Projects";
import Calendar from "./pages/calendar/Calendar";
import Vacation from "./pages/vacation/Vacation";
import My_profile from "./pages/my_profile/My_profile";
import Employees from "./pages/employees/Employees";
import Messenger from "./pages/messenger/Messenger";
import Add_projects from "./pages/add_projects/Add_projects";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nearest-events" element={<NearestEvents />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/vacation" element={<Vacation />} />
        <Route path="/profile" element={<My_profile />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/add-project" element={<Add_projects />} />
      </Route>
    </Routes>
  );
};

export default App;
