import { RazorCatalogResults } from "@/components/razor-catalog-results";
import { RazorFilterPanel } from "@/components/razor-filter-panel";

export default function App() {
  return (
    <main className="flex min-h-screen items-start justify-center bg-background p-8 text-foreground">
      <section className="flex h-[1046px] w-[1120px] flex-col gap-[24px] rounded-[16px] bg-[#f5f5f4] p-[32px]">
        <header className="flex h-[54px] w-[1056px] flex-col gap-[6px]">
          <h1 className="text-[22px] font-semibold leading-[28px] tracking-[0px] text-[#1a1a1a]">
            Shop Razors
          </h1>
          <p className="text-[14px] font-normal leading-[20px] tracking-[0px] text-[#6b7280]">
            Precision-engineered safety razors. Filter to find your setting.
          </p>
        </header>
        <div className="flex h-[904px] w-[1056px] items-start gap-[32px]">
          <RazorFilterPanel />
          <RazorCatalogResults />
        </div>
      </section>
    </main>
  );
}
