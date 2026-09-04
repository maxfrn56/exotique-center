import type { Pack, Product } from "../types";

export const products: Product[] = [
  {
    id: "prod-arachide",
    handle: "pate-d-arachide",
    title: "Pâte d'arachide",
    subtitle: "Moulinée à la pierre, non sucrée",
    productType: "epicerie",
    collection: "Bases",
    origin: "Bassin arachidier",
    region: "Sénégal",
    description:
      "Une pâte dense, exclusivement composée d'arachides grillées. Sans sucre, sans huile ajoutée. C'est la matière du mafé, et d'une cuisine de sauce longue, veloutée, profonde.",
    usage: "Délayée à feu doux dans le mafé, un ragoût, ou simplement sur du pain grillé.",
    details: ["100 % arachide", "Sans sucre", "Bocal verre", "À conserver au frais après ouverture"],
    images: ["/images/product-arachide.png"],
    variants: [
      { id: "var-arachide-250", title: "250 g", sku: "ARA-250", price: { amount: 6.9, currency: "EUR" }, available: true, options: { Format: "250 g" } },
      { id: "var-arachide-500", title: "500 g", sku: "ARA-500", price: { amount: 11.9, currency: "EUR" }, available: true, options: { Format: "500 g" } },
      { id: "var-arachide-1kg", title: "1 kg", sku: "ARA-1000", price: { amount: 19.9, currency: "EUR" }, available: true, options: { Format: "1 kg" } },
    ],
  },
  {
    id: "prod-riz",
    handle: "riz-brise",
    title: "Riz brisé",
    subtitle: "Grain court, pour sauces et thiéb",
    productType: "epicerie",
    collection: "Céréales",
    origin: "Vallée du fleuve",
    region: "Sénégal",
    description:
      "Un riz brisé, choisi pour sa capacité à porter le gras, le piment et le fond de sauce. C'est le riz du thiéboudienne, du mafé, du yassa — pas un riz de vitrine, un riz de table.",
    usage: "Rincé, puis cuit dans le fond de sauce ou à part, selon la recette.",
    details: ["Riz brisé", "Sachet kraft", "Idéal sauces ouest-africaines"],
    images: ["/images/product-riz.png"],
    variants: [
      { id: "var-riz-1kg", title: "1 kg", sku: "RIZ-1000", price: { amount: 4.5, currency: "EUR" }, available: true, options: { Format: "1 kg" } },
      { id: "var-riz-2kg", title: "2 kg", sku: "RIZ-2000", price: { amount: 8.2, currency: "EUR" }, available: true, options: { Format: "2 kg" } },
    ],
  },
  {
    id: "prod-fonio",
    handle: "fonio",
    title: "Fonio",
    subtitle: "Céréale fine du Sahel",
    productType: "epicerie",
    collection: "Céréales",
    origin: "Plateaux du Fouta",
    region: "Guinée / Mali",
    description:
      "Le fonio est une céréale ancienne, à grain minuscule, au goût de noisette claire. On le cuit comme un couscous, on le dresse sous un yassa, on le sert au petit déjeuner.",
    usage: "Rincé, cuit 1 volume pour 2 volumes d'eau, 5 à 8 minutes.",
    details: ["Sans gluten naturellement", "Grain décortiqué", "Cuisson rapide"],
    images: ["/images/product-fonio.png"],
    variants: [
      { id: "var-fonio-500", title: "500 g", sku: "FON-500", price: { amount: 7.9, currency: "EUR" }, available: true, options: { Format: "500 g" } },
      { id: "var-fonio-1kg", title: "1 kg", sku: "FON-1000", price: { amount: 13.9, currency: "EUR" }, available: true, options: { Format: "1 kg" } },
    ],
  },
  {
    id: "prod-palme",
    handle: "huile-de-palme-rouge",
    title: "Huile de palme rouge",
    subtitle: "Vierge, non désodorisée",
    productType: "epicerie",
    collection: "Huiles",
    origin: "Ceinture forestière",
    region: "Côte d'Ivoire",
    description:
      "Une huile rouge, parfumée, pressée à partir du fruit du palmier. Elle colore le thiéb, arrondit le mafé, et n'a rien à voir avec l'huile industrielle raffinée.",
    usage: "Chauffée doucement en début de sauce. Une cuillère suffit souvent.",
    details: ["Vierge", "Non raffinée", "Riche en caroténoïdes", "Bouteille verre"],
    images: ["/images/product-palme.png"],
    variants: [
      { id: "var-palme-250", title: "250 ml", sku: "PAL-250", price: { amount: 8.5, currency: "EUR" }, available: true, options: { Format: "250 ml" } },
      { id: "var-palme-500", title: "500 ml", sku: "PAL-500", price: { amount: 14.9, currency: "EUR" }, available: true, options: { Format: "500 ml" } },
    ],
  },
  {
    id: "prod-netetou",
    handle: "netetou",
    title: "Nététou",
    subtitle: "Graine de néré fermentée",
    productType: "epicerie",
    collection: "Condiment",
    origin: "Savane soudanienne",
    region: "Mali / Sénégal",
    description:
      "Le nététou — ou soumbala — est un condiment fermenté, iodé, profond. Une pincée transforme un fond de sauce. C'est l'umami de l'Afrique de l'Ouest.",
    usage: "Émietté en toute fin de cuisson, ou dès le départ dans l'huile chaude.",
    details: ["Fermentation traditionnelle", "Très parfumé", "À doser avec parcimonie"],
    images: ["/images/product-netetou.png"],
    variants: [
      { id: "var-netetou-50", title: "50 g", sku: "NET-50", price: { amount: 5.9, currency: "EUR" }, available: true, options: { Format: "50 g" } },
      { id: "var-netetou-100", title: "100 g", sku: "NET-100", price: { amount: 9.9, currency: "EUR" }, available: true, options: { Format: "100 g" } },
    ],
  },
  {
    id: "prod-bissap",
    handle: "bissap",
    title: "Bissap",
    subtitle: "Fleurs d'hibiscus séchées",
    productType: "epicerie",
    collection: "Infusions",
    origin: "Terroirs du Saloum",
    region: "Sénégal",
    description:
      "Des calices d'hibiscus, d'un rouge profond. En infusion sucrée à la menthe, en sirop, ou en rinçage capillaire. Une matière à double vie : table et soin.",
    usage: "Infusion 10 min à couvert. Menthe, gingembre, un filet de citron.",
    details: ["Hibiscus sabdariffa", "Séchage solaire", "Double usage alimentaire et cosmétique"],
    images: ["/images/product-bissap.png"],
    variants: [
      { id: "var-bissap-100", title: "100 g", sku: "BIS-100", price: { amount: 6.5, currency: "EUR" }, available: true, options: { Format: "100 g" } },
      { id: "var-bissap-250", title: "250 g", sku: "BIS-250", price: { amount: 13.9, currency: "EUR" }, available: true, options: { Format: "250 g" } },
    ],
  },
  {
    id: "prod-karite",
    handle: "beurre-de-karite",
    title: "Beurre de karité",
    subtitle: "Pressé à froid, non parfumé",
    productType: "cosmetique",
    collection: "Corps",
    origin: "Ceinture du karité",
    region: "Mali / Burkina Faso",
    description:
      "Un beurre de karité brut, d'odeur de noix et de fumée légère. Il fond à la peau. Rien d'autre : pas de parfum de synthèse, pas de blanchiment.",
    usage: "Une noisette, réchauffée entre les paumes, sur peau encore humide.",
    details: ["Non raffiné", "Coopérative de productrices", "Pot verre", "Peau sèche, cheveux, lèvres"],
    images: ["/images/product-karite.png", "/images/cosmetique-still.png"],
    variants: [
      { id: "var-karite-100-brut", title: "100 g · Brut", sku: "KAR-100-B", price: { amount: 12.9, currency: "EUR" }, available: true, options: { Format: "100 g", Qualité: "Brut" } },
      { id: "var-karite-250-brut", title: "250 g · Brut", sku: "KAR-250-B", price: { amount: 24.9, currency: "EUR" }, available: true, options: { Format: "250 g", Qualité: "Brut" } },
      { id: "var-karite-500-brut", title: "500 g · Brut", sku: "KAR-500-B", price: { amount: 42, currency: "EUR" }, available: true, options: { Format: "500 g", Qualité: "Brut" } },
      { id: "var-karite-100-filtre", title: "100 g · Filtré", sku: "KAR-100-F", price: { amount: 14.9, currency: "EUR" }, available: true, options: { Format: "100 g", Qualité: "Filtré" } },
      { id: "var-karite-250-filtre", title: "250 g · Filtré", sku: "KAR-250-F", price: { amount: 28.9, currency: "EUR" }, available: true, options: { Format: "250 g", Qualité: "Filtré" } },
    ],
  },
  {
    id: "prod-savon",
    handle: "savon-noir",
    title: "Savon noir",
    subtitle: "Cendre de plantain et beurre de karité",
    productType: "cosmetique",
    collection: "Corps",
    origin: "Ateliers d'Afrique de l'Ouest",
    region: "Ghana / Togo",
    description:
      "Un savon de lessive végétale, d'un brun profond. Il lave sans assécher, s'utilise en pain ou dilué en pâte. Un geste de toilette ancien, reformulé pour le quotidien.",
    usage: "Sur peau humide, ou râpé dans un gommage. Rincer abondamment.",
    details: ["Saponification artisanale", "Sans parfum ajouté", "Visage et corps"],
    images: ["/images/product-savon-noir.png"],
    variants: [
      { id: "var-savon-150", title: "150 g", sku: "SAV-150", price: { amount: 7.5, currency: "EUR" }, available: true, options: { Format: "150 g" } },
      { id: "var-savon-300", title: "300 g", sku: "SAV-300", price: { amount: 12.9, currency: "EUR" }, available: true, options: { Format: "300 g" } },
    ],
  },
  {
    id: "prod-baobab",
    handle: "huile-de-baobab",
    title: "Huile de baobab",
    subtitle: "Pressée à froid",
    productType: "cosmetique",
    collection: "Visage",
    origin: "Savane sahélienne",
    region: "Sénégal",
    description:
      "Une huile sèche, légèrement noisettée, extraite de la graine du fruit du baobab. Elle pénètre vite. Visage, pointes, cuticules.",
    usage: "Deux gouttes le soir, seule ou sur le karité encore chaud.",
    details: ["Pressée à froid", "Flacon verre ambré", "Peaux mixtes à sèches"],
    images: ["/images/product-baobab-huile.png"],
    variants: [
      { id: "var-baobab-30", title: "30 ml", sku: "BAO-30", price: { amount: 18, currency: "EUR" }, available: true, options: { Format: "30 ml" } },
      { id: "var-baobab-100", title: "100 ml", sku: "BAO-100", price: { amount: 42, currency: "EUR" }, available: true, options: { Format: "100 ml" } },
    ],
  },
  {
    id: "prod-moringa",
    handle: "huile-de-moringa",
    title: "Huile de moringa",
    subtitle: "Graine pressée, texture sèche",
    productType: "cosmetique",
    collection: "Visage",
    origin: "Cultures de moringa",
    region: "Sénégal",
    description:
      "L'huile de moringa est légère, presque sèche, d'un vert très pâle. Elle convient au visage, y compris aux peaux qui refusent les beurres trop riches.",
    usage: "Seule, le matin, ou en mélange 1:1 avec l'huile de baobab.",
    details: ["Pressée à froid", "Non comédogène", "Flacon verre"],
    images: ["/images/product-moringa.png"],
    variants: [
      { id: "var-moringa-30", title: "30 ml", sku: "MOR-30", price: { amount: 16, currency: "EUR" }, available: true, options: { Format: "30 ml" } },
      { id: "var-moringa-100", title: "100 ml", sku: "MOR-100", price: { amount: 38, currency: "EUR" }, available: true, options: { Format: "100 ml" } },
    ],
  },
  {
    id: "prod-hibiscus-soin",
    handle: "poudre-d-hibiscus",
    title: "Poudre d'hibiscus",
    subtitle: "Rituel capillaire et teint",
    productType: "cosmetique",
    collection: "Cheveux",
    origin: "Terroirs du Saloum",
    region: "Sénégal",
    description:
      "La même fleur que le bissap, broyée pour le soin. En masque, elle resserre, donne du tonus au cuir chevelu, un voile rose au rinçage.",
    usage: "Pâte tiède 15 minutes, rincer. Ne pas laisser sécher sur la peau.",
    details: ["Fleur broyée", "Masque et rinçage", "Usage externe"],
    images: ["/images/product-bissap.png"],
    variants: [
      { id: "var-hib-50", title: "50 g", sku: "HIB-50", price: { amount: 8.9, currency: "EUR" }, available: true, options: { Format: "50 g" } },
      { id: "var-hib-100", title: "100 g", sku: "HIB-100", price: { amount: 15.9, currency: "EUR" }, available: true, options: { Format: "100 g" } },
    ],
  },
];

export const packs: Pack[] = [
  {
    id: "pack-mafe",
    handle: "pack-mafe",
    title: "Pack Mafé",
    subtitle: "Sauce arachide",
    origin: "Sénégal / Mali",
    servings: "4 à 6 personnes",
    story:
      "Le mafé est une sauce d'arachide, lente, que l'on nourrit de tomate, d'oignon, parfois de nététou. Ce pack réunit les matières sèches. La viande, le poisson ou les légumes se choisissent au marché — ou au comptoir de la maison.",
    method: [
      "Faire revenir oignon et concentré de tomate dans l'huile de palme.",
      "Délayer la pâte d'arachide avec de l'eau chaude, verser, laisser épaissir à feu doux.",
      "Ajouter une pincée de nététou. Servir sur le riz brisé.",
    ],
    note: "Le pack compose le garde-manger. Viande, poisson et légumes restent au frais, à choisir selon la saison.",
    image: "/images/pack-mafe.png",
    lines: [
      { productHandle: "pate-d-arachide", variantId: "var-arachide-500", quantity: 1 },
      { productHandle: "riz-brise", variantId: "var-riz-1kg", quantity: 1 },
      { productHandle: "huile-de-palme-rouge", variantId: "var-palme-250", quantity: 1 },
      { productHandle: "netetou", variantId: "var-netetou-50", quantity: 1 },
    ],
  },
  {
    id: "pack-thieb",
    handle: "pack-thieboudienne",
    title: "Pack Thiéboudienne",
    subtitle: "Riz au poisson",
    origin: "Saint-Louis — Dakar",
    servings: "6 personnes",
    story:
      "Le thiéboudienne — ceebu jën — est un riz cuit dans un fond de poisson, de tomate et de légumes. Le pack tient le riz, l'huile rouge, le nététou, et le bissap pour la table. Le poisson du jour, lui, ne voyage pas en bocal.",
    method: [
      "Préparer un fond de tomate à l'huile de palme, piment et nététou.",
      "Y pocher le poisson et les légumes, réserver.",
      "Cuire le riz brisé dans le fond. Dresser le poisson et les légumes au-dessus.",
    ],
    note: "Poisson, chou, carotte, aubergine et piment frais se choisissent en boutique ou au marché.",
    image: "/images/pack-thieb.png",
    lines: [
      { productHandle: "riz-brise", variantId: "var-riz-2kg", quantity: 1 },
      { productHandle: "huile-de-palme-rouge", variantId: "var-palme-250", quantity: 1 },
      { productHandle: "netetou", variantId: "var-netetou-50", quantity: 1 },
      { productHandle: "bissap", variantId: "var-bissap-100", quantity: 1 },
    ],
  },
  {
    id: "pack-yassa",
    handle: "pack-yassa",
    title: "Pack Yassa",
    subtitle: "Oignon, citron, accompaniment",
    origin: "Casamance",
    servings: "4 personnes",
    story:
      "Le yassa est une marinade d'oignons et de citron, longue, presque confite. Le pack pose le riz ou le fonio, et l'huile. Les oignons, les citrons, le poulet — c'est le frais qui fait le plat.",
    method: [
      "Mariner poulet (ou poisson) avec oignon, citron, moutarde.",
      "Griller, puis confire les oignons dans l'huile.",
      "Servir sur riz brisé ou fonio.",
    ],
    note: "Oignons, citrons, moutarde et volaille se prennent au frais. Le pack tient l'accompagnement et l'huile.",
    image: "/images/pack-yassa.png",
    lines: [
      { productHandle: "riz-brise", variantId: "var-riz-1kg", quantity: 1 },
      { productHandle: "fonio", variantId: "var-fonio-500", quantity: 1 },
      { productHandle: "huile-de-palme-rouge", variantId: "var-palme-250", quantity: 1 },
    ],
  },
];

export function getProduct(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getVariant(product: Product, variantId: string) {
  return product.variants.find((v) => v.id === variantId);
}

export function getPack(handle: string): Pack | undefined {
  return packs.find((p) => p.handle === handle);
}

export function productsByType(type: Product["productType"]): Product[] {
  return products.filter((p) => p.productType === type);
}

export function packPrice(pack: Pack): number {
  return pack.lines.reduce((sum, line) => {
    const product = getProduct(line.productHandle);
    const variant = product?.variants.find((v) => v.id === line.variantId);
    return sum + (variant ? variant.price.amount * line.quantity : 0);
  }, 0);
}

export function packIngredients(pack: Pack) {
  return pack.lines.map((line) => {
    const product = getProduct(line.productHandle)!;
    const variant = product.variants.find((v) => v.id === line.variantId)!;
    return { product, variant, quantity: line.quantity };
  });
}
