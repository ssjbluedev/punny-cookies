import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { loadCart, saveCart } from "../utils/cartStorage";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const showToast = useCallback((message) => {
    clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(null), 1800);
  }, []);

  const addItem = useCallback(
    (product, qty, note) => {
      setCart((prev) => {
        const existing = prev.find((it) => it.productId === product.id);
        if (existing) {
          return prev.map((it) =>
            it.productId === product.id
              ? { ...it, qty: it.qty + qty, note: note || it.note }
              : it
          );
        }
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            emoji: product.emoji,
            image: product.image,
            price: product.price,
            qty,
            note,
          },
        ];
      });
      showToast(`Đã thêm ${product.name} vào giỏ ♡`);
    },
    [showToast]
  );

  const incItem = useCallback((productId) => {
    setCart((prev) =>
      prev.map((it) => (it.productId === productId ? { ...it, qty: it.qty + 1 } : it))
    );
  }, []);

  const decItem = useCallback((productId) => {
    setCart((prev) =>
      prev.map((it) =>
        it.productId === productId ? { ...it, qty: Math.max(1, it.qty - 1) } : it
      )
    );
  }, []);

  const removeItem = useCallback((productId) => {
    setCart((prev) => prev.filter((it) => it.productId !== productId));
  }, []);

  const cartCount = useMemo(() => cart.reduce((sum, it) => sum + it.qty, 0), [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((sum, it) => sum + it.price * it.qty, 0),
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      toast,
      addItem,
      incItem,
      decItem,
      removeItem,
      cartCount,
      cartTotal,
    }),
    [cart, toast, addItem, incItem, decItem, removeItem, cartCount, cartTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
