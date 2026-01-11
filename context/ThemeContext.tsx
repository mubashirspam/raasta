"use client";

import React, { createContext, useContext, ReactNode } from "react";

interface ThemeContextType {
  theme: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={{ theme: "light" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
