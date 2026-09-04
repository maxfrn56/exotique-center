import { Link } from "react-router-dom";
import { packs } from "../data/catalog";
import { PackCard } from "../components/PackCard";

export function PacksPage() {
  return (
    <>
      <header className="page-hero">
        <p className="kicker">Signature</p>
        <h1>
          Packs
          <br />
          recettes
        </h1>
        <p className="lede" style={{ marginTop: 20 }}>
          Cliquez un pack : chaque ingrédient rejoint le panier, déjà quantifié. Le frais se choisit à part — c'est volontaire.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="pack-rail">
          {packs.map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>
        <p className="notice" style={{ marginTop: 48 }}>
          En production Shopify, chaque ligne du pack devient un <em>cart line</em> annoté d'un attribut{" "}
          <code>_pack</code>. Le checkout reste natif.
        </p>
        <Link className="link-arrow" to="/epicerie" style={{ display: "inline-block", marginTop: 24 }}>
          Composer à la pièce
        </Link>
      </section>
    </>
  );
}
