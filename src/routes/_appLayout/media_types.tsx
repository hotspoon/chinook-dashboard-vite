import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout/media_types')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_appLayout/media_types"!</div>
}
