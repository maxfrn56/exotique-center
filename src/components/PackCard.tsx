import { Link } from "react-router-dom";
import { packPrice } from "../data/catalog";
import { formatPrice } from "../lib/money";
import type { Pack } from "../types";

export function PackCard({ pack }: { pack: Pack }) {
  return (
    <Link className="pack-card" to={`/pack/${pack.handle}`}>
      <div className="media wide">
        <img src={pack.image} alt={pack.title} />
      </div>
      <div className="card-meta">
        <p className="origin">
          {pack.origin} · {pack.lines.length} ingrédients
        </p>
        <h3>{pack.title}</h3>
        <div className="card-row">
          <span>{pack.subtitle}</span>
          <span className="price">{formatPrice({ amount: packPrice(pack), currency: "EUR" })}</span>
        </div>
      </div>
    </Link>
  );
}
