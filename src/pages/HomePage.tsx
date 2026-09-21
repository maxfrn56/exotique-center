import { Link } from "react-router-dom";
import { packs, products } from "../data/catalog";
import { PackCard } from "../components/PackCard";
import { ProductCard } from "../components/ProductCard";

const marquee = [
  "Karité",
  "Fonio",
  "Bissap",
  "Nététou",
  "Baobab",
  "Arachide",
  "Palme rouge",
  "Moringa",
  "Riz brisé",
  "Savon noir",
];

export function HomePage() {
  const featured = products.filter((p) =>
    ["pate-d-arachide", "beurre-de-karite", "fonio"].includes(p.handle),
  );

  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <img src="/images/hero-still.png" alt="Nature morte : karité, arachide, hibiscus" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Épicerie · Cosmétique · Packs recettes</p>
          <h1>
            Exotic
            <em>Center</em>
          </h1>
          <p className="hero-lead">
            Une maison dédiée aux matières d'Afrique — pour cuisiner un mafé, un thiéboudienne, et prendre soin de la peau avec le karité, le baobab, le savon noir.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-light" to="/packs">
              Composer un pack recette
            </Link>
            <Link className="btn btn-ghost btn-light" to="/histoire">
              La maison
            </Link>
          </div>
        </div>
        <p className="scroll-hint">Défiler</p>
      </section>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="manifesto">
          <div>
            <p className="kicker">Position</p>
            <h2 className="display">
              Pas un souvenir.
              <em> Une cuisine, un rituel.</em>
            </h2>
          </div>
          <div>
            <p className="lede">
              Exotic Center ne raconte pas « l'Afrique » comme un décor. La maison vend des produits nommés, datés par leur terroir, destinés à servir — dans une casserole, dans la paume.
            </p>
            <p className="lede">
              D'un côté, l'épicerie : riz brisé, pâte d'arachide, fonio, nététou, bissap. De l'autre, le soin : karité, savon noir, huiles de baobab et de moringa. Au milieu, l'idée de la cliente : des packs recettes qui composent le panier d'un seul geste.
            </p>
          </div>
        </div>
      </section>

      <section className="univers">
        <Link className="univers-card" to="/epicerie">
          <img src="/images/pack-mafe.png" alt="Épicerie" />
          <p className="kicker">01 — Table</p>
          <h3>Épicerie</h3>
          <p style={{ margin: "8px 0 18px", maxWidth: 360 }}>
            Bases de sauce, céréales, condiments. Ce qu'il faut pour tenir une cuisine ouest-africaine, semaine après semaine.
          </p>
          <span className="link-arrow">Entrer</span>
        </Link>
        <Link className="univers-card" to="/cosmetique">
          <img src="/images/cosmetique-still.png" alt="Cosmétique" />
          <p className="kicker">02 — Soin</p>
          <h3>Cosmétique</h3>
          <p style={{ margin: "8px 0 18px", maxWidth: 360 }}>
            Des matières premières, peu transformées. Le geste du karité, du savon, de l'huile sèche.
          </p>
          <span className="link-arrow">Entrer</span>
        </Link>
      </section>

      <section className="section section-paper">
        <div className="pack-head">
          <div>
            <p className="kicker">Signature</p>
            <h2 className="display">
              Packs <em>recettes</em>
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Un clic. Les ingrédients du mafé, du thiéboudienne ou du yassa rejoignent le panier. Le frais — poisson, viande, légumes — reste au marché, ou au comptoir.
            </p>
          </div>
          <Link className="btn btn-dark" to="/packs">
            Tous les packs
          </Link>
        </div>
        <div className="pack-rail">
          {packs.map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="kicker">Sélection</p>
            <h2 className="display">Matières premières</h2>
          </div>
          <Link className="link-arrow" to="/epicerie">
            Toute l'épicerie
          </Link>
        </div>
        <div className="grid-products">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="teaser">
          <img src="/images/histoire-atelier.png" alt="Atelier de la maison" />
          <div>
            <p className="kicker">La maison</p>
            <h2 className="display">
              Une adresse,
              <em> deux comptoirs.</em>
            </h2>
            <p className="lede" style={{ margin: "1.4rem 0 2rem" }}>
              Derrière le nom, un rayon alimentaire et un rayon soin, tenus avec la même règle : nommer l'origine, refuser le folklore, laisser le produit travailler.
            </p>
            <Link className="btn btn-dark" to="/histoire">
              Lire l'histoire
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <p className="kicker">Méthode</p>
        <h2 className="display" style={{ maxWidth: 720, marginBottom: 64 }}>
          Trois exigences, une boutique.
        </h2>
        <div className="principles">
          <article>
            <p className="kicker">01</p>
            <h3>Origine</h3>
            <p>Chaque référence porte un terroir : vallée du fleuve, ceinture du karité, Saloum, Fouta. Pas de mélange anonyme.</p>
          </article>
          <article>
            <p className="kicker">02</p>
            <h3>Composition</h3>
            <p>Peu d'ingrédients. La pâte d'arachide est de l'arachide. Le karité est du karité. Les packs assemblent, ils n'inventent pas.</p>
          </article>
          <article>
            <p className="kicker">03</p>
            <h3>Usage</h3>
            <p>On ne vend pas un voyage. On vend de quoi faire un plat, de quoi huiler une peau. Le reste est littérature.</p>
          </article>
        </div>
      </section>
    </>
  );
}
