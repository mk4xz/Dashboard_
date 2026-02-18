import "./NearestEvents.css";
import { useNavigate } from "react-router-dom";
import { nearestEvents } from "../../data/Shoxabbos/dashboard";

import { RiArrowLeftLine } from "react-icons/ri";
import { FiArrowUpRight, FiArrowDownRight, FiClock } from "react-icons/fi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { FaGift } from "react-icons/fa6";
import { FiUsers, FiCalendar, FiPlus } from "react-icons/fi";

export default function NearestEvents() {
  const nav = useNavigate();

  const iconByType = (type) => {
    if (type === "presentation") return <HiOutlinePresentationChartLine />;
    if (type === "gift") return <FaGift />;
    if (type === "users") return <FiUsers />;
    return <FiCalendar />;
  };

  return (
    <div className="ne">
      <button className="backLink" type="button" onClick={() => nav("/dashboard")}>
        <RiArrowLeftLine /> Back to Dashboard
      </button>

      <div className="neHead">
        <h1 className="neTitle">Nearest Events</h1>
        <button className="neAdd" type="button">
          <FiPlus /> Add Event
        </button>
      </div>

      <div className="neGrid">
        {nearestEvents.map((e) => (
          <div className="neCard" key={e.id}>
            <div className={`neLine ${e.accent}`} />
            <div className="neIcon">{iconByType(e.type)}</div>
            <div className="neMain">
              <div className="neCardTitle">{e.title}</div>
              <div className="neTime">{e.time}</div>
            </div>
            <div className="neRight">
              <div className={`neArrow ${e.arrow}`}>
                {e.arrow === "up" ? <FiArrowUpRight /> : <FiArrowDownRight />}
              </div>
              <div className="neDur">
                <FiClock />
                <span>{e.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
