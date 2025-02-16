"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Render children without theme during SSR
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      storageKey="dashboard-theme"
    >
      {children}
    </ThemeProvider>
  );
}
