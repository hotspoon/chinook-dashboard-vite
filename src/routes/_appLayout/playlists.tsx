import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_appLayout/playlists')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_appLayout/playlists"!</div>
}
