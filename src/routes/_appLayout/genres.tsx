import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout/genres')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_appLayout/genres"!</div>
}
