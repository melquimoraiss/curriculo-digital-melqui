import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <div style={{ marginTop: "20px" }}>
        <a
          href="mailto:melquimoraiss@gmail.com"
          style={{ color: "#fff", textDecoration: "none", margin: "0 15px" }}
        >
          Email
        </a>
        {/* <a
          href="https://www.linkedin.com/in/seuperfil"
          target="_blank"
          style={{ color: "#fff", textDecoration: "none", margin: "0 15px" }}
        >
          LinkedIn
        </a> */}
        <a
          href="https://github.com/melquimoraiss"
          target="_blank"
          style={{ color: "#fff", textDecoration: "none", margin: "0 15px" }}
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/melqui.moraiss"
          target="_blank"
          style={{ color: "#fff", textDecoration: "none", margin: "0 15px" }}
        >
          Instagram
        </a>
      </div>
      <div style={{ marginTop: "20px", fontSize: "12px", color: "#aaa" }}>
        <p>&copy; 2025 [Melqui Morais]. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
