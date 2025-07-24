// give me footer comoponent in React with TypeScript
export function Footer() {
  return (
    <>
      <footer className="bg-gray-200 text-gray-800 py-4 px-6 flex flex-col items-center justify-center">
        <p>
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> |
          <a href="/terms-of-service"> Terms of Service</a>
        </p>
      </footer>
    </>
  );
}
