export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    favs: string[];
  };

  export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  };
  
  export type CartItem = {
    product: Product;
    quantity: number;
  };
  
  export type Country = {
    name: string;
    code: string;
  };
  