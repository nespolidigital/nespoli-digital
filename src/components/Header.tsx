import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    window.addEventListener("theme-change", handleThemeChange);
    return () => window.removeEventListener("theme-change", handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const isCurrentlyDark = root.classList.contains("dark");
    if (isCurrentlyDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    window.dispatchEvent(new Event("theme-change"));
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-neutral-100 py-4 shadow-xs"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "hero")}
            className="group flex items-center gap-1.5 focus:outline-hidden"
          >
            <span className="font-sans font-bold text-xl tracking-tight text-neutral-900 transition-colors duration-200">
              Nespoli<span className="text-neutral-500 font-light">Digital</span>
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-950 group-hover:scale-125 transition-transform duration-300" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#apps"
              onClick={(e) => handleNavClick(e, "apps")}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              Apps
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleNavClick(e, "servicos")}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "contato")}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              Contato
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-600 hover:text-neutral-950 rounded-lg hover:bg-neutral-100 transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Alternar tema"
            >
              {isDark ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} />}
            </button>

            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "contato")}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-neutral-900 rounded-md hover:bg-neutral-800 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-neutral-950 focus:outline-hidden"
            >
              Falar Conosco
            </a>
          </nav>

          {/* Mobile Actions Container */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-700 hover:text-neutral-950 rounded-lg transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Alternar tema"
            >
              {isDark ? <Sun size={18} className="text-amber-500" /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 text-neutral-700 hover:text-neutral-950 focus:outline-hidden focus:ring-1 focus:ring-neutral-200 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white border-b border-neutral-100 shadow-lg md:hidden py-6 px-8 flex flex-col gap-5"
          >
            <a
              href="#apps"
              onClick={(e) => handleNavClick(e, "apps")}
              className="text-base font-medium text-neutral-600 hover:text-neutral-950 transition-colors py-1.5 border-b border-neutral-50"
            >
              Apps
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleNavClick(e, "servicos")}
              className="text-base font-medium text-neutral-600 hover:text-neutral-950 transition-colors py-1.5 border-b border-neutral-50"
            >
              Serviços
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "contato")}
              className="text-base font-medium text-neutral-600 hover:text-neutral-950 transition-colors py-1.5 border-b border-neutral-50"
            >
              Contato
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, "contato")}
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-neutral-900 rounded-md hover:bg-neutral-800 transition-colors text-center"
            >
              Falar Conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Header;
