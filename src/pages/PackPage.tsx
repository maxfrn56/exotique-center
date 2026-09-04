import { Link, Navigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getPack, packIngredients, packPrice } from "../data/catalog";
import { formatPrice } from "../lib/money";

export function PackPage() {
  const { handle } = useParams();
  const pack = handle ? getPack(handle) : undefined;
  const { addPack } = useCart();

  if (!pack) return <Navigate to="/packs" replace />;

  const ingredients = packIngredients(pack);
  const total = packPrice(pack);

  return (
    <article className="pdp">
      <div className="pdp-gallery">
        <img src={pack.image} alt={pack.title} />
      </div>
      <div className="pdp-info">
        <p className="kicker">
          Pack recette · {pack.origin}
        </p>
        <h1>{pack.title}</h1>
        <p style={{ marginTop: 8, color: "var(--muted)" }}>
          {pack.subtitle} · {pack.servings}
        </p>
        <p className="pdp-price">{formatPrice({ amount: total, currency: "EUR" })}</p>
        <p>{pack.story}</p>

        <div className="ingredient-list">
          <p className="kicker">Ingrédients ajoutés au panier</p>
          {ingredients.map(({ product, variant, quantity }) => (
            <Link className="ingredient-row" key={variant.id} to={`/produit/${product.handle}`}>
              <img src={product.images[0]} alt="" />
              <div>
                <strong>{product.title}</strong>
                <p style={{ color: "var(--muted)", fontSize: 14 }}>
                  {variant.title} · ×{quantity}
                </p>
              </div>
              <span className="price">{formatPrice(variant.price)}</span>
            </Link>
          ))}
        </div>

        <div className="pdp-actions">
          <button className="btn btn-fill" type="button" onClick={() => addPack(pack.handle)}>
            Ajouter le pack au panier
          </button>
          <Link className="btn btn-dark" to="/packs">
            Autres packs
          </Link>
        </div>

        <p className="notice">{pack.note}</p>

        <div style={{ marginTop: 36 }}>
          <p className="kicker">La méthode</p>
          <ol className="method">
            {pack.method.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
