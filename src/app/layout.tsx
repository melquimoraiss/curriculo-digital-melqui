import "./globals.css"; // ESSENCIAL!

export const metadata = {
  title: "Melqui Morais",
  description: "Descrição",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
