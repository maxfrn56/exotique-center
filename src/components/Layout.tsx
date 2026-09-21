import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { formatPrice } from "../lib/money";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "./CartDrawer";

const links = [
  { to: "/histoire", label: "Histoire" },
  { to: "/epicerie", label: "Épicerie" },
  { to: "/cosmetique", label: "Cosmétique" },
  { to: "/packs", label: "Packs recettes" },
];

export function Layout() {
  const { pathname } = useLocation();
  const { count, openCart, toast, isOpen, subtotal } = useCart();
  const [solid, setSolid] = useState(pathname !== "/");
  const [menu, setMenu] = useState(false);
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(false);
    setSolid(pathname !== "/");
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (pathname !== "/") {
        setSolid(true);
        return;
      }
      setSolid(window.scrollY > window.innerHeight * 0.72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    const t = window.setTimeout(() => setBooting(false), 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <div className="grain" aria-hidden />
      <div className={`preloader${booting ? "" : " is-done"}`} aria-hidden={!booting}>
        <div className="preloader-mark">
          <span>Maison</span>
          <strong>Exotic Center</strong>
          <div className="preloader-bar">
            <i />
          </div>
        </div>
      </div>

      <header className={`site-header${solid ? " is-solid" : ""}`}>
        <Link className="brand" to="/">
          <small>Maison</small>
          <strong>Exotic Center</strong>
        </Link>
        <nav className="nav-links" aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-right">
          <button className="cart-btn" type="button" onClick={openCart}>
            Panier
            <span className="cart-count">{count}</span>
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Menu"
            onClick={() => setMenu((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${menu ? " is-open" : ""}`}>
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setMenu(false)}>
            {l.label}
          </Link>
        ))}
      </nav>

      <main className="page">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <p className="footer-brand">Exotic Center</p>
            <p className="lede" style={{ marginTop: 16, color: "rgba(246,240,230,0.7)" }}>
              Épicerie et cosmétique. Des matières d'Afrique, choisies pour la table et le soin — sans folklore, avec exigence.
            </p>
          </div>
          <div>
            <p className="footer-label">Maison</p>
            <div className="footer-nav">
              <Link to="/histoire">Histoire</Link>
              <Link to="/packs">Packs recettes</Link>
              <Link to="/epicerie">Épicerie</Link>
              <Link to="/cosmetique">Cosmétique</Link>
            </div>
          </div>
          <div>
            <p className="footer-label">Service</p>
            <div className="footer-nav">
              <span>Livraison 48–72 h</span>
              <span>Click & collect boutique</span>
              <span>Packs composés à la commande</span>
            </div>
          </div>
          <div>
            <p className="footer-label">Écrire</p>
            <div className="footer-nav">
              <span>bonjour@exoticcenter.fr</span>
              <span>Maquette front — Shopify headless</span>
            </div>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} Exotic Center</span>
          <span>Maquette de validation</span>
        </div>
      </footer>

      <CartDrawer />
      {count > 0 && !isOpen && (
        <button className="cart-dock" type="button" onClick={openCart}>
          Voir le panier
          <span>
            {count} · {formatPrice(subtotal)}
          </span>
        </button>
      )}
      <div className={`toast${toast ? " is-on" : ""}`} role="status">
        {toast}
      </div>
    </>
  );
}
