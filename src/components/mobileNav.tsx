"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
    <div className="relative pl-3 text-4xl md:hidden">
      <nav className="my-1 flex items-center justify-between">
        <a href="/">
            <img src="/sur-seguros.png" alt="Logo Fullseguros" width={150} height={50} />
        </a>
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onClick={() => setIsOpen(!isOpen)}
                  className="h-14 px-4 text-xl lg:h-16 lg:px-3 text-white"
                >
                  ☰
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                            activePath === item.href
                              ? "bg-accent text-accent-foreground"
                              : ""
                          }`}
                        >
                          <div className="text-sm font-medium leading-none">
                            {item.label}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </div>
  );
}

