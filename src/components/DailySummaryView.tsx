import type { DailySummaryType } from '@/types/dailySummary'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Copy } from 'lucide-react'

interface Props {
  summary: DailySummaryType | null
}

export const DailySummaryView = ({ summary }: Props) => {

  const copySummary = (data: DailySummaryType) => {
    const summaryText = `Resumen Diario - ${data.date.toLocaleDateString()}\nTotal de paquetes: ${data.totalPackages}\nTotal de pudos: ${data.totalPudos}`;
    navigator.clipboard.writeText(summaryText)
      .then(() => {
        alert('Resumen copiado al portapapeles');
      })
      .catch((err) => {
        console.error('Error al copiar el resumen: ', err);
      });
  }
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <div className='flex items-center justify-between' >
        <CardTitle>Resumen {summary?.date.toLocaleDateString()}</CardTitle>
        <Button size="icon" onClick={() => copySummary(summary!)} disabled={!summary}>
          <Copy className="h-4 w-4" />
        </Button>
        </div>
      </CardHeader>
      <CardContent>
      {summary ? (
        <>
          <p>Entregas en casa: {summary.totalPackages}</p>
          <p>Total Pudos: {summary.totalPudos}</p>
          <br />
          <p>Total de paquetes: {summary.totalPackages + summary.totalPudos}</p>
        </>
      ) : (
        <p>No Hay Resumen Disponible</p>
      )}
      </CardContent>
    </Card>
  )
}
