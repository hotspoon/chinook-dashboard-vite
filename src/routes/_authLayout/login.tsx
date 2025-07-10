import { LoginForm } from "@/components/login-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authLayout/login")({
  component: Login,
  head: () => ({
    meta: [
      {
        title: "Login",
      },
    ],
  }),
});

function Login() {
  return (
    <>
      <LoginForm />
    </>
  );
}
