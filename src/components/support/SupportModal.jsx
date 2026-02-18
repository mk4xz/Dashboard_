import "./SupportModal.css";
import { supportData } from "../../data/Shoxabbos/dashboard";
import { RiCloseLine } from "react-icons/ri";

export default function SupportModal({ open, onClose, onSubmit }) {
  if (!open) return null;

  return (
    <div className="smOverlay" onMouseDown={onClose}>
      <div className="smModal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="smClose" type="button" onClick={onClose}>
          <RiCloseLine />
        </button>

        <div className="smTitle">{supportData.title}</div>

        <div className="smHero">
          <img className="smHeroImg" src={supportData.imageUrl} alt="" />
        </div>

        <div className="smSub">{supportData.subtitle}</div>

        <div className="smField">
          <div className="smLabel">{supportData.subjectLabel}</div>
          <input className="smInput" placeholder={supportData.subjectPlaceholder} />
        </div>

        <div className="smField">
          <div className="smLabel">{supportData.descriptionLabel}</div>
          <textarea className="smArea" placeholder={supportData.descriptionPlaceholder} />
        </div>

        <button className="smBtn" type="button" onClick={onSubmit}>
          {supportData.buttonText}
        </button>
      </div>
    </div>
  );
}
