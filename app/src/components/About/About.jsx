import "./About.css";

export default function About() {
  return (
    <section id="about" className="pc-about">
      <div className="pc-about-pattern" />
      <div className="pc-about-inner">
        <div className="pc-about-art">
          <img src="/assets/bunny-small.png" alt="Bunny mascot" />
        </div>
        <div className="pc-about-copy">
          <h2>Made with love ♡</h2>
          <p>
            Punny Cookies là một tiệm bánh nhỏ, nơi mỗi chiếc cookie và mochi được làm
            thủ công với thật nhiều yêu thương.
          </p>
          <span className="pc-about-signature">— Punny Cookies</span>
        </div>
      </div>
    </section>
  );
}
