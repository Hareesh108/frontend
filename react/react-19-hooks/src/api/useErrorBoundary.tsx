import { createContext, ReactNode, useContext, useState } from "react";

interface ErrorBoundaryContextType {
  hasError: boolean;
  setError: (error: boolean) => void;
}

const ErrorBoundaryContext = createContext<ErrorBoundaryContextType | undefined>(undefined);

const useErrorBoundary = () => {
  const context = useContext(ErrorBoundaryContext);
  if (!context) {
    throw new Error("useErrorBoundary must be used within an ErrorBoundaryProvider");
  }
  return context;
};

interface ErrorBoundaryProviderProps {
  children: ReactNode;
}

const ErrorBoundaryProvider = ({ children }: ErrorBoundaryProviderProps) => {
  const [hasError, setHasError] = useState(false);

  const setError = (error: boolean) => {
    setHasError(error);
  };

  return (
    <ErrorBoundaryContext.Provider value={{ hasError, setError }}>
      {children}
    </ErrorBoundaryContext.Provider>
  );
};

export { ErrorBoundaryProvider, useErrorBoundary };

