"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Header Component
// Componente Header
const Header = () => {
  // State to control whether the side menu is open or closed
  // Estado para controlar se o menu lateral está aberto ou fechado
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main navigation bar */}
      {/* Barra de navegação principal */}
      <nav className="flex items-center justify-between h-16 px-6 bg-gray-950 text-white relative z-50">
        {/* LOGO */}
        <div className="flex items-center h-full">
          {/* Logo image */}
          {/* Imagem do logo */}
          <img
            src="/logo dino.svg"
            alt="Logo"
            className="h-20 md:h-40 object-contain"
          />
        </div>

        {/* Desktop navigation menu (visible only on medium screens or larger) */}
        {/* Menu de navegação para desktop (visível apenas em telas médias ou maiores) */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base lg:text-sm font-semibold">
          <li>
            <a href="#sobre" className="hover:text-purple-500">
              SOBRE
            </a>
          </li>
          <li>
            <a href="#servicos" className="hover:text-purple-500">
              SERVIÇOS
            </a>
          </li>
          <li>
            <a href="#trabalhos" className="hover:text-purple-500">
              TRABALHOS
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-purple-500">
              CONTATO
            </a>
          </li>
        </ul>

        {/* Language section and hamburger menu icon (visible on mobile) */}
        {/* Seção de idioma e ícone do menu hambúrguer (visível em mobile) */}
        <div className=" hover:text-purple-500 flex items-center gap-4 md:gap-4">
          {/* Language toggle (visual only, no functionality) */}
          {/* Alternador de idioma (apenas visual, sem funcionalidade) */}
          <span className="text-sm">EN | PT</span>
          {/* Globe icon (SVG) */}
          {/* Ícone de globo (SVG) */}
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
          {/* Hamburger menu button (appears only on screens smaller than md) */}
          {/* Botão do menu hambúrguer (aparece apenas em telas menores que md) */}
          <button
            className="gap-4 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Side menu (offcanvas), appears when menuOpen is true */}
      {/* Menu lateral (offcanvas), aparece quando menuOpen é true */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Side menu header with close button */}
        {/* Cabeçalho do menu lateral com botão de fechar */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        {/* Side menu links */}
        {/* Links do menu lateral */}
        <nav className="flex flex-col gap-4 p-4 text-sm">
          <a href="#sobre" className="hover:text-purple-500">
            SOBRE
          </a>
          <a href="#servicos" className="hover:text-purple-500">
            SERVIÇOS
          </a>
          <a href="#trabalhos" className="hover:text-purple-500">
            TRABALHOS
          </a>
          <a href="#contato" className="hover:text-purple-500">
            CONTATO
          </a>
        </nav>
      </div>

      {/* Overlay to close the menu when clicking outside */}
      {/* Overlay para fechar o menu ao clicar fora dele */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

// Export the Header component for use in other parts of the project
// Exporta o componente Header para ser usado em outros lugares do projeto
export default Header;
