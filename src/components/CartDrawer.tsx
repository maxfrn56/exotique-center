import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../lib/money";

export function CartDrawer() {
  const { lines, isOpen, closeCart, setQuantity, remove, removePackInstance, subtotal } = useCart();

  const packGroups = new Map<string, typeof lines>();
  const singles: typeof lines = [];

  for (const line of lines) {
    if (line.packInstanceId) {
      const current = packGroups.get(line.packInstanceId) ?? [];
      current.push(line);
      packGroups.set(line.packInstanceId, current);
    } else {
      singles.push(line);
    }
  }

  return (
    <>
      <div className={`cart-overlay${isOpen ? " is-open" : ""}`} onClick={closeCart} />
      <aside className={`cart-drawer${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
        <div className="cart-head">
          <h2>Panier</h2>
          <button type="button" onClick={closeCart} aria-label="Fermer">
            Fermer
          </button>
        </div>
        <div className="cart-body">
          {lines.length === 0 && (
            <p className="cart-empty">Le panier est vide. Un pack recette le compose en un geste.</p>
          )}

          {[...packGroups.entries()].map(([instanceId, group]) => (
            <div className="pack-group" key={instanceId}>
              <div className="pack-group-head">
                <span>{group[0].packTitle}</span>
                <button type="button" onClick={() => removePackInstance(instanceId)}>
                  Retirer le pack
                </button>
              </div>
              {group.map((line) => (
                <CartLineRow key={line.key} line={line} setQuantity={setQuantity} remove={remove} />
              ))}
            </div>
          ))}

          {singles.map((line) => (
            <CartLineRow key={line.key} line={line} setQuantity={setQuantity} remove={remove} />
          ))}
        </div>
        <div className="cart-foot">
          <div className="row">
            <span>Sous-total</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
          <button className="btn btn-fill" type="button" style={{ width: "100%" }}>
            Commander — maquette
          </button>
          <p className="notice" style={{ border: 0, marginTop: 12, padding: 0 }}>
            Checkout Shopify headless à brancher (Storefront API).
          </p>
          <Link className="link-arrow" to="/packs" onClick={closeCart} style={{ display: "inline-block", marginTop: 12 }}>
            Voir les packs recettes
          </Link>
        </div>
      </aside>
    </>
  );
}

function CartLineRow({
  line,
  setQuantity,
  remove,
}: {
  line: ReturnType<typeof useCart>["lines"][number];
  setQuantity: (key: string, quantity: number) => void;
  remove: (key: string) => void;
}) {
  return (
    <div className="cart-line">
      <img src={line.image} alt="" />
      <div>
        <strong>{line.title}</strong>
        <p style={{ color: "var(--muted)", fontSize: 13 }}>{line.variantTitle}</p>
        <div className="qty">
          <button type="button" onClick={() => setQuantity(line.key, line.quantity - 1)} aria-label="Diminuer">
            −
          </button>
          <span>{line.quantity}</span>
          <button type="button" onClick={() => setQuantity(line.key, line.quantity + 1)} aria-label="Augmenter">
            +
          </button>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <p className="price">{formatPrice({ amount: line.price.amount * line.quantity, currency: "EUR" })}</p>
        <button type="button" onClick={() => remove(line.key)} style={{ marginTop: 8, fontSize: 12, color: "var(--muted)" }}>
          Retirer
        </button>
      </div>
    </div>
  );
}
