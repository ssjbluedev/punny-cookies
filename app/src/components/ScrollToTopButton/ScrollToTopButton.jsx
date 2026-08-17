import { useEffect, useState } from "react";
import { scrollToTop } from "../../utils/scroll";
import "./ScrollToTopButton.css";

const SHOW_AFTER_PX = 480;

export default function ScrollToTopButton({ isMobile }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className={`pc-scroll-top ${isMobile ? "pc-scroll-top-mobile" : ""}`}
      aria-label="Lên đầu trang"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}
