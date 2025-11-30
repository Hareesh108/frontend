import { ReactNode, useEffect } from "react";
import { useErrorBoundary } from "./api/useErrorBoundary";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

const ErrorBoundary = ({ children, fallback }: ErrorBoundaryProps) => {
  const { hasError, setError } = useErrorBoundary();

  useEffect(() => {
    const handleError = (event: Event) => {
      setError(true);
      console.error("Uncaught error:", event);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleError);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleError);
    };
  }, [setError]);

  if (hasError) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
