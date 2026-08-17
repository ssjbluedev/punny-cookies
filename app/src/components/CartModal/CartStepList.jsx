import { useCart } from "../../context/CartContext";
import { formatPrice, formatTotal } from "../../utils/format";

export default function CartStepList({ onContinue }) {
  const { cart, incItem, decItem, removeItem, cartTotal } = useCart();

  return (
    <div>
      <div className="pc-cart-title">Giỏ hàng của bạn 🧺</div>

      {cart.length === 0 && (
        <p className="pc-cart-empty">Giỏ hàng đang trống. Chọn vài món ngọt nhé ♡</p>
      )}

      {cart.map((item) => (
        <div key={item.productId} className="pc-cart-item">
          <div className="pc-cart-item-image">
            {item.image && <img src={item.image} alt={item.name} />}
          </div>
          <div className="pc-cart-item-info">
            <div className="pc-cart-item-name">
              {item.emoji} {item.name}
            </div>
            <div className="pc-cart-item-price">{formatPrice(item.price)}</div>
          </div>
          <div className="pc-cart-item-qty">
            <button onClick={() => decItem(item.productId)} aria-label="Giảm">
              −
            </button>
            <span>{item.qty}</span>
            <button onClick={() => incItem(item.productId)} aria-label="Tăng">
              +
            </button>
          </div>
          <button
            className="pc-cart-item-remove"
            aria-label="Xoá"
            onClick={() => removeItem(item.productId)}
          >
            ✕
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <div className="pc-cart-total">
            <span>Tổng cộng</span>
            <span>{formatTotal(cartTotal)}</span>
          </div>
          <button className="pc-btn pc-btn-primary pc-btn-full" onClick={onContinue}>
            Tiếp tục đặt bánh ♡
          </button>
        </>
      )}
    </div>
  );
}
