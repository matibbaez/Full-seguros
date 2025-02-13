"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/About", label: "Nosotros" },
  { href: "/Services", label: "Seguros" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activePath, setActivePath] = React.useState("/");

  React.useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <div className="relative md:hidden">
      <nav className="flex items-center justify-between p-2 bg-transparent text-white">
        <a href="/">
          <img src="/logo-final.png" alt="Logo Fullseguros" width={130} height={40} />
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-10 h-10 flex flex-col items-center justify-center space-y-1 focus:outline-none"
        >
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 45, y: 6 },
              closed: { rotate: 0, y: 0 },
            }}
            className="w-6 h-0.5 bg-white"
          />
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            className="w-6 h-0.5 bg-white"
          />
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: -45, y: -6 },
              closed: { rotate: 0, y: 0 },
            }}
            className="w-6 h-0.5 bg-white"
          />
        </button>
      </nav>

      <div
        className={cn(
          "absolute left-0 w-full bg-black bg-opacity-50 text-white shadow-md transition-transform duration-300",
          isOpen ? "translate-y-0" : "-translate-y-full invisible"
        )}
      >
        <ul className="flex flex-col items-center space-y-2 p-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "text-sm font-medium p-1 rounded-md transition-colors",
                  activePath === item.href ? "text-[#f08100] font-bold" : "hover:text-[#f08100]"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}




