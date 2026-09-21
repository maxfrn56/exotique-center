import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getPack, getProduct, packIngredients } from "../data/catalog";
import { uid } from "../lib/money";
import type { CartLine, Money } from "../types";

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: Money;
  isOpen: boolean;
  toast: string;
  openCart: () => void;
  closeCart: () => void;
  addVariant: (productHandle: string, variantId: string, quantity?: number, options?: { open?: boolean }) => void;
  addPack: (packHandle: string, options?: { open?: boolean }) => void;
  setQuantity: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  removePackInstance: (packInstanceId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState("");

  const flash = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  };

  const addVariant = useCallback(
    (productHandle: string, variantId: string, quantity = 1, options?: { open?: boolean }) => {
    const product = getProduct(productHandle);
    const variant = product?.variants.find((v) => v.id === variantId);
    if (!product || !variant) return;

    setLines((prev) => {
      const existing = prev.find(
        (l) => l.variantId === variantId && !l.packInstanceId,
      );
      if (existing) {
        return prev.map((l) =>
          l.key === existing.key ? { ...l, quantity: l.quantity + quantity } : l,
        );
      }
      const line: CartLine = {
        key: uid("line"),
        variantId,
        productHandle,
        title: product.title,
        variantTitle: variant.title,
        image: product.images[0],
        price: variant.price,
        quantity,
      };
      return [...prev, line];
    });
    if (options?.open !== false) setIsOpen(true);
    flash(`${product.title} ajouté`);
  },
  []);

  const addPack = useCallback((packHandle: string, options?: { open?: boolean }) => {
    const pack = getPack(packHandle);
    if (!pack) return;
    const instanceId = uid("pack");
    const ingredients = packIngredients(pack);

    setLines((prev) => [
      ...prev,
      ...ingredients.map(({ product, variant, quantity }) => ({
        key: uid("line"),
        variantId: variant.id,
        productHandle: product.handle,
        title: product.title,
        variantTitle: variant.title,
        image: product.images[0],
        price: variant.price,
        quantity,
        packHandle: pack.handle,
        packTitle: pack.title,
        packInstanceId: instanceId,
      })),
    ]);
    if (options?.open !== false) setIsOpen(true);
    flash(`${pack.title} : ingrédients ajoutés`);
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0 ? prev.filter((l) => l.key !== key) : prev.map((l) => (l.key === key ? { ...l, quantity } : l)),
    );
  }, []);

  const remove = useCallback((key: string) => {
    setLines((prev) => prev.filter((l) => l.key !== key));
  }, []);

  const removePackInstance = useCallback((packInstanceId: string) => {
    setLines((prev) => prev.filter((l) => l.packInstanceId !== packInstanceId));
  }, []);

  const count = useMemo(() => lines.reduce((n, l) => n + l.quantity, 0), [lines]);
  const subtotal = useMemo<Money>(
    () => ({
      amount: lines.reduce((n, l) => n + l.price.amount * l.quantity, 0),
      currency: "EUR",
    }),
    [lines],
  );

  const value = useMemo(
    () => ({
      lines,
      count,
      subtotal,
      isOpen,
      toast,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addVariant,
      addPack,
      setQuantity,
      remove,
      removePackInstance,
    }),
    [lines, count, subtotal, isOpen, toast, addVariant, addPack, setQuantity, remove, removePackInstance],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
