import { useCart } from "../../context/CartContext";
import "./FloatingCartButton.css";

export default function FloatingCartButton({ onOpenCart }) {
  const { cartCount } = useCart();

  if (cartCount === 0) return null;

  return (
    <button className="pc-floating-cart" aria-label="Giỏ hàng" onClick={onOpenCart}>
      🧺
      <span className="pc-floating-cart-badge">{cartCount}</span>
    </button>
  );
}
