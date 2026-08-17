import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "../../data/products";
import ProductCard from "./ProductCard";
import "./Menu.css";

export default function Menu({ onOpenProduct }) {
  const [category, setCategory] = useState("all");

  const filtered = useMemo(
    () => PRODUCTS.filter((p) => category === "all" || p.category === category),
    [category]
  );

  return (
    <section id="menu" className="pc-menu">
      <div className="pc-menu-heading">
        <h2>Hôm nay ăn gì nhỉ? ♡</h2>
        <p>Những món ngọt nhỏ xinh được làm theo order.</p>
      </div>

      <div className="pc-menu-pills">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`pc-pill ${category === cat.key ? "pc-pill-active" : ""}`}
            onClick={() => setCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="pc-menu-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onOpen={onOpenProduct} />
        ))}
      </div>
    </section>
  );
}
