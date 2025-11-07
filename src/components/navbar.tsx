"use client";

import Image from "next/image";
import { Plus, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detectar si el usuario está cerca del final de la página
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = documentHeight * 0.25; // Cambia cuando queda el 15% de la página por debajo

      setIsScrolled(scrollPosition >= documentHeight - threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar estado inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (isScrolled) {
      // Ir al inicio
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Ir hacia abajo
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const menuOptions = [
    { label: "Inicio", href: "#" },
    { label: "Historia", href: "#historia" },
    { label: "Película", href: "#pelicula" },
    { label: "Manga", href: "#manga" },
    { label: "Reparto", href: "#reparto" },
    { label: "Festivales", href: "#festivales" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed right-0 top-0 h-screen w-16 lg:w-16 bg-[#F5F1E8] border-l-2 border-black/70 z-50 hidden lg:flex flex-col items-center justify-between py-6">
        {/* Grid lines decoration - top */}

        {/* MENU Text with Hamburger Icon */}
        <div className="relative flex flex-col items-center gap-2 mt-4">
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-black/5 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-black" />
          </button>
          <div className="writing-vertical-rl text-black font-bold font-outfit text-xs uppercase tracking-[0.2em] [writing-mode:vertical-rl] [text-orientation:mixed]">
            MENU
          </div>
        </div>

        {/* SCROLL DOWN / IR AL CIELO Text */}
        <button
          onClick={handleScrollClick}
          className="writing-vertical-rl text-black font-bold font-outfit text-[10px] uppercase tracking-[0.15em] mb-4 [writing-mode:vertical-rl] [text-orientation:mixed] hover:text-black/70 transition-colors cursor-pointer"
        >
          {isScrolled ? "GO TO HEAVEN" : "SCROLL DOWN"}
        </button>

        {/* Grid lines decoration - bottom */}
      </nav>

      {/* Modal Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-[60] flex items-center justify-center"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close Button */}
            <motion.button
              onClick={toggleMenu}
              className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div
              className="w-full h-full max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Left Column - Image */}
              <motion.div
                className="hidden lg:flex items-center justify-center h-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-md h-[80vh]">
                  <Image
                    src="/img/manga4.jpg"
                    alt="Menu Image"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Right Column - Menu Options */}
              <motion.div
                className="flex items-center justify-center lg:justify-start h-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                <nav className="flex flex-col gap-6 lg:gap-8">
                  {menuOptions.map((option, index) => (
                    <motion.a
                      key={index}
                      href={option.href}
                      onClick={toggleMenu}
                      className="text-white font-outfit text-4xl lg:text-4xl font-bold hover:text-gray-300 transition-colors uppercase tracking-wider"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 10 }}
                    >
                      {option.label}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
