import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartStore = {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);
        if (existingItems) {
          return toast("Item already exists in cart.");
        }

        set((state) => ({ items: [...get().items, data] }));
        toast.success("Item added to cart");
      },
      removeItem: (id: string) => {
        set((state) => ({
          items: [...get().items].filter((item) => item.id !== id),
        })),
          toast.success("Item removed from cart.");
      },
      removeAll: () => set((state) => ({ items: (state.items = []) })),
    }),
    {
      name: "Product-cart-storage",
    }
  )
);
