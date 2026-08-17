import { openFacebook, openZalo } from "../../utils/links";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="pc-contact">
      <h2>Let's make your day a little sweeter ♡</h2>
      <p>Muốn đặt bánh, hỏi menu hay chỉ muốn nói chuyện với Punny?</p>
      <div className="pc-contact-cards">
        <div className="pc-contact-card pc-contact-card-fb" onClick={openFacebook}>
          <div className="pc-contact-icon">📩</div>
          <div className="pc-contact-title">Facebook Messenger</div>
          <div className="pc-contact-desc">Đặt bánh &amp; hỏi menu</div>
        </div>
        <div className="pc-contact-card pc-contact-card-zalo" onClick={openZalo}>
          <div className="pc-contact-icon">💬</div>
          <div className="pc-contact-title">Zalo</div>
          <div className="pc-contact-desc">Tư vấn &amp; đặt bánh</div>
        </div>
      </div>
    </section>
  );
}
