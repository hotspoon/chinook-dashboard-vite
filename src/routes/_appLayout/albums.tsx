import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout/albums')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_appLayout/albums"!</div>
}
