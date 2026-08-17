import { openFacebook, openZalo } from "../../utils/links";
import "./Footer.css";

export default function Footer({ isMobile }) {
  return (
    <footer
      className="pc-footer"
      style={{ paddingBottom: isMobile ? "92px" : "36px" }}
    >
      <div className="pc-footer-name">Punny Cookies</div>
      <div className="pc-footer-tagline">Cookies • Mochi • Sweet Treats</div>
      <div className="pc-footer-tagline">Made with love ♡</div>
      <div className="pc-footer-links">
        <button className="pc-footer-link" onClick={openFacebook}>
          Facebook
        </button>
        <span className="pc-footer-dot">·</span>
        <button className="pc-footer-link" onClick={openZalo}>
          Zalo
        </button>
      </div>
      <div className="pc-footer-copyright">© 2026 Punny Cookies</div>
    </footer>
  );
}
