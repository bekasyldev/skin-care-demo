export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    
    {
      name: "Shop",
      hash: "#shop",
    },
    {
      name: "Product",
      hash: "#product",
    },
    {
      name: "Contact Us",
      hash: "#contact",
    },
  ] as const;

export const discounts = [
  {
    title: "30% off storewide — Limited time!",
    link: "Shop now"
  }
] as const

export const features = [
  {
    description: "Shark - Men's cabretta white golf glove",
    stars: 5,
    price:  19.00,
    imageUrl: "/gloves.png"
  },
  {
    description: "Greg Norman - Men's Shark Logo Golf Polo Shirt",
    stars: 5,
    price:  24.99,
    imageUrl: "/polo.png"
  }
]