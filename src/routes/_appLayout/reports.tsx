import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout/reports')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_appLayout/reports"!</div>
}
