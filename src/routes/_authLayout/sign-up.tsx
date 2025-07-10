import { SignUpForm } from "@/components/sign-up-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authLayout/sign-up")({
  component: SignUp,
  head: () => ({
    meta: [
      {
        title: "Sign Up",
      },
    ],
  }),
});

function SignUp() {
  return <SignUpForm />;
}
