import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { packPrice } from "../data/catalog";
import { formatPrice } from "../lib/money";
import type { Pack } from "../types";

export function PackCard({ pack }: { pack: Pack }) {
  const { addPack } = useCart();

  return (
    <article className="pack-card">
      <Link className="media wide" to={`/pack/${pack.handle}`}>
        <img src={pack.image} alt={pack.title} />
      </Link>
      <div className="card-meta">
        <p className="origin">
          {pack.origin} · {pack.lines.length} ingrédients
        </p>
        <h3>
          <Link to={`/pack/${pack.handle}`}>{pack.title}</Link>
        </h3>
        <div className="card-row">
          <span>{pack.subtitle}</span>
          <span className="price">{formatPrice({ amount: packPrice(pack), currency: "EUR" })}</span>
        </div>
        <div className="quick-add">
          <button
            className="btn btn-fill quick-add-btn"
            type="button"
            onClick={() => addPack(pack.handle, { open: false })}
          >
            Ajouter le pack
          </button>
        </div>
      </div>
    </article>
  );
}
