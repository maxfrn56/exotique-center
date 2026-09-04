import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import { CollectionPage } from "./pages/CollectionPage";
import { HistoirePage } from "./pages/HistoirePage";
import { HomePage } from "./pages/HomePage";
import { PackPage } from "./pages/PackPage";
import { PacksPage } from "./pages/PacksPage";
import { ProductPage } from "./pages/ProductPage";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="histoire" element={<HistoirePage />} />
            <Route path="epicerie" element={<CollectionPage type="epicerie" />} />
            <Route path="cosmetique" element={<CollectionPage type="cosmetique" />} />
            <Route path="packs" element={<PacksPage />} />
            <Route path="produit/:handle" element={<ProductPage />} />
            <Route path="pack/:handle" element={<PackPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
