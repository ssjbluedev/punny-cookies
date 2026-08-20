// Edit this file to add, remove, or update menu items.
// `image: null` renders a placeholder tile instead of a photo.
//
// Only "cookie" is offered for now — mochi is paused, so its category
// pill is removed below. Add `{ key: "mochi", label: "Mochi" }` back to
// CATEGORIES once mochi items return to PRODUCTS.
export const CATEGORIES = [
  { key: "all", label: "Tất cả" },
  { key: "cookie", label: "Cookies" },
];

export const PRODUCTS = [
  {
    id: "matcha_crinkle",
    category: "cookie",
    emoji: "🍵",
    name: "Matcha crinkle",
    desc: "Cookie vị trà xanh, phủ đường bột nứt mặt kiểu crinkle",
    price: 10000,
    image: "assets/matcha-crinkle.png",
  },
  {
    id: "chocolate_crinkle",
    category: "cookie",
    emoji: "🍫",
    name: "Chocolate crinkle",
    desc: "Cookie vị chocolate đậm, phủ đường bột nứt mặt kiểu crinkle",
    price: 10000,
    image: "assets/chocolate-crinkle.png",
  },
  {
    id: "lemon_crinkle",
    category: "cookie",
    emoji: "🍋",
    name: "Lemon crinkle",
    desc: "Cookie vị chanh tươi mát, phủ đường bột nứt mặt kiểu crinkle",
    price: 10000,
    image: "assets/lemon-crinkle.png",
  },
  {
    id: "chocolate_chip_cookie",
    category: "cookie",
    emoji: "🍪",
    name: "Chocolate chip cookie",
    desc: "Cookie chocolate chip giòn rụm bên ngoài, mềm bên trong (45g)",
    price: 18000,
    image: "assets/chocolate-chip-cookie.png",
  },
  {
    id: "cream_cheese_crinkle",
    category: "cookie",
    emoji: "🧀",
    name: "Cream Cheese Crinkle",
    desc: "Crinkle nhân kem phô mai béo nhẹ (45g)",
    price: 25000,
    image: "assets/cream-cheese-crinkle.png",
  },
  {
    id: "red_velvet_crinkle_cream_cheese",
    category: "cookie",
    emoji: "❤️",
    name: "Red Velvet crinkle nhân kem cheese",
    desc: "Crinkle red velvet kết hợp với nhân kem phô mai (45g)",
    price: 22000,
    image: "assets/red-velvet-crinkle-cream-cheese.png",
  },
  {
    id: "matcha_crinkle_cream_cheese",
    category: "cookie",
    emoji: "🍵",
    name: "Matcha crinkle nhân kem cheese",
    desc: "Crinkle vị trà xanh kết hợp nhân kem phô mai",
    price: 22000,
    image: "assets/matcha-crinkle-cream-cheese.png",
  },
  {
    id: "chocolate_crinkle_chocolate_filling",
    category: "cookie",
    emoji: "🍫",
    name: "Chocolate crinkle nhân socola",
    desc: "Crinkle chocolate với nhân socola tan chảy",
    price: 22000,
    image: "assets/chocolate-crinkle-chocolate-filling.png",
  },
  {
    id: "lemon_crinkle_cream_cheese",
    category: "cookie",
    emoji: "🍋",
    name: "Lemon crinkle nhân kem cheese",
    desc: "Crinkle vị chanh kết hợp nhân kem phô mai",
    price: 22000,
    image: "assets/lemon-crinkle-cream-cheese.png",
  },
  {
    id: "oreo_crumbl_cookie",
    category: "cookie",
    emoji: "🖤",
    name: "Oreo crumbl Cookie",
    desc: "Bánh quy kết hợp với kem cheese và vụn Oreo (45-50g)",
    price: 26000,
    image: "assets/oreo-crumbl-cookie.png",
  },
  {
    id: "oreo_matcha_cookie",
    category: "cookie",
    emoji: "🍵",
    name: "Oreo matcha cookie",
    desc: "Cookie trà xanh phủ vụn bánh Oreo",
    price: 26000,
    image: "assets/oreo-matcha-cookie.png",
  },
];
