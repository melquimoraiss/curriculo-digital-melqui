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
    <section id="sobre" className="pt-10 md:pt-5 max-w-6xl mx-auto px-4">
      <motion.div
        ref={sectionRef}
        style={{ opacity: sectionOpacity, y: sectionY }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-min-screen bg-[#0f0916]/30 backdrop-blur-md"
      >
        {/* Coluna Esquerda - Histórias e Tecnologias/Idiomas */}
        <div className="lg:col-span-2 space-y-6">
          {/* Box Histórias (maior) */}
          <div className="bg-[#190F26] p-6 rounded-lg border border-[#392259]">
            <h1 className="text-2xl font-bold text-white mb-4">Histórias</h1>
            <p className="text-[#c7b8e0]">
              Comecei a me interessar por tecnologia por volta dos 10 anos de
              idade, primeiro fui para o Premiere, Photoshop e AfterEffects,
              depois comecei a estudar Illustrator.
            </p>
          </div>

          {/* Linha de Tecnologias e Idiomas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Tecnologias (mais largo) */}
            <div className="md:col-span-3 bg-[#190F26] p-6 rounded-lg border border-[#392259]">
              <h2 className="text-xl font-bold text-white mb-4">Tecnologias</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-[#8850BF] mb-2">Edição & Design</h3>
                  <ul className="text-white space-y-2">
                    <li>• Premiere</li>
                    <li>• AfterEffects</li>
                    <li>• Photoshop</li>
                    <li>• Illustrator</li>
                    <li>• Figma</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#8850BF] mb-2">Desenvolvimento</h3>
                  <ul className="text-white space-y-2">
                    <li>• JavaScript</li>
                    <li>• Node.js</li>
                    <li>• React</li>
                    <li>• TypeScript</li>
                    <li>• Next.js</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Idiomas (mais estreito) */}
            <div className="md:col-span-1 bg-[#190F26] p-6 rounded-lg border border-[#392259]">
              <h2 className="text-xl font-bold text-white mb-4">Idiomas</h2>
              <ul className="text-white space-y-2">
                <li>Português: Nativo</li>
                <li>Inglês: Técnico</li>
                <li>Espanhol: Técnico</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coluna Direita - Trajetória (altura total) */}
        <div className="bg-[#190F26] p-6 rounded-lg border border-[#392259]">
          <h2 className="text-xl font-bold text-white mb-4">Trajetória</h2>
          <p className="text-[#c7b8e0]">
            Aqui você conta a trajetória de forma mais detalhada.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
