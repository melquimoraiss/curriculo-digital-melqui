import { useState } from "react";

export default function TesteTraducao() {
  const [resposta, setResposta] = useState("");

  const testarApi = async () => {
    const resp = await fetch("/api/traduzir", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        texto: "Olá mundo",
        destino: "EN",
      }),
    });

    const dados = await resp.json();
    console.log(dados);
    setResposta(dados.traducao || dados.erro);
  };

  return (
    <div>
      <h1>Teste de Tradução</h1>
      <button onClick={testarApi}>Traduzir Olá mundo</button>
      <p>Resposta: {resposta}</p>
    </div>
  );
}
