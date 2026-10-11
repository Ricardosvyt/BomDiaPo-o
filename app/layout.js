import './globals.css';

export const metadata = {
  title: 'Bom Dia Poção — A cidade acorda sabendo',
  description: 'Notícias, memória, cultura e rádio de Poção, Pernambuco e região.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
