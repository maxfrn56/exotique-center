import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { getProduct, products } from "../data/catalog";
import { formatPrice } from "../lib/money";

export function ProductPage() {
  const { handle } = useParams();
  const product = handle ? getProduct(handle) : undefined;
  const { addVariant } = useCart();
  const [variantId, setVariantId] = useState(product?.variants[0]?.id ?? "");
  const [image, setImage] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!product) return;
    setVariantId(product.variants[0].id);
    setImage(0);
    setQty(1);
  }, [product]);

  const variant = useMemo(
    () => product?.variants.find((v) => v.id === variantId) ?? product?.variants[0],
    [product, variantId],
  );

  const optionKeys = useMemo(() => {
    if (!product) return [];
    return Array.from(new Set(product.variants.flatMap((v) => Object.keys(v.options))));
  }, [product]);

  const selected = variant?.options ?? {};

  if (!product || !variant) return <Navigate to="/" replace />;

  const related = products
    .filter((p) => p.productType === product.productType && p.id !== product.id)
    .slice(0, 3);

  function selectOption(key: string, value: string) {
    if (!product) return;
    const next = { ...selected, [key]: value };
    const match =
      product.variants.find((v) => Object.entries(next).every(([k, val]) => v.options[k] === val)) ??
      product.variants.find((v) => v.options[key] === value);
    if (match) setVariantId(match.id);
  }

  return (
    <>
      <article className="pdp">
        <div className="pdp-gallery">
          <img src={product.images[image] ?? product.images[0]} alt={product.title} />
          {product.images.length > 1 && (
            <div className="pdp-thumbs">
              {product.images.map((src, i) => (
                <button key={src} className={i === image ? "is-on" : ""} type="button" onClick={() => setImage(i)}>
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="pdp-info">
          <p className="kicker">
            {product.region} · {product.collection}
          </p>
          <h1>{product.title}</h1>
          <p style={{ marginTop: 8, color: "var(--muted)" }}>{product.subtitle}</p>
          <p className="pdp-price">{formatPrice(variant.price)}</p>
          <p>{product.description}</p>
          <p style={{ marginTop: 12 }}>{product.usage}</p>

          {optionKeys.map((key) => {
            const values = Array.from(new Set(product.variants.map((v) => v.options[key]).filter(Boolean)));
            return (
              <div className="variant-group" key={key}>
                <span>{key}</span>
                <div className="variant-options">
                  {values.map((value) => (
                    <button
                      key={value}
                      type="button"
                      className={selected[key] === value ? "is-on" : ""}
                      onClick={() => selectOption(key, value)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="pdp-actions">
            <div className="stepper" role="group" aria-label="Quantité">
              <button type="button" onClick={() => setQty((n) => Math.max(1, n - 1))} aria-label="Diminuer">
                −
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((n) => n + 1)} aria-label="Augmenter">
                +
              </button>
            </div>
            <button className="btn btn-fill" type="button" onClick={() => addVariant(product.handle, variant.id, qty)}>
              Ajouter au panier
            </button>
            <Link className="btn btn-dark" to={product.productType === "epicerie" ? "/epicerie" : "/cosmetique"}>
              Retour rayon
            </Link>
          </div>

          <ul className="detail-list">
            <li>
              <span>Origine</span>
              <span>
                {product.origin}, {product.region}
              </span>
            </li>
            {product.details.map((d) => (
              <li key={d}>
                <span>Détail</span>
                <span>{d}</span>
              </li>
            ))}
            <li>
              <span>Variante</span>
              <span>{variant.title}</span>
            </li>
          </ul>
        </div>
      </article>

      <section className="related">
        <div className="section-head">
          <h2 className="display" style={{ fontSize: "2.4rem" }}>
            Dans le même rayon
          </h2>
        </div>
        <div className="grid-products">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
