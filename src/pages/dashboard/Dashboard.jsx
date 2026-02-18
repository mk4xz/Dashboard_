import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import {
  workloadPeople,
  nearestEvents,
  projectsPreview,
  activityStream,
} from "../../data/Shoxabbos/dashboard";

import { RiArrowRightSLine } from "react-icons/ri";
import {
  FiArrowUpRight,
  FiArrowDownRight,
  FiClock,
} from "react-icons/fi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { FaGift } from "react-icons/fa6";
import { FiUsers, FiCalendar } from "react-icons/fi";
import { FiCloud, FiPaperclip } from "react-icons/fi";

export default function Dashboard() {
  const nav = useNavigate();

  const eventIcon = (type) => {
    if (type === "presentation") return <HiOutlinePresentationChartLine />;
    if (type === "gift") return <FaGift />;
    if (type === "users") return <FiUsers />;
    return <FiCalendar />;
  };

  const activityIcon = (icon) => {
    if (icon === "paperclip") return <FiPaperclip />;
    return <FiCloud />;
  };

  return (
    <div className="db">
      <div className="dbTopText">Welcome back, Evan!</div>
      <div className="dbTitleRow">
        <h1 className="dbTitle">Dashboard</h1>
      </div>

      <div className="dbGrid">
        <section className="card cardBig">
          <div className="cardHead">
            <h2 className="cardTitle">Workload</h2>
            <button className="linkBtn" type="button">
              View all <RiArrowRightSLine />
            </button>
          </div>

          <div className="workGrid">
            {workloadPeople.map((p) => (
              <div className="workCard" key={p.id}>
                <div className="avatarRing">
                  <img className="avatarImg" src={p.avatarUrl} alt="" />
                </div>
                <div className="workName">{p.name}</div>
                <div className="workRole">{p.role}</div>
                <div className="workPill">{p.level}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="card cardSide">
          <div className="cardHead">
            <h2 className="cardTitle">Nearest Events</h2>
            <button
              className="linkBtn"
              type="button"
              onClick={() => nav("/nearest-events")}
            >
              View all <RiArrowRightSLine />
            </button>
          </div>

          <div className="eventsList">
            {nearestEvents.slice(0, 3).map((e) => (
              <div className="eventRow" key={e.id}>
                <div className={`eventLine ${e.accent}`} />
                <div className="eventMain">
                  <div className="eventTitle">{e.title}</div>
                  <div className="eventTime">{e.time}</div>
                </div>
                <div className="eventMeta">
                  <div className={`eventArrow ${e.arrow}`}>
                    {e.arrow === "up" ? <FiArrowUpRight /> : <FiArrowDownRight />}
                  </div>
                  <div className="eventDur">
                    <FiClock />
                    <span>{e.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card cardBig">
          <div className="cardHead">
            <h2 className="cardTitle">Projects</h2>
            <button className="linkBtn" type="button">
              View all <RiArrowRightSLine />
            </button>
          </div>

          <div className="projList">
            {projectsPreview.map((p) => (
              <div className="projRow" key={p.id}>
                <div className="projLeft">
                  <div className="projId">{p.id}</div>
                  <div className="projTitle">{p.title}</div>
                  <div className="projCreated">{p.created}</div>
                </div>

                <div className="projMid">
                  <div className="projDataTitle">Project Data</div>
                  <div className="projStats">
                    <div className="st">
                      <div className="stLabel">All tasks</div>
                      <div className="stVal">{p.tasksAll}</div>
                    </div>
                    <div className="st">
                      <div className="stLabel">Active tasks</div>
                      <div className="stVal">{p.tasksActive}</div>
                    </div>
                    <div className="st">
                      <div className="stLabel">Assignees</div>
                      <div className="assignees">
                        {p.assignees.map((a, i) => (
                          <img className="assImg" src={a} alt="" key={i} />
                        ))}
                        {p.plus ? <div className="assPlus">+{p.plus}</div> : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`projPri ${p.priority.toLowerCase()}`}>
                  {p.priority}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card cardSide">
          <div className="cardHead">
            <h2 className="cardTitle">Activity Stream</h2>
          </div>

          <div className="actList">
            {activityStream.map((a) => (
              <div className="actRow" key={a.id}>
                <img className="actAvatar" src={a.avatarUrl} alt="" />
                <div className="actMain">
                  <div className="actName">{a.name}</div>
                  <div className="actRole">{a.role}</div>
                  <div className="actBox">
                    <div className="actIcon">{activityIcon(a.icon)}</div>
                    <div className="actText">{a.text}</div>
                  </div>
                </div>
              </div>
            ))}
            <button className="actMore" type="button">
              View more <RiArrowRightSLine />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
