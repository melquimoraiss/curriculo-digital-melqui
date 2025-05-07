"use client";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

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
  return (
    <div className="flex items-center justify-center min-h-screen px-8  text-white">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          variants={container}
          className="flex flex-col max-w-xl text-center md:text-left"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-semibold mb-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {"Olá! Eu sou Melqui".split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <p
            data-traduzir
            className="font-medium text-xl md:text-2xl text-purple-300 mb-2"
          >
            {"< Produtor Multimídia e Dev Full Stack />"}
          </p>
          <p className="text-base md:text-lg text-gray-300">
            Aqui você encontra frames, ideias, linhas de código e pixels que
            contam histórias, transformando ideias soltas em projetos visuais,
            funcionais e memoráveis. Role pra ver.
          </p>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <Image
            className="rounded-2xl shadow-xl"
            src="/imagemheros.jpg"
            alt="Hero image"
            width={400}
            height={500}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
