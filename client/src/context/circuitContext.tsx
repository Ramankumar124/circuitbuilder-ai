import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context data
interface circuitContextType {
  circuitData: object;
  setCircuitData: (theme: object) => void;
}

// Create the context with a default value (can be null initially)
const circuitContext = createContext<circuitContextType | null>(null);

// Create a provider component
export const CircuitProvider = ({ children }: { children: ReactNode }) => {
  const [circuitData, setCircuitData] = useState({});

  return (
    <circuitContext.Provider value={{ circuitData, setCircuitData }}>
      {children}
    </circuitContext.Provider>
  );
};

// Custom hook for consuming the context
export const useCircuitContext = () => {
  const context = useContext(circuitContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
