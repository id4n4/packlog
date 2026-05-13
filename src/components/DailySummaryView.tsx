import type { SummaryDataType } from "@/types/dailySummary";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Field } from "./ui/field";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table";

interface Props {
  summary: SummaryDataType | null;
}

export const DailySummaryView = ({ summary }: Props) => {
  const copySummary = (data: SummaryDataType) => {
    const summaryText = `Resumen ${data.day} de ${data.month}\n\nEn casa: ${data.totalPackages}\nPudos: ${data.totalPudos}\nIncidentes: ${data.totalIncidents}\n\nTotal de paquetes: ${data.total}`;
    navigator.clipboard
      .writeText(summaryText)
      .then(() => {
        alert("Resumen copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar el resumen: ", err);
      });
  };
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <Field orientation="horizontal" className="justify-between gap-2">
          <CardTitle>
            {summary
              ? `Resumen del ${summary.day} de ${summary.month} - ${summary.dayOfWeek}`
              : "No hay resumen disponible"}
          </CardTitle>
          <Button
            size="icon"
            onClick={() => copySummary(summary!)}
            disabled={!summary}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </Field>
      </CardHeader>
      <CardContent>
        {summary && (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo de paquetes</TableHead>
                  <TableHead className="text-right">Cuenta</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                  <TableRow>
                    <TableCell >
                      En casa
                    </TableCell>
                    <TableCell className="text-right">
                      {summary.totalPackages}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >
                      Pudos
                    </TableCell>
                    <TableCell className="text-right">
                      {summary.totalPudos}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Incidentes
                    </TableCell>
                    <TableCell className="text-right">
                      {summary.totalIncidents}
                    </TableCell>
                  </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell className="text-right">
                    {summary.total}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </>
        )}
      </CardContent>
    </Card>
  );
};
