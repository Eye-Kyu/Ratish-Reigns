export type Product = {
  name: string
  tagline: string
  size: string
  vessel: string
  price: string
  priceValue: number
  accent: string
}

export const PRODUCTS: Product[] = [
  {
    name: 'RATISH ORIGINAL',
    tagline: 'THE ONE THAT STARTED IT ALL.',
    size: '1 Litre',
    vessel: 'Glass Bottle',
    price: 'KES 450',
    priceValue: 450,
    accent: '#fffdc7',
  },
  {
    name: 'RATISH LITE',
    tagline: 'LIGHT BODY. HEAVY FLAVOUR.',
    size: '500ml',
    vessel: 'Glass Bottle',
    price: 'KES 250',
    priceValue: 250,
    accent: '#a8e6cf',
  },
  {
    name: 'RATISH CLASSIC',
    tagline: 'SMOOTH. RICH. TIMELESS.',
    size: '750ml',
    vessel: 'Glass Bottle',
    price: 'KES 350',
    priceValue: 350,
    accent: '#ffd3a5',
  },
  {
    name: 'RATISH SPICED',
    tagline: 'BOLD SPICE FOR BOLD SOULS.',
    size: '1 Litre',
    vessel: 'Ceramic Jug',
    price: 'KES 600',
    priceValue: 600,
    accent: '#ffb3c6',
  },
  {
    name: 'RATISH GOLD',
    tagline: 'AGED LONGER. TASTES BETTER.',
    size: '1 Litre',
    vessel: 'Premium Glass',
    price: 'KES 850',
    priceValue: 850,
    accent: '#ffd700',
  },
  {
    name: 'RATISH RESERVE',
    tagline: 'FOR THE ONES WHO KNOW.',
    size: '2 Litres',
    vessel: 'Glass Bottle',
    price: 'KES 900',
    priceValue: 900,
    accent: '#c3b1e1',
  },
]
