// src/types/types.ts

export interface Product {
    itemId: string;
    qty: number;
    // Agrega más propiedades si es necesario
  }
  
  export interface UserCartResponse {
    products: Product[];
  }
  