import { openFacebook, openZalo } from "../../utils/links";
import "./MobileBottomBar.css";

export default function MobileBottomBar() {
  return (
    <div className="pc-bottom-bar">
      <button className="pc-bottom-bar-btn pc-bottom-bar-btn-primary" onClick={openFacebook}>
        <span>📩 Facebook</span>
        <span className="pc-bottom-bar-sub">Đặt bánh</span>
      </button>
      <button className="pc-bottom-bar-btn" onClick={openZalo}>
        <span>💬 Zalo</span>
        <span className="pc-bottom-bar-sub">Liên hệ</span>
      </button>
    </div>
  );
}
