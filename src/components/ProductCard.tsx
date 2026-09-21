import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../lib/money";
import type { Product } from "../types";

export function ProductCard({ product }: { product: Product }) {
  const { addVariant } = useCart();
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [qty, setQty] = useState(1);

  const variant = useMemo(
    () => product.variants.find((v) => v.id === variantId) ?? product.variants[0],
    [product, variantId],
  );

  return (
    <article className="product-card">
      <Link className="media" to={`/produit/${product.handle}`}>
        <img src={product.images[0]} alt={product.title} />
      </Link>
      <div className="card-meta">
        <p className="origin">
          {product.region} · {product.collection}
        </p>
        <h3>
          <Link to={`/produit/${product.handle}`}>{product.title}</Link>
        </h3>
        <div className="card-row">
          <span>{product.subtitle}</span>
          <span className="price">{formatPrice(variant.price)}</span>
        </div>

        {product.variants.length > 1 && (
          <label className="card-variant">
            <span>Format</span>
            <select value={variantId} onChange={(e) => setVariantId(e.target.value)}>
              {product.variants.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.title} — {formatPrice(v.price)}
                </option>
              ))}
            </select>
          </label>
        )}

        <div className="quick-add">
          <div className="stepper" role="group" aria-label={`Quantité ${product.title}`}>
            <button type="button" onClick={() => setQty((n) => Math.max(1, n - 1))} aria-label="Diminuer">
              −
            </button>
            <span>{qty}</span>
            <button type="button" onClick={() => setQty((n) => n + 1)} aria-label="Augmenter">
              +
            </button>
          </div>
          <button
            className="btn btn-fill quick-add-btn"
            type="button"
            onClick={() => addVariant(product.handle, variant.id, qty, { open: false })}
          >
            Ajouter
          </button>
        </div>
      </div>
    </article>
  );
}
