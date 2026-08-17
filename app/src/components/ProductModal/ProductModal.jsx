import { useState } from "react";
import Modal from "../Modal/Modal";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/format";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");

  const handleAdd = () => {
    addItem(product, qty, note);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="pc-product-modal-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="pc-product-modal-placeholder">
            <span>{product.emoji}</span>
          </div>
        )}
      </div>
      <div className="pc-product-modal-name">
        {product.emoji} {product.name}
      </div>
      <div className="pc-product-modal-desc">{product.desc}</div>
      <div className="pc-product-modal-price">{formatPrice(product.price)}</div>

      <div className="pc-qty-row">
        <span className="pc-qty-label">Số lượng</span>
        <div className="pc-qty-control">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Giảm">
            −
          </button>
          <span>{qty}</span>
          <button onClick={() => setQty((q) => q + 1)} aria-label="Tăng">
            +
          </button>
        </div>
      </div>

      <textarea
        className="pc-textarea"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Ghi chú (không bắt buộc) — vd: ít ngọt, gói quà..."
      />

      <button className="pc-btn pc-btn-primary pc-btn-full" onClick={handleAdd}>
        Thêm vào giỏ ♡
      </button>
    </Modal>
  );
}
