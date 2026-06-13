import { useForm } from "react-hook-form";
import { DailySummarySchema, type DailySummaryType, type SummaryDataType } from "../types/dailySummary.d";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";


export const useDailySummary = () => {
  const form = useForm<DailySummaryType>({
    resolver: zodResolver(DailySummarySchema),
    defaultValues: {
      date: new Date(),
      totalPackages: 0,
      totalPudos: 0,
      totalIncidents: 0,
    }
  }
  );

  const [summary, setSummary] = useState<SummaryDataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (data: DailySummaryType) => {
    setIsLoading(true);
    setTimeout(() => {
      setSummary({
        day: data.date.getDate(),
        dayOfWeek: data.date.toLocaleDateString('es-ES', { weekday: 'long' }),
        month: data.date.toLocaleDateString('es-ES', { month: 'long' }),
        totalPackages: data.totalPackages,
        totalPudos: data.totalPudos,
        totalIncidents: data.totalIncidents,
        total: data.totalPackages + data.totalPudos + data.totalIncidents,
      });
      setIsLoading(false);
    }, 500);
  };

  return ({
    form,
    summary,
    handleSubmit,
    isLoading 
  })
}
