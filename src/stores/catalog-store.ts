import { create } from "zustand";

interface CatalogState {
  selectedProductId: string | null;
  toggleSelectedProduct: (productId: string) => void;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  selectedProductId: "rockwell-6s-adjustable",
  toggleSelectedProduct: (productId) =>
    set((state) => ({
      selectedProductId:
        state.selectedProductId === productId ? null : productId,
    })),
}));
