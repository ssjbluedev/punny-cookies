import { scrollToId } from "../../utils/scroll";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="pc-hero">
      <div className="pc-hero-blob pc-hero-blob-1" />
      <div className="pc-hero-blob pc-hero-blob-2" />

      <div className="pc-hero-copy">
        <span className="pc-hero-eyebrow">MADE WITH LOVE ♡</span>
        <h1 className="pc-hero-title">Punny Cookies</h1>
        <p className="pc-hero-subtitle">Cookies • Mochi • Sweet Treats</p>
        <p className="pc-hero-desc">
          Những chiếc bánh nhỏ xinh, làm bằng thật nhiều yêu thương.
        </p>
        <div className="pc-hero-actions">
          <button className="pc-btn pc-btn-primary pc-btn-large" onClick={() => scrollToId("menu")}>
            Đặt bánh ngay ♡
          </button>
          <button className="pc-btn pc-btn-outline" onClick={() => scrollToId("menu")}>
            Xem menu
          </button>
        </div>
      </div>

      <div className="pc-hero-art-wrap">
        <div className="pc-hero-art">
          <img
            src="/assets/bunny-hero.png"
            alt="Bunny mascot eating a cookie"
            className="pc-hero-art-main"
          />
          <img
            src="/assets/hero-bow-accent.png"
            alt=""
            className="pc-hero-accent pc-float-1"
          />
          <span className="pc-hero-sparkle pc-float-2">✦</span>
          <span className="pc-hero-heart pc-float-3">♡</span>
          <div className="pc-hero-badge">
            <span>homemade with love</span>
          </div>
        </div>
      </div>
    </section>
  );
}
