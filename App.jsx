// src/App.jsx
import ProductCard from "./ProductCard";

const products = [
  {
    title: "HydroSync Pro Water Bottle",
    price: 137,
    description:
      "Stay on top of your daily water intake with built-in hydration reminders and Bluetooth connectivity.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
  },
  {
    title: "AeroGrip Trail Running Pack",
    price: 89,
    description:
      "Ultralight 10L vest pack with bounce-free fit, dual front flasks, and zippered pockets for the trail.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
  },
  {
    title: "LumiGlow Desk Lamp",
    price: 214,
    description:
      "Circadian-friendly LED lamp with tunable color temperature, wireless charging base, and voice dimming.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="app__header">
        <p className="app__eyebrow">Featured Collection</p>
        <h1 className="app__heading">Curated for your lifestyle</h1>
        <p className="app__subheading">
          Thoughtfully designed products that elevate every part of your day.
        </p>
      </div>

      <div className="app__grid">
        {products.map((p, i) => (
          <ProductCard
            key={i}
            title={p.title}
            price={p.price}
            description={p.description}
            image={p.image}
          />
        ))}
      </div>

      <p className="app__footer-note">
        Free shipping on orders over $150 · 30-day returns
      </p>
    </div>
  );
}