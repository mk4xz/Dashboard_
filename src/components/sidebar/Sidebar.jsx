import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../assets/logo.svg";
import dashboardIcon from "../../assets/dashboard.svg";
import projectIcon from "../../assets/project.svg";
import calendarIcon from "../../assets/calendar.svg";
import vacationIcon from "../../assets/Vacations.svg";
import employeesIcon from "../../assets/employees.svg";
import messengerIcon from "../../assets/messenger.svg";
import supportIcon from "../../assets/Support.svg";
import { FiMessageCircle, FiLogOut, FiFolder } from "react-icons/fi";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: dashboardIcon },
  { to: "/projects", label: "Projects", icon: projectIcon },
  { to: "/calendar", label: "Calendar", icon: calendarIcon },
  { to: "/vacation", label: "Vacation", icon: vacationIcon },
  { to: "/employees", label: "Employees", icon: employeesIcon },
  { to: "/messenger", label: "Messenger", icon: messengerIcon },
];

export default function Sidebar({ onSupport }) {
  return (
    <aside className="sb">
      <div className="sbBrand">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="sbNav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `sbLink ${isActive ? "active" : ""}`}
          >
            <img src={link.icon} alt="" />
            <span>{link.label}</span>
          </NavLink>
        ))}
        <button className="sbInfo" type="button">
          <FiFolder />
          <span>Info Portal</span>
        </button>
      </nav>

      <div className="sbBottom">
        <div className="sbSupportCard">
          <img className="sbSupportArt" src={supportIcon} alt="" />
          <button className="sbSupportBtn" type="button" onClick={onSupport}>
            <FiMessageCircle />
            <span>Support</span>
          </button>
        </div>

        <button className="sbLogout" type="button">
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
