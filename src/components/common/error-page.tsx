export function ErrorPage({ message }: { message?: string }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-lg">Please try again later.</p>
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    </div>
  );
}
