import { useDailySummary } from "@/hooks/useDailySummary";
import type { DailySummaryType, SummaryDataType } from "@/types/dailySummary";
import { DailySummaryForm } from "./DailySummaryForm";
import { useState } from "react";
import { DailySummaryView } from "./DailySummaryView";

export const DailySummary = () => {
  const { form } = useDailySummary();
  const [summary, setSummary] = useState<SummaryDataType | null>(null);
  const handleSubmit = (data: DailySummaryType) => {
    setSummary({
      day: data.date.getDate(),
      dayOfWeek: data.date.toLocaleDateString('es-ES', { weekday: 'long' }),
      month: data.date.toLocaleDateString('es-ES', { month: 'long' }),
      totalPackages: data.totalPackages,
      totalPudos: data.totalPudos,
      totalIncidents: data.totalIncidents,
      total: data.totalPackages + data.totalPudos + data.totalIncidents,
    });
  };
  return (
    <section className="flex flex-col items-center gap-6 justify-center">
      <DailySummaryForm form={form} handleSubmit={handleSubmit} />
      <DailySummaryView summary={summary} />
    </section>
  );
};
