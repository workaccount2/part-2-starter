import { cn } from "@/lib/utils";
import { useCatalogStore } from "@/stores/catalog-store";

const materials = ["Chrome", "Gunmetal", "White Chrome", "Rose Gold"];
const types = ["Adjustable", "Fixed"];

interface FilterOptionProps {
  label: string;
  selected: boolean;
  onToggle: () => void;
}

function FilterOption({ label, selected, onToggle }: FilterOptionProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className="flex h-[18px] w-full items-center gap-[10px] text-left"
    >
      <span
        className={cn(
          "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] border-[1.5px]",
          selected
            ? "border-[#1a1a1a] bg-[#1a1a1a]"
            : "border-[#e5e5e5] bg-white",
        )}
      >
        {selected ? (
          <span className="text-[11px] font-semibold leading-[13.3125px] tracking-[0px] text-white">
            ✓
          </span>
        ) : null}
      </span>
      <span className="text-[14px] font-normal leading-[16.943181991577148px] tracking-[0px] text-[#1a1a1a]">
        {label}
      </span>
    </button>
  );
}

interface FilterGroupProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  onToggle: (option: string) => void;
}

function FilterGroup({
  label,
  options,
  selectedOptions,
  onToggle,
}: FilterGroupProps) {
  return (
    <section className="flex w-full flex-col gap-[12px]">
      <div className="text-[12px] font-semibold uppercase leading-[14.522727012634277px] tracking-[0.72px] text-[#6b7280]">
        {label}
      </div>
      <div className="flex w-full flex-col gap-[12px]">
        {options.map((option) => (
          <FilterOption
            key={option}
            label={option}
            selected={selectedOptions.includes(option)}
            onToggle={() => onToggle(option)}
          />
        ))}
      </div>
    </section>
  );
}

export function RazorFilterPanel() {
  const {
    searchQuery,
    selectedMaterials,
    selectedTypes,
    inStockOnly,
    setSearchQuery,
    toggleMaterial,
    toggleType,
    toggleInStockOnly,
    clearFilters,
  } = useCatalogStore();

  return (
    <aside className="flex h-[424px] w-[280px] flex-col gap-[24px] rounded-[12px] border border-[#e5e5e5] bg-white p-[20px] shadow-none">
      <div className="flex h-[19px] w-full items-center justify-between">
        <h2 className="text-[16px] font-semibold leading-[19.363636016845703px] tracking-[0px] text-[#1a1a1a]">
          Filters
        </h2>
        <button
          type="button"
          onClick={clearFilters}
          className="text-[13px] font-medium leading-[15.732954025268555px] tracking-[0px] text-[#6b7280]"
        >
          Clear all
        </button>
      </div>

      <label className="flex h-[37px] w-full items-center rounded-[8px] border border-[#e5e5e5] bg-[#f9f9f8] px-[12px] py-[10px]">
        <span className="sr-only">Search razors</span>
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search razors"
          className="h-[17px] w-full bg-transparent p-0 text-[14px] font-normal leading-[16.943181991577148px] tracking-[0px] text-[#1a1a1a] outline-none placeholder:text-[#6b7280]"
        />
      </label>

      <FilterGroup
        label="Material"
        options={materials}
        selectedOptions={selectedMaterials}
        onToggle={toggleMaterial}
      />

      <FilterGroup
        label="Type"
        options={types}
        selectedOptions={selectedTypes}
        onToggle={toggleType}
      />

      <button
        type="button"
        aria-pressed={inStockOnly}
        onClick={toggleInStockOnly}
        className="flex h-[22px] w-full items-center justify-between text-left"
      >
        <span className="text-[14px] font-normal leading-[16.943181991577148px] tracking-[0px] text-[#1a1a1a]">
          In stock only
        </span>
        <span
          className={cn(
            "flex h-[22px] w-[38px] shrink-0 items-center rounded-[999px] p-[2px]",
            inStockOnly ? "justify-end bg-[#1a1a1a]" : "justify-start bg-[#e5e5e5]",
          )}
        >
          <span className="h-[16px] w-[16px] rounded-full bg-white" />
        </span>
      </button>
    </aside>
  );
}
