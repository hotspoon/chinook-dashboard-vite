import { useNavigate } from "@tanstack/react-router"; // Adjust import if using a different router
import Cookies from "js-cookie";
import { Button } from "../ui/button";

export function ErrorPage({
  message,
  stack,
}: {
  message?: string;
  stack?: string;
}) {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate({ to: "/dashboard" });
  };

  const handleLogout = () => {
    Cookies.remove("token");
    // check if cookie is removed then go to login
    if (!Cookies.get("token")) {
      navigate({ to: "/login" });
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-lg">Please try again later.</p>
        {message && (
          <p className="text-sm text-red-500 break-words mb-2">{message}</p>
        )}
        {stack && (
          <pre className="text-xs text-red-400 bg-gray-100 rounded p-2 overflow-x-auto text-left">
            {stack}
          </pre>
        )}
        <div className="mt-6 flex justify-center gap-4">
          <Button onClick={handleDashboard} variant="outline">
            Back to Dashboard
          </Button>
          <Button onClick={handleLogout} variant="destructive">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
