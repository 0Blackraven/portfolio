"use client";

import { Switch } from "./switch";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import {Sun, Moon} from "lucide-react"

export function ThemeButton() {
  const {setTheme, resolvedTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    setMounted(true)},[]);

  if (!mounted) return null;

  const theme = resolvedTheme === "dark" ? "dark" : "light";
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2 pointer-events-auto">
      <div className="hidden md:block">
        <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
      </div>
      <Button
        onClick={toggleTheme}
        variant="ghost"
        className="md:hidden p-2 rounded-xl bg-background focus:outline-none"
        aria-label="Toggle theme"
        >
        {theme === "dark" ? <Moon className="h-4 w-4 text-white-500"/> : <Sun className="h-4 w-4 text-orange-400"/>}
      </Button>
    </div>
  );
}
