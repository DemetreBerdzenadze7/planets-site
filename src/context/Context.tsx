import { createContext, useContext, useState } from "react";

type PlanetContextType = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const PlanetContext = createContext<PlanetContextType | null>(null);

export const PlanetProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <PlanetContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </PlanetContext.Provider>
  );
};

export const usePlanet = () => {
  const context = useContext(PlanetContext);
  if (!context) throw new Error("usePlanet must be used within PlanetProvider");
  return context;
};