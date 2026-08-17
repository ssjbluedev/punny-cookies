import { useCart } from "../../context/CartContext";
import "./Toast.css";

export default function Toast() {
  const { toast } = useCart();
  if (!toast) return null;
  return <div className="pc-toast">{toast}</div>;
}
