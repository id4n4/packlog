import z from 'zod';

export const DailySummarySchema = z.object({
    date: z.date(),
    totalPackages: z.number(),
    totalPudos: z.number(),
    totalIncidents: z.number(),
})

export type DailySummaryType = z.infer<typeof DailySummarySchema>;

export interface SummaryDataType {
    day: number;
    dayOfWeek: string;
    month: string;
    totalPackages: number;
    totalPudos: number;
    totalIncidents: number;
    total: number;
}
