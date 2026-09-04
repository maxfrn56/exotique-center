import { useMemo, useState } from "react";
import { productsByType } from "../data/catalog";
import { ProductCard } from "../components/ProductCard";

export function CollectionPage({ type }: { type: "epicerie" | "cosmetique" }) {
  const all = productsByType(type);
  const collections = ["Tous", ...Array.from(new Set(all.map((p) => p.collection)))];
  const [filter, setFilter] = useState("Tous");

  const list = useMemo(
    () => (filter === "Tous" ? all : all.filter((p) => p.collection === filter)),
    [all, filter],
  );

  const isFood = type === "epicerie";

  return (
    <>
      <header className="page-hero">
        <p className="kicker">{isFood ? "Table" : "Soin"}</p>
        <h1>{isFood ? "Épicerie" : "Cosmétique"}</h1>
        <p className="lede" style={{ marginTop: 20 }}>
          {isFood
            ? "Céréales, bases de sauce, condiments, infusions. Les formats varient ; la composition reste courte."
            : "Karité, savon, huiles. Des déclinaisons de format et de qualité — brut ou filtré, 30 ml ou 100 ml."}
        </p>
      </header>

      <div className="filters">
        {collections.map((c) => (
          <button
            key={c}
            className={`filter-chip${filter === c ? " is-on" : ""}`}
            type="button"
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="grid-products">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
