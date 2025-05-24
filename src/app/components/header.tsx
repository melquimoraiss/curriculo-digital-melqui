"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detectar seção ativa no scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: "sobre", label: "SOBRE" },
    { id: "servicos", label: "SERVIÇOS" },
    { id: "trabalhos", label: "TRABALHOS" },
    { id: "contato", label: "CONTATO" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between h-16 px-6 bg-black/30 backdrop-blur-md border-[#5A378C] text-white z-50">
        {/* Logo */}
        <div
          className="flex items-center h-full cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          <img
            src="/logo dino.svg"
            alt="Logo"
            className="h-10 md:h-20 object-contain"
          />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base font-semibold">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                data-traduzir
                onClick={() => handleScroll(id)}
                className={`hover:text-purple-500 transition ${
                  activeSection === id ? "text-purple-500" : ""
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Idioma + menu mobile */}
        <div className="flex items-center gap-4 md:gap-4">
          <LanguageSwitcher />
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17" />
          </svg>
          <button
            className="md:hidden z-50"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Menu lateral mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-sm">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              data-traduzir
              onClick={() => handleScroll(id)}
              className={`text-left hover:text-purple-500 ${
                activeSection === id ? "text-purple-500" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay quando o menu estiver aberto */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
