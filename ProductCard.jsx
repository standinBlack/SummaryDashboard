// src/components/ProductCard.jsx
import { useState } from "react";

export default function ProductCard({ title, price, description, image }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState("800 ml");
  const [hovered, setHovered] = useState(false);

  const sizes = ["300 ml", "500 ml", "800 ml", "1 Litre"];

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      className={`product-card ${hovered ? "product-card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="product-card__image-wrapper">
        <img
          src={image}
          alt={title}
          className={`product-card__image ${hovered ? "product-card__image--hovered" : ""}`}
        />
        <button
          className={`product-card__heart ${liked ? "product-card__heart--liked" : ""}`}
          onClick={() => setLiked((l) => !l)}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill={liked ? "#e85d04" : "none"}
            stroke={liked ? "#e85d04" : "#999"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="product-card__body">
        <h2 className="product-card__title">{title}</h2>

        <div className="product-card__sizes">
          {sizes.map((s) => (
            <button
              key={s}
              className={`product-card__size-pill ${selectedSize === s ? "product-card__size-pill--active" : ""}`}
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <p className="product-card__description">{description}</p>

        <div className="product-card__footer">
          <span className="product-card__price">${price}</span>
          <button
            className={`product-card__cta ${added ? "product-card__cta--added" : ""}`}
            onClick={handleAddToCart}
          >
            {added ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Added!
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}