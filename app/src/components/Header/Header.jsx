import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { scrollToId, scrollToTop } from "../../utils/scroll";
import "./Header.css";

const NAV_LINKS = [
  { id: "menu", label: "Thực đơn" },
  { id: "how", label: "Cách đặt" },
  { id: "about", label: "Về Punny" },
  { id: "contact", label: "Liên hệ" },
];

export default function Header({ isMobile, onOpenCart }) {
  const { cartCount } = useCart();
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setNavOpen(false);
    scrollToId(id);
  };

  const CartButton = (
    <button className="pc-icon-btn" aria-label="Giỏ hàng" onClick={onOpenCart}>
      🧺
      {cartCount > 0 && <span className="pc-cart-badge">{cartCount}</span>}
    </button>
  );

  return (
    <>
      <header className="pc-header">
        <div className="pc-brand" onClick={scrollToTop}>
          <img src="assets/logo-small.png" alt="Punny Cookies logo" className="pc-brand-logo" />
          <span className="pc-brand-name">Punny Cookies</span>
        </div>

        {isMobile ? (
          <div className="pc-header-actions">
            {CartButton}
            <button
              className="pc-icon-btn"
              aria-label="Menu"
              onClick={() => setNavOpen((v) => !v)}
            >
              ☰
            </button>
          </div>
        ) : (
          <nav className="pc-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="pc-nav-link"
              >
                {link.label}
              </a>
            ))}
            {CartButton}
            <button className="pc-btn pc-btn-primary pc-btn-nav" onClick={() => scrollToId("menu")}>
              Đặt bánh ♡
            </button>
          </nav>
        )}
      </header>

      {isMobile && navOpen && (
        <div className="pc-mobile-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="pc-mobile-nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
