import "./HowToOrder.css";

const STEPS = [
  { num: "01", title: "Chọn bánh 🍪", desc: "Chọn những món bạn thích." },
  { num: "02", title: "Gửi order 💌", desc: "Điền thông tin và gửi đơn qua Facebook." },
  { num: "03", title: "Punny xác nhận ♡", desc: "Store sẽ nhắn lại để xác nhận đơn và thời gian nhận bánh." },
];

export default function HowToOrder() {
  return (
    <section id="how" className="pc-how">
      <div className="pc-how-heading">
        <h2>Đặt bánh dễ lắm ♡</h2>
      </div>
      <div className="pc-how-grid">
        {STEPS.map((step) => (
          <div key={step.num} className="pc-how-card">
            <div className="pc-how-num">{step.num}</div>
            <div className="pc-how-title">{step.title}</div>
            <div className="pc-how-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
