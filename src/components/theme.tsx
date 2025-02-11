"use client";

import * as React from "react";
import { Sun } from "lucide-react"; // Solo mostramos el ícono del sol, ya que no usaremos más el modo oscuro.

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  // Establecer el tema como 'light' de forma predeterminada
  const [theme] = React.useState<"light">("light");

  React.useEffect(() => {
    // Asegurarnos de que solo se use el tema claro
    const root = document.documentElement;
    root.classList.remove("dark"); // No permitir el modo oscuro.
    localStorage.setItem("theme", "light"); // Guardamos siempre el tema claro en localStorage.
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      // Eliminamos la lógica de cambiar el tema, ya que siempre será "light"
    >
      <Sun className="h-[1.5rem] w-[1.3rem]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
