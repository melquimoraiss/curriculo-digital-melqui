import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        width: "90%",
        maxWidth: "600px",
        margin: "40px auto 20px",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
          width: "100%",
        }}
      >
        <a
          href="mailto:melquimoraiss@gmail.com"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "clamp(12px, 2vw, 16px)",
          }}
        >
          Email
        </a>
        <a
          href="https://github.com/melquimoraiss"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            fontSize: "clamp(12px, 2vw, 16px)",
            color: "#fff",
          }}
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/melqui.moraiss"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "clamp(12px, 2vw, 16px)",
          }}
        >
          Instagram
        </a>
      </div>

      <p
        style={{
          fontSize: "clamp(10px, 1.5vw, 14px)",
          color: "#aaa",
          marginTop: "15px",
        }}
      >
        © 2025 [Melqui Morais]. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
