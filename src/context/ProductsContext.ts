import { create } from 'zustand';
import axios from "axios";

export type Product = {
  id: string;
  image: string;
  text: string;
  title: string;
};

type ProductsStore = {
  products: Product[];
  getProductData: () => Promise<void>;
  upDateProduct: (data: Product[]) => void;
};

const useProductsStore = create<ProductsStore>((set) => ({
  products: [],

  async getProductData() {
    try {
      const response = await axios.get(
        'https://65b7cc9846324d531d558a48.mockapi.io/loangoserver'
      );

      // 🔥 NORMALISATION DES DONNÉES
      const formatted = response.data.map((item: any) => ({
        id: item.id,
        image: item.image,
        text: item.text,
        title: item.title,
      }));

      set({ products: formatted });
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  },

  upDateProduct(data) {
    set({ products: data });
  },
}));

export default useProductsStore;