import {
  RazorProduct,
  RazorProductCard,
} from "@/components/razor-product-card";
import { useCatalogStore } from "@/stores/catalog-store";

const products: RazorProduct[] = [
  {
    id: "rockwell-6s-adjustable",
    name: "Rockwell 6S Adjustable",
    material: "Stainless Steel",
    price: "$120",
    type: "Adjustable",
    inStock: true,
  },
  {
    id: "rockwell-6c",
    name: "Rockwell 6C",
    material: "Chrome",
    price: "$80",
    type: "Adjustable",
    inStock: true,
  },
  {
    id: "rockwell-t2",
    name: "Rockwell T2",
    material: "Gunmetal",
    price: "$50",
    type: "Adjustable",
    inStock: true,
  },
  {
    id: "rockwell-r1",
    name: "Rockwell R1",
    material: "White Chrome",
    price: "$40",
    type: "Fixed",
    inStock: false,
  },
  {
    id: "rockwell-model-t",
    name: "Rockwell Model T",
    material: "Matte Black",
    price: "$150",
    type: "Adjustable",
    inStock: true,
  },
  {
    id: "rockwell-2c",
    name: "Rockwell 2C",
    material: "Chrome",
    price: "$30",
    type: "Fixed",
    inStock: true,
  },
];

interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

function FilterChip({ label, onRemove }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="flex h-[28px] items-center gap-[6px] rounded-[999px] bg-[#efefee] px-[10px] py-[6px]"
    >
      <span className="text-[13px] font-medium leading-[15.732954025268555px] tracking-[0px] text-[#1a1a1a]">
        {label}
      </span>
      <span className="text-[11px] font-normal leading-[13.3125px] tracking-[0px] text-[#6b7280]">
        ✕
      </span>
    </button>
  );
}

function SortFeature() {
  const { sortOption } = useCatalogStore();

  return (
    <button
      type="button"
      className="flex h-[32px] w-[126px] items-center gap-[8px] rounded-[8px] border border-[#e5e5e5] bg-white px-[12px] py-[8px]"
    >
      <span className="text-[13px] font-medium leading-[15.732954025268555px] tracking-[0px] text-[#1a1a1a]">
        Sort: {sortOption}
      </span>
      <span className="text-[12px] font-normal leading-[14.522727012634277px] tracking-[0px] text-[#6b7280]">
        ▾
      </span>
    </button>
  );
}

export function RazorCatalogResults() {
  const {
    selectedMaterials,
    selectedTypes,
    inStockOnly,
    toggleMaterial,
    toggleType,
    toggleInStockOnly,
  } = useCatalogStore();

  const activeFilters = [
    ...selectedMaterials.map((material) => ({
      label: material,
      onRemove: () => toggleMaterial(material),
    })),
    ...selectedTypes.map((type) => ({
      label: type,
      onRemove: () => toggleType(type),
    })),
    ...(inStockOnly
      ? [{ label: "In stock", onRemove: () => toggleInStockOnly() }]
      : []),
  ];

  return (
    <section className="flex h-[904px] w-[744px] flex-col gap-[16px]">
      <div className="flex h-[32px] w-full items-center justify-between">
        <div className="text-[15px] font-semibold leading-[18.153408050537109px] tracking-[0px] text-[#1a1a1a]">
          12 razors
        </div>
        <SortFeature />
      </div>

      <div className="flex h-[28px] w-full items-center gap-[8px]">
        {activeFilters.map((filter) => (
          <FilterChip
            key={filter.label}
            label={filter.label}
            onRemove={filter.onRemove}
          />
        ))}
      </div>

      <div className="flex h-[812px] w-full flex-col gap-[16px]">
        {[0, 2, 4].map((startIndex) => (
          <div
            key={startIndex}
            className="flex h-[260px] w-full items-start gap-[16px]"
          >
            {products.slice(startIndex, startIndex + 2).map((product) => (
              <RazorProductCard key={product.id} product={product} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
