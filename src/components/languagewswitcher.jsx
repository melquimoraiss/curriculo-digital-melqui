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

  const alternarPara = (idiomaEscolhido) => {
    if (idioma === idiomaEscolhido) return; // Evita repetir a tradução
    setIdioma(idiomaEscolhido);
    localStorage.setItem("idioma", idiomaEscolhido);
    traduzirSite(idiomaEscolhido);
  };

  const traduzirSite = async (idiomaDestino) => {
    setCarregando(true);
    const elementos = document.querySelectorAll("[data-traduzir]");
    const textos = Array.from(elementos).map((el) => el.innerText);

    try {
      const resposta = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "pt",
          target: "en",
          format: "text",
        }),
      });

      const dados = await resposta.json();
      const traduzidos = dados.traducao.split(" ||| ");

      elementos.forEach((el, i) => {
        el.innerText = traduzidos[i];
      });
    } catch (err) {
      console.error("Erro na tradução:", err);
    }

    setCarregando(false);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => alternarPara("PT")}
        className={`text-sm ${
          idioma === "PT" ? "font-bold text-purple-500" : "text-white"
        }`}
      >
        PT
      </button>
      <span className="text-sm text-gray-400">|</span>
      <button
        onClick={() => alternarPara("EN")}
        className={`text-sm ${
          idioma === "EN" ? "font-bold text-purple-500" : "text-white"
        }`}
      >
        EN
      </button>
      {carregando && (
        <span className="ml-2 text-xs text-yellow-400">Traduzindo...</span>
      )}
    </div>
  );
};

export default LanguageSwitcher;
