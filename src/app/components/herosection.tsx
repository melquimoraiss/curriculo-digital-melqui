"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const [titulo, setTitulo] = useState("Olá! Eu sou Melqui");

  const atualizarTitulo = (idioma: string) => {
    const idiomaNormalizado = idioma.toUpperCase();
    if (idiomaNormalizado === "EN") {
      setTitulo("Hello! I am Melqui");
    } else {
      setTitulo("Olá! Eu sou Melqui");
    }
  };

  useEffect(() => {
    const idiomaAtual = localStorage.getItem("idioma") || "PT";
    atualizarTitulo(idiomaAtual);

    const listener = () => {
      const novoIdioma = localStorage.getItem("idioma") || "PT";
      atualizarTitulo(novoIdioma);
    };

    window.addEventListener("storage", listener);
    window.addEventListener("idiomaAtualizado", listener); // nosso custom event

    return () => {
      window.removeEventListener("storage", listener);
      window.removeEventListener("idiomaAtualizado", listener);
    };
  }, []);

  return (
    <section id="hero">
      <div className="flex items-center justify-center min-h-screen px-8 text-white">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          className="flex flex-col max-w-xl text-center md:text-left"
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          variants={container}
        >
          <TiltCard className="mr-20 rounded-2xl shadow-xl">
            <div
              className="flex lg:flex-col gap-6 lg:bg-black/40 lg:backdrop-blur-sm lg:p-3 lg:rounded-md lg:border lg:border-[#8850BF]/10"
              id="quadrado"
            >
              <a
                href="https://github.com/melquimoraiss"
                className="text-white hover:text-[#8850BF] transition-colors transform hover:scale-110 duration-200"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/melqui.moraiss"
                className="text-white hover:text-[#8850BF] transition-colors transform hover:scale-110 duration-200"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8" />
                  <line x1="17.5" x2="17.5" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/seu_usuario"
                className="text-white hover:text-[#8850BF] transition-colors transform hover:scale-110 duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://seusite.com"
                className="text-white hover:text-[#8850BF] transition-colors transform hover:scale-110 duration-200"
                aria-label="Website"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-globe"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20" />
                </svg>
              </a>
            </div>
          </TiltCard>
        </motion.div>

        <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            className="flex flex-col max-w-xl text-center md:text-left"
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            variants={container}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-semibold mb-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {titulo.split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <p
              data-traduzir
              className="font-medium text-2xl md:text-2xl text-purple-300 mb-2"
            >
              {"< Produtor Multimídia e Dev Full Stack />"}
            </p>

            <p data-traduzir className="text-base md:text-lg text-gray-300">
              Aqui você encontra frames, ideias, linhas de código e pixels que
              contam histórias, transformando ideias soltas em projetos visuais,
              funcionais e memoráveis. Role pra ver.
            </p>
          </motion.div>

          <motion.div
            className="pt-10 md: pt-5"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 0.8, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <TiltCard className="rounded-2xl shadow-xl">
              <Image
                className="rounded-2xl shadow-xl"
                src="/imagemheros.jpg"
                alt="Hero image"
                width={400}
                height={500}
                priority
              />
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
