import { Product } from "@/types";
import { create } from "zustand";

type PreviewModalStore = {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
};

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set((state) => ({ data: data, isOpen: true })),
  onClose: () => set((state) => ({ isOpen: false })),
}));
