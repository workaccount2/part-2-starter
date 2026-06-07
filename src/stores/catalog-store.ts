import { create } from "zustand";

interface CatalogState {
  selectedProductId: string | null;
  searchQuery: string;
  selectedMaterials: string[];
  selectedTypes: string[];
  inStockOnly: boolean;
  sortOption: string;
  setSearchQuery: (searchQuery: string) => void;
  toggleMaterial: (material: string) => void;
  toggleType: (type: string) => void;
  toggleInStockOnly: () => void;
  setSortOption: (sortOption: string) => void;
  clearFilters: () => void;
  toggleSelectedProduct: (productId: string) => void;
}

export const useCatalogStore = create<CatalogState>((set) => ({
  selectedProductId: "rockwell-6s-adjustable",
  searchQuery: "",
  selectedMaterials: ["Chrome", "Gunmetal"],
  selectedTypes: ["Adjustable"],
  inStockOnly: true,
  sortOption: "Featured",
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  toggleMaterial: (material) =>
    set((state) => ({
      selectedMaterials: state.selectedMaterials.includes(material)
        ? state.selectedMaterials.filter((item) => item !== material)
        : [...state.selectedMaterials, material],
    })),
  toggleType: (type) =>
    set((state) => ({
      selectedTypes: state.selectedTypes.includes(type)
        ? state.selectedTypes.filter((item) => item !== type)
        : [...state.selectedTypes, type],
    })),
  toggleInStockOnly: () =>
    set((state) => ({ inStockOnly: !state.inStockOnly })),
  setSortOption: (sortOption) => set({ sortOption }),
  clearFilters: () =>
    set({
      searchQuery: "",
      selectedMaterials: [],
      selectedTypes: [],
      inStockOnly: false,
    }),
  toggleSelectedProduct: (productId) =>
    set((state) => ({
      selectedProductId:
        state.selectedProductId === productId ? null : productId,
    })),
}));
