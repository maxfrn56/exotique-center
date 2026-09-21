export function HistoirePage() {
  return (
    <>
      <header className="page-hero">
        <p className="kicker">La maison</p>
        <h1>
          Une boutique
          <br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>sans folklore.</em>
        </h1>
      </header>

      <section className="story-layout">
        <img src="/images/histoire-atelier.png" alt="Intérieur de la maison, étagères et lumière" />
        <div className="story-copy">
          <p>
            Exotic Center naît d'un constat simple : trop de produits d'Afrique arrivent sans récit utile, ou trop de récits arrivent sans exigence. On veut du karité, on reçoit un souvenir. On veut un mafé, on reçoit un cliché.
          </p>
          <p>
            La maison tient deux comptoirs. L'épicerie, pour les bases d'une cuisine ouest-africaine tenue dans la durée. Le soin, pour des matières peu transformées — beurres, huiles, savon — destinées au quotidien, pas à l'étagère décorative.
          </p>
          <p>
            Le nom garde le mot « exotic ». On le reprend au sérieux : ce qui vient d'ailleurs, composé ici, pour servir. Pas un safari. Pas un masque. Une liste d'ingrédients.
          </p>
          <p>
            Les packs recettes sont l'invention de la cliente : un mafé, un thiéboudienne, un yassa — le garde-manger se constitue d'un clic. Le poisson, la viande, les légumes restent du frais. C'est plus honnête, et meilleur.
          </p>

          <ul className="timeline">
            <li>
              <strong>Sénégal</strong>
              <span>Riz brisé de la vallée, bissap du Saloum, huile de baobab, moringa.</span>
            </li>
            <li>
              <strong>Mali / Burkina</strong>
              <span>Karité de coopératives de productrices, nététou, arachide.</span>
            </li>
            <li>
              <strong>Guinée</strong>
              <span>Fonio des plateaux, céréale fine, cuisson courte.</span>
            </li>
            <li>
              <strong>Côte d'Ivoire</strong>
              <span>Huile de palme rouge vierge, pour la couleur et le fond de sauce.</span>
            </li>
            <li>
              <strong>Ghana / Togo</strong>
              <span>Savon noir, cendre végétale et karité, pain de toilette.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
