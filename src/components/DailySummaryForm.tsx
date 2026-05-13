import type { DailySummaryType } from "@/types/dailySummary"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import type { FC } from "react"
import { Controller, type UseFormReturn } from "react-hook-form"
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

interface props {
  form: UseFormReturn<DailySummaryType>
  handleSubmit: (data: DailySummaryType) => void
}

export const DailySummaryForm: FC<props> = ({ form, handleSubmit }) => {
  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle className='capitalize' >
          Resumen diario de paquetes
        </CardTitle>
        <CardDescription>
          Formulario para sacar el reporte diario de paquetes y pudos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldGroup>
            <Controller
              name="totalPackages"
              control={form.control}
              render={({ field: { onChange, value, ...field}, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Total de paquetes en casa
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Total paquetes"
                    autoComplete="off"
                    type="number"
                    onChange={(e) => {                      const value = parseInt(e.target.value, 10);
                      onChange(isNaN(value) ? undefined : value);
                    }}
                    value={value}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="totalPudos"
              control={form.control}
              render={({ field: { onChange, value, ...field}, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Total de pudos
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Total pudos"
                    autoComplete="off"
                    type="number"
                    onChange={(e) => {                      const value = parseInt(e.target.value, 10);
                      onChange(isNaN(value) ? undefined : value);
                    }}
                    value={value}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
