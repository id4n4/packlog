import z from 'zod';

const DailySummarySchema = z.object({
    date: z.date(),
    totalPackages: z.number(),
    totalPudos: z.number(),
})

export type DailySummaryType = z.infer<typeof DailySummarySchema>;

