import { formatPrice } from "../../utils/format";
import "./ProductCard.css";

export default function ProductCard({ product, onOpen }) {
  return (
    <div className="pc-card">
      <div className="pc-card-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="pc-card-placeholder">
            <span>{product.emoji}</span>
          </div>
        )}
      </div>
      <div className="pc-card-name">
        {product.emoji} {product.name}
      </div>
      <div className="pc-card-desc">{product.desc}</div>
      <div className="pc-card-footer">
        <span className="pc-card-price">{formatPrice(product.price)}</span>
        <button className="pc-btn pc-btn-primary pc-btn-small" onClick={() => onOpen(product)}>
          Đặt bánh
        </button>
      </div>
    </div>
  );
}
