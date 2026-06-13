import { useDailySummary } from "@/hooks/useDailySummary";
import { DailySummaryForm } from "./DailySummaryForm";
import { DailySummaryView } from "./DailySummaryView";
import { Loading } from "./Loading";

export const DailySummary = () => {
  const { form, summary, handleSubmit, isLoading } = useDailySummary();

  return (
    <section className="flex flex-col items-center gap-6 justify-center">
      <DailySummaryForm form={form} handleSubmit={handleSubmit} />
      <Loading isLoading={isLoading} className="size-9">
        {summary && <DailySummaryView summary={summary} />}
      </Loading>
    </section>
  );
};
