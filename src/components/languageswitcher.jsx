"use client";
import React, { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const [idioma, setIdioma] = useState("PT");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const idiomaSalvo = localStorage.getItem("idioma");
    if (idiomaSalvo && idiomaSalvo !== idioma) {
      setIdioma(idiomaSalvo);
      traduzirSite(idiomaSalvo);
    }
  }, []);

  const mudarIdioma = (novoIdioma) => {
    if (idioma === novoIdioma) return;

    setIdioma(novoIdioma);
    localStorage.setItem("idioma", novoIdioma);

    // 🚨 Notifica os outros componentes
    window.dispatchEvent(new Event("idiomaAtualizado"));

    traduzirSite(novoIdioma);
  };

  const traduzirSite = async (idiomaDestino) => {
    const elementos = document.querySelectorAll("[data-traduzir]");

    for (const el of elementos) {
      if (!el.hasAttribute("data-original")) {
        const textos = Array.from(el.childNodes)
          .filter((node) => node.nodeType === Node.TEXT_NODE)
          .map((node) => node.textContent.trim())
          .join(" ");
        el.setAttribute("data-original", textos);
      }

      const original = el.getAttribute("data-original");

      if (idiomaDestino === "PT") {
        el.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = original;
          }
        });
        continue;
      }

      try {
        setCarregando(true);
        const resposta = await fetch("/api/traduzir", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            texto: original,
            destino: idiomaDestino,
          }),
        });

        const dados = await resposta.json();
        const traduzido = dados.traducao;

        el.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = traduzido;
          }
        });
      } catch (err) {
        console.error("Erro na tradução:", err);
      } finally {
        setCarregando(false);
      }
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => mudarIdioma("PT")}
        className={`text-sm ${
          idioma === "PT" ? "font-bold text-purple-500" : "text-white"
        }`}
      >
        PT
      </button>
      <span className="text-sm text-gray-400">|</span>
      <button
        onClick={() => mudarIdioma("EN")}
        className={`text-sm ${
          idioma === "EN" ? "font-bold text-purple-500" : "text-white"
        }`}
      >
        EN
      </button>
      {carregando && <span className="ml-2 text-sm">Traduzindo...</span>}
    </div>
  );
};

export default LanguageSwitcher;
