"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection: React.FC = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const sectionOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 1], [50, 1]);

  return (
    <section id="sobre">
      <motion.div
        ref={sectionRef}
        style={{ opacity: sectionOpacity, y: sectionY }}
        className="pt-10 md:pt-5"
      >
        <section
          className="rounded-2xl about-box text-white about-grid"
          style={{ boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}
        >
          {/* Coluna esquerda */}
          <div className="left-column">
            <div className="box h-100">
              <h1 className="ml-2 font-bold text-2xl" data-traduzir>
                Histórias
              </h1>
              <p className="pb-2 ml-2" data-traduzir>
                Comecei a me interessas por tecnologia por volta dos 10 anos de
                idade, primeiro fui para o Premiere, Photoshop e AfterEffects,
                depois comecei a estudar Illustrator.
              </p>
            </div>

            <div className="bottom-row">
              <div className="box half">
                <div className="box half">
                  <h1 className="text-2xl font-bold" data-traduzir>
                    Tecnologias
                  </h1>
                  <div className="grid mb-1 grid-cols-2 gap-x-4 gap-y-2">
                    <h3>• Premiere</h3>
                    <h3>• AfterEffects</h3>
                    <h3>• Photoshop</h3>
                    <h3>• Illustrator</h3>
                    <h3>• Figma</h3>
                    <h3>• JavaScript</h3>
                    <h3>• NodeJs</h3>
                    <h3>• React</h3>
                    <h3>• TypeScript</h3>
                    <h3>• NextJs</h3>
                  </div>
                </div>
              </div>

              <div className="box half">
                <h3 data-traduzir className="ml-2 font-bold text-2xl">
                  Idiomas
                </h3>
                <p data-traduzir className="ml-2">
                  • Português nativo
                </p>
                <p data-traduzir className="ml-2">
                  • Inglês técnico
                </p>
                <p data-traduzir className="ml-2">
                  • Espanhol técnico
                </p>
              </div>
            </div>
          </div>

          {/* Coluna direita */}
          <div className="right-column">
            <div className="box full-height">
              <h2 data-traduzir>Trajetória</h2>
              <p data-traduzir>
                Aqui você conta a trajetória de forma mais detalhada.
              </p>
            </div>
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default AboutSection;
