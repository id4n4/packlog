import { useForm } from "react-hook-form";
import { DailySummarySchema, type DailySummaryType } from "../types/dailySummary.d";
import { zodResolver } from "@hookform/resolvers/zod";


export const useDailySummary = () => {
  const form = useForm<DailySummaryType>({
    resolver: zodResolver(DailySummarySchema),
    defaultValues: {
      date: new Date(),
      totalPackages: 0,
      totalPudos: 0,
    }
  }
  );

  return ({
    form
  })
}
