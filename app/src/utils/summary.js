export function cartLines(cart) {
  return cart.map((it) => `${it.name} × ${it.qty}${it.note ? ` (${it.note})` : ""}`);
}

export function buildSummaryText(cart, form, orderNote) {
  if (cart.length === 0) return "";
  const lines = [
    "PUNNY COOKIES ♡",
    "",
    ...cartLines(cart),
    "",
    form.date ? `Ngày nhận: ${form.date}` : "Ngày nhận: (chưa chọn)",
    `Phương thức: ${form.method}`,
    "",
    `Tên: ${form.name || "..."}`,
    `SĐT: ${form.phone || "..."}`,
  ];
  if (orderNote) lines.push("", "Ghi chú:", orderNote);
  return lines.join("\n");
}
