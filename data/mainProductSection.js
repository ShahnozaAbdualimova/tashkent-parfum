

export const products = [
  {
    image: ['/images/card.png'],
    name: 'Miraculum духи..',
    brand: 'Louis Vuitton',
    oldPrice: 0,
    price: '120 000',
    discountTag: true,
    rating: 5,
  },
  {
    image: ['/images/card.png'],
    name: 'Chanel духи...',
    brand: 'Chanel',
    oldPrice: '150 000',
    price: '130 000',
    discountTag: true,
    rating: 3,
  },
  {
    image: ['/images/card.png'],
    name: 'Dior духи...',
    brand: 'Dior',
    oldPrice: '200 000',
    price: '180 000',
    discountTag: false,
    rating: 4,
  },
  {
    image: ['/images/card.png'],
    name: 'Dior духи...',
    brand: 'Dior',
    oldPrice: '200 000',
    price: '180 000',
    discountTag: false,
    rating: 4,
  },
  {
    image: ['/images/card.png'],
    name: 'Dior духи...',
    brand: 'Dior',
    oldPrice: '200 000',
    price: '180 000',
    discountTag: false,
    rating: 4,
  },
  {
    image: ['/images/card.png'],
    name: 'Dior духи...',
    brand: 'Dior',
    oldPrice: '200 000',
    price: '180 000',
    discountTag: false,
    rating: 4,
  },
  {
    image: ['/images/card.png'],
    name: 'Dior духи...',
    brand: 'Dior',
    oldPrice: '200 000',
    price: '180 000',
    discountTag: true,
    rating: 4,
  },
  {
    image: ['/images/card.png'],
    name: 'Dior духи...',
    brand: 'Dior',
    oldPrice: '200 000',
    price: '180 000',
    discountTag: false,
    rating: 4,
  },
];
// brands
export const brands = [
  { 
    logo: '/svg/logoBrand.svg',
    imgId: 1,
    image: [
      '/images/brandcard.png',
      '/images/brandcard2.png',
      '/images/brandcard3.png'
    ].map((src, index) => ({ id: index + 1, src })), // added id for image
    name: 'Dior',
    description: 'Аромат который запомнят',
    price: [
      '3 560 000',
      '1 202 000',
      '760 500'
    ].map((value, index) => ({ id: index + 1, value })) // added id for price
  }
];


