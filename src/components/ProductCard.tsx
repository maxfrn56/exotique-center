import { Link } from "react-router-dom";
import { formatPrice } from "../lib/money";
import type { Product } from "../types";

export function ProductCard({ product }: { product: Product }) {
  const from = product.variants[0];
  return (
    <Link className="product-card" to={`/produit/${product.handle}`}>
      <div className="media">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="card-meta">
        <p className="origin">
          {product.region} · {product.collection}
        </p>
        <h3>{product.title}</h3>
        <div className="card-row">
          <span>{product.subtitle}</span>
          <span className="price">{formatPrice(from.price)}</span>
        </div>
      </div>
    </Link>
  );
}
