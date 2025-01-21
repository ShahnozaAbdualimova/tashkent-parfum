export interface Products {
    id: number;
    img: string;
    price: number;
    title: string;
    description: string;
  }
  
  export interface Brands {
    id: number;
    title: string;
    description: string;
    avatar: string;
    products: Products[];
  }