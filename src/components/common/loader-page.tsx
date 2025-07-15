import { Spinner } from "../ui/spinner";

export function LoaderPage() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Spinner className="h-8 w-8" />
      </div>
    </>
  );
}
