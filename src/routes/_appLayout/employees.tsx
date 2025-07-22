import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout/employees')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_appLayout/employees"!</div>
}
