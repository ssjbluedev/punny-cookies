import { useEffect, useRef, useState } from "react";
import { buildSummaryText } from "../../utils/summary";
import { openFacebook, openZalo } from "../../utils/links";

export default function CartStepSummary({ cart, form, orderNote }) {
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef(null);
  const summaryText = buildSummaryText(cart, form, orderNote);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(summaryText).catch(() => {});
    }
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="pc-cart-title">Đơn hàng của bạn</div>
      <pre className="pc-summary-text">{summaryText}</pre>
      <button className="pc-btn pc-btn-outline pc-btn-full pc-btn-copy" onClick={handleCopy}>
        {copied ? "Đã copy ✓" : "Copy đơn hàng 📋"}
      </button>
      <button
        className="pc-btn pc-btn-primary pc-btn-full pc-btn-spaced"
        onClick={openFacebook}
      >
        Tiếp tục đặt bánh qua Facebook ♡
      </button>
      <button className="pc-btn pc-btn-zalo pc-btn-full" onClick={openZalo}>
        Liên hệ qua Zalo
      </button>
      <p className="pc-summary-hint">
        Copy đơn hàng rồi dán vào Messenger khi Punny nhắn lại nhé ♡
      </p>
    </div>
  );
}
