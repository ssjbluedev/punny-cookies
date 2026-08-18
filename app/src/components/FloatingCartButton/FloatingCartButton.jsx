import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import "./FloatingCartButton.css";

export default function FloatingCartButton({ onOpenCart }) {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 0
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (cartCount === 0 || !scrolled) return null;

  return (
    <button className="pc-floating-cart" aria-label="Giỏ hàng" onClick={onOpenCart}>
      🧺
      <span className="pc-floating-cart-badge">{cartCount}</span>
    </button>
  );
}
