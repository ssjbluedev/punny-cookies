import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { useIsMobile } from "./hooks/useIsMobile";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ScallopDivider from "./components/ScallopDivider/ScallopDivider";
import Menu from "./components/Menu/Menu";
import HowToOrder from "./components/HowToOrder/HowToOrder";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MobileBottomBar from "./components/MobileBottomBar/MobileBottomBar";
import ProductModal from "./components/ProductModal/ProductModal";
import CartModal from "./components/CartModal/CartModal";
import Toast from "./components/Toast/Toast";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import FloatingCartButton from "./components/FloatingCartButton/FloatingCartButton";
import "./App.css";

export default function App() {
  const isMobile = useIsMobile();
  const [modalProduct, setModalProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="pc-page" style={{ paddingBottom: isMobile ? "76px" : "0px" }}>
        <Header isMobile={isMobile} onOpenCart={() => setCartOpen(true)} />
        <Hero />
        <ScallopDivider />
        <Menu onOpenProduct={setModalProduct} />
        <HowToOrder />
        <About />
        <Contact />
        <Footer isMobile={isMobile} />
        {isMobile && <MobileBottomBar />}
      </div>

      {modalProduct && (
        <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
      )}
      {cartOpen && <CartModal onClose={() => setCartOpen(false)} />}
      <Toast />
      {isMobile && <FloatingCartButton onOpenCart={() => setCartOpen(true)} />}
      <ScrollToTopButton isMobile={isMobile} />
    </CartProvider>
  );
}
