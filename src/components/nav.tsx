"use client";

import * as React from "react";
import { ThemeToggle } from "@/components/theme";
import { MobileNav } from "./mobileNav";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  testId: string;
  isButton?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isActive,
  testId,
  isButton = false,
}) => (
  <li>
    <a
      data-testid={testId}
      className={`relative rounded-[25px] text-[8px] text-white md:text-[12px] lg:text-[14px] xl:text-[14px] overflow-hidden transition-all duration-400 ${
        isActive ? "text-blue-400" : ""
      } ${
        isButton
          ? "bg-[#f08100] px-3 py-1.5 border-none group"
          : ""
      }`}
      href={href}
    >
      <span className="relative rounded-[25px] z-10 transition-all duration-1000 group-hover:text-[#f08100]">
        {children}
      </span>
      {isButton && (
        <span className="absolute rounded-[25px] inset-0 w-0 bg-white transition-all duration-900 ease-in-out group-hover:w-full"></span>
      )}
    </a>
  </li>
);

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/About", label: "Nosotros" },
  { href: "/Services", label: "Seguros" },
  { href: "#", label: "Contacto", isButton: true }, // Contacto con fondo rojo y bordes redondeados
];

export default function Nav() {
  const [activePath, setActivePath] = React.useState<string>("");
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    setActivePath(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-black/30 backdrop-blur-sm shadow-xl" : "bg-transparent"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="mx-10 hidden py-1 md:block">
        <nav className="flex items-center justify-between">
          <a href="/">
            <img src="/sur-logo.png" alt="Logo Fullseguros" width={250} height={50} />
          </a>
          <ul className="flex items-center gap-8 pl-20 ml-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isActive={activePath === item.href}
                testId={`nav-link-${item.label}`}
                isButton={item.isButton}
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
}

