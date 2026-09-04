/**
 * Couche d'abstraction prête pour Shopify Storefront API (headless).
 *
 * En production :
 * - products[]  →  query { products { nodes { ... } } }
 * - variants.id →  gid://shopify/ProductVariant/XXXX
 * - addLines()  →  cartLinesAdd(cartId, lines)
 *
 * Packs recettes :
 * Shopify n'a pas de "bundle natif" universel. Ici, un pack est un produit
 * virtuel dont l'ajout déclenche plusieurs cartLinesAdd, chacun annoté
 * d'un attribut `_pack` (cart line attribute) pour regrouper l'affichage.
 *
 * Alternative Shopify : une app bundles / un produit parent + line item properties.
 */

export type ShopifyLineAttribute = { key: string; value: string };

export type ShopifyCartLineInput = {
  merchandiseId: string;
  quantity: number;
  attributes?: ShopifyLineAttribute[];
};

export function toShopifyMerchandiseId(variantId: string): string {
  if (variantId.startsWith("gid://")) return variantId;
  return `gid://shopify/ProductVariant/${variantId.replace("gid://shopify/ProductVariant/", "")}`;
}

export function packAttributes(packHandle: string, packInstanceId: string): ShopifyLineAttribute[] {
  return [
    { key: "_pack", value: packHandle },
    { key: "_pack_instance", value: packInstanceId },
  ];
}
