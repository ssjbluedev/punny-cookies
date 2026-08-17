import { useCart } from "../../context/CartContext";
import { cartLines } from "../../utils/summary";

export default function CartStepForm({
  form,
  onFormChange,
  orderNote,
  onOrderNoteChange,
  onBack,
  onNext,
}) {
  const { cart } = useCart();
  const linesText = cartLines(cart).join("\n");

  return (
    <div>
      <div className="pc-cart-title">Thông tin đặt bánh</div>
      <div className="pc-form-fields">
        <label className="pc-field">
          Họ tên
          <input
            value={form.name}
            onChange={(e) => onFormChange({ name: e.target.value })}
            placeholder="Nguyễn A"
          />
        </label>
        <label className="pc-field">
          Số điện thoại
          <input
            value={form.phone}
            onChange={(e) => onFormChange({ phone: e.target.value })}
            placeholder="09xxxxxxxx"
          />
        </label>
        <div className="pc-cart-lines">
          Sản phẩm:
          {"\n"}
          {linesText}
        </div>
        <label className="pc-field">
          Ngày muốn nhận bánh
          <input
            type="date"
            value={form.date}
            onChange={(e) => onFormChange({ date: e.target.value })}
          />
        </label>
        <label className="pc-field">
          Phương thức nhận bánh
          <select
            value={form.method}
            onChange={(e) => onFormChange({ method: e.target.value })}
          >
            <option value="Tự đến lấy">Tự đến lấy</option>
            <option value="Giao tận nơi">Giao tận nơi</option>
          </select>
        </label>
        <label className="pc-field">
          Ghi chú
          <textarea
            value={orderNote}
            onChange={(e) => onOrderNoteChange(e.target.value)}
          />
        </label>
      </div>
      <div className="pc-form-actions">
        <button className="pc-btn pc-btn-outline pc-btn-back" onClick={onBack}>
          ←
        </button>
        <button className="pc-btn pc-btn-primary pc-btn-grow" onClick={onNext}>
          Xem đơn hàng ♡
        </button>
      </div>
    </div>
  );
}
