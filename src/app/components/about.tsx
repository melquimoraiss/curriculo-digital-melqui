"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection: React.FC = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"], // foco no centro da tela
  });

  // Animações gerais da seção
  const sectionOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  // Valores desordenados para os boxes
  const boxes = [
    { id: "historia", initialScale: 0.6, initialY: 80 },
    { id: "tecnologias", initialScale: 0.4, initialY: 120 },
    { id: "idiomas", initialScale: 0.5, initialY: 100 },
    { id: "trajetoria", initialScale: 0.7, initialY: 90 },
  ];

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity: sectionOpacity, y: sectionY }}
      className="pt-10 md:pt-5"
    >
      <section
        className="rounded-2xl text-white about-grid"
        style={{
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        }}
      >
        {/* Coluna esquerda */}
        <div className="left-column">
          <motion.div
            className="h-100 box"
            style={{
              scale: useTransform(
                scrollYProgress,
                [0, 1],
                [boxes[0].initialScale, 1]
              ),
              y: useTransform(scrollYProgress, [0, 1], [boxes[0].initialY, 0]),
              opacity: useTransform(scrollYProgress, [0.2, 1], [0, 1]),
            }}
          >
            <h2>História</h2>
            <p>Aqui vai a história do projeto ou da pessoa.</p>
          </motion.div>

          <div className="bottom-row">
            <motion.div
              className="box half"
              style={{
                scale: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [boxes[1].initialScale, 1]
                ),
                y: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [boxes[1].initialY, 0]
                ),
                opacity: useTransform(scrollYProgress, [0.2, 1], [0, 1]),
              }}
            >
              <h3>Tecnologias</h3>
              <p>React, TypeScript, etc.</p>
            </motion.div>

            <motion.div
              className="box half"
              style={{
                scale: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [boxes[2].initialScale, 1]
                ),
                y: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [boxes[2].initialY, 0]
                ),
                opacity: useTransform(scrollYProgress, [0.2, 1], [0, 1]),
              }}
            >
              <h3>Idiomas</h3>
              <p>Português, Inglês...</p>
            </motion.div>
          </div>
        </div>

        {/* Coluna direita */}
        <motion.div
          className="right-column"
          style={{
            scale: useTransform(
              scrollYProgress,
              [0, 1],
              [boxes[3].initialScale, 1]
            ),
            y: useTransform(scrollYProgress, [0, 1], [boxes[3].initialY, 0]),
            opacity: useTransform(scrollYProgress, [0.2, 1], [0, 1]),
          }}
        >
          <div className="box full-height">
            <h2>Trajetória</h2>
            <p>Aqui você conta a trajetória de forma mais detalhada.</p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
