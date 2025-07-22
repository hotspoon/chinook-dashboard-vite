import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout/tracks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_appLayout/tracks"!</div>
}
