// pages/api/traduzir.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Método não permitido");
  }

  const { texto, destino } = req.body;

  if (!texto || !destino) {
    return res
      .status(400)
      .json({ erro: "Texto e idioma de destino obrigatórios" });
  }

  try {
    const resposta = await axios.post(
      "https://api-free.deepl.com/v2/translate",
      null,
      {
        params: {
          auth_key: process.env.DEEPL_API_KEY,
          text: texto,
          target_lang: destino,
        },
      }
    );

    const traducao = resposta.data.translations
      .map((t) => t.text)
      .join(" ||| ");
    res.status(200).json({ traducao });
  } catch (err) {
    console.error("Erro na tradução:", err.response?.data || err.message);
    res.status(500).json({ erro: "Erro ao traduzir texto." });
  }
}
