# Punny Cookies — storefront

Single-page bakery storefront built with React + Vite. Product catalog with cart,
order form, shareable order summary, and Facebook/Zalo handoff buttons.
No backend — orders are handed off as a copy-pasteable text summary.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Editing the menu

Product data lives in [`src/data/products.js`](src/data/products.js) — add,
remove, or edit items there. Each product:

```js
{ id, category, emoji, name, desc, price, image }
```

Set `image` to `null` to show a placeholder tile instead of a photo.
Categories shown as filter pills are defined in the same file (`CATEGORIES`).

## Configuring links

Real Facebook Page / Zalo URLs go in [`src/config.js`](src/config.js) —
currently placeholders (`https://m.me/PunnyCookies`, `https://zalo.me/PunnyCookies`).

## Deploying to GitHub Pages

Live at: https://ssjbluedev.github.io/punny-cookies/

```bash
npm run deploy   # builds and pushes dist/ to the gh-pages branch
```

`vite.config.js` uses `base: './'` and all asset paths in `src/` are relative
(no leading `/`) so the build works whether it's served from a domain root or
a GitHub Pages project subpath like `/punny-cookies/`.

## Structure

- `src/data/products.js` — menu data (edit this to update the catalog)
- `src/config.js` — Facebook/Zalo placeholder links
- `src/context/CartContext.jsx` — cart state (add/inc/dec/remove, toast)
- `src/components/` — one folder per section (Header, Hero, Menu, ProductModal,
  CartModal, HowToOrder, About, Contact, Footer, MobileBottomBar)
- `src/utils/` — price formatting, order-summary text, scroll helpers

The cart → order flow: clicking a product opens a detail modal (qty + note) →
"Thêm vào giỏ" adds it to the cart → the cart icon opens a 3-step modal
(cart list → contact/date form → shareable summary with Copy / Facebook / Zalo
buttons).
