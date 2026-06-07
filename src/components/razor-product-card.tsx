import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useCatalogStore } from "@/stores/catalog-store";

export interface RazorProduct {
  id: string;
  name: string;
  material: string;
  price: string;
  type: string;
  inStock: boolean;
}

interface RazorProductCardProps {
  product: RazorProduct;
}

export function RazorProductCard({ product }: RazorProductCardProps) {
  const { selectedProductId, toggleSelectedProduct } = useCatalogStore();
  const isSelected = selectedProductId === product.id;

  return (
    <Card className="h-[260px] w-[364px] overflow-hidden rounded-[12px] border border-[#e5e5e5] bg-white text-[#1a1a1a] shadow-none">
      <div className="h-[150px] w-full shrink-0 bg-[#ececeb]" />
      <CardContent className="flex h-[110px] flex-col gap-[6px] overflow-hidden px-[14px] py-[14px]">
        <div className="text-[15px] font-semibold leading-[18.153408050537109px] tracking-[0px] text-[#1a1a1a]">
          {product.name}
        </div>
        <div className="text-[13px] font-normal leading-[15.732954025268555px] tracking-[0px] text-[#6b7280]">
          {product.material}
        </div>
        <div className="flex h-[36px] w-full items-center justify-between pt-[4px]">
          <div className="text-[16px] font-semibold leading-[19.363636016845703px] tracking-[0px] text-[#1a1a1a]">
            {product.price}
          </div>
          <Button
            type="button"
            aria-pressed={isSelected}
            onClick={() => toggleSelectedProduct(product.id)}
            className={cn(
              "h-[32px] rounded-[8px] px-[12px] py-[8px] text-[13px] font-medium leading-[15.732954025268555px] tracking-[0px] shadow-none",
              isSelected
                ? "w-[94px] bg-[#1a1a1a] text-white hover:bg-[#1a1a1a]"
                : "w-[64px] border border-[#e5e5e5] bg-white text-[#1a1a1a] hover:bg-white",
            )}
          >
            {isSelected ? "✓ Selected" : "Select"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
