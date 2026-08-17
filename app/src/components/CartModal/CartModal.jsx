import { useState } from "react";
import Modal from "../Modal/Modal";
import { useCart } from "../../context/CartContext";
import CartStepList from "./CartStepList";
import CartStepForm from "./CartStepForm";
import CartStepSummary from "./CartStepSummary";
import "./CartModal.css";

const INITIAL_FORM = { name: "", phone: "", date: "", method: "Tự đến lấy" };

export default function CartModal({ onClose }) {
  const { cart } = useCart();
  const [step, setStep] = useState("cart");
  const [form, setForm] = useState(INITIAL_FORM);
  const [orderNote, setOrderNote] = useState("");

  return (
    <Modal onClose={onClose} maxWidth={480}>
      {step === "cart" && (
        <CartStepList onContinue={() => setStep("form")} />
      )}
      {step === "form" && (
        <CartStepForm
          form={form}
          onFormChange={(patch) => setForm((f) => ({ ...f, ...patch }))}
          orderNote={orderNote}
          onOrderNoteChange={setOrderNote}
          onBack={() => setStep("cart")}
          onNext={() => setStep("summary")}
        />
      )}
      {step === "summary" && (
        <CartStepSummary cart={cart} form={form} orderNote={orderNote} />
      )}
    </Modal>
  );
}
