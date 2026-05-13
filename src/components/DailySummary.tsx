import { useDailySummary } from "@/hooks/useDailySummary";
import type { DailySummaryType } from "@/types/dailySummary";
import { DailySummaryForm } from "./DailySummaryForm";
import { useState } from "react";
import { DailySummaryView } from "./DailySummaryView";

export const DailySummary = () => {
  const { form } = useDailySummary();
  const [summary, setSummary] = useState<DailySummaryType | null>(null);
  const handleSubmit = (data: DailySummaryType) => {
    setSummary(data);
  };
  return (
    <section className="space-y-4">
      <DailySummaryForm form={form} handleSubmit={handleSubmit} />
      <DailySummaryView summary={summary} />
    </section>
  );
};
