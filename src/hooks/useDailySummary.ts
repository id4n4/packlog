import { useForm } from "react-hook-form";
import { DailySummarySchema, type DailySummaryType } from "../types/dailySummary";
import { zodResolver } from "@hookform/resolvers/zod";


export const useDailySummary = () => {
  const form = useForm<DailySummaryType>({
    resolver: zodResolver(DailySummarySchema)
  }
  );

  return ({
    form
  })
}
