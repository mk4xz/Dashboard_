import "./Header.css";
import { FiBell, FiSearch, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { headerData } from "../../data/Shoxabbos/dashboard";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="hd">
      <div className="hdSearchWrap">
        <FiSearch className="hdSearchIcon" />
        <input className="hdSearch" placeholder="Search" />
      </div>

      <div className="hdRight">
        <button className="hdBell" type="button" aria-label="Notifications">
          <FiBell />
        </button>
        <button className="hdUser" type="button" onClick={() => navigate("/profile")}>
          <img className="hdAvatar" src={headerData.avatarUrl} alt="" />
          <span>{headerData.userName}</span>
          <FiChevronDown className="hdChevron" />
        </button>
      </div>
    </header>
  );
}
