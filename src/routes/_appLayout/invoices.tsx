import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout/invoices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_appLayout/invoices"!</div>
}
