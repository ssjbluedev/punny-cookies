import "./Modal.css";

export default function Modal({ onClose, children, maxWidth = 460 }) {
  return (
    <div className="pc-modal-overlay" onClick={onClose}>
      <div
        className="pc-modal"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="pc-modal-close" aria-label="Đóng" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
