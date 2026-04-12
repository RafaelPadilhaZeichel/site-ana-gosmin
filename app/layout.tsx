import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ana Gosmin | Nutricionista Clínica e Comportamental",
  description: "Redefina seu estilo de vida sem restrições. Emagrecimento saudável e autonomia para as suas escolhas.",
  keywords: ["Nutricionista", "Nutrição Comportamental", "Emagrecimento", "Nutrição Clínica", "Dieta Saudável", "Ana Gosmin"],
  openGraph: {
    title: "Ana Gosmin | Nutricionista",
    description: "Emagrecimento saudável e autonomia para as suas escolhas. Descubra como a nutrição pode ser leve e adaptada à sua rotina real.",
    url: "https://anagosmin.com.br", // Link do site (pode deixar assim por enquanto)
    siteName: "Ana Gosmin Nutricionista",
    images: [
      {
        url: "/images/Foto1.jpeg", // Esta será a foto que vai aparecer no preview do WhatsApp!
        width: 1200,
        height: 630,
        alt: "Ana Gosmin - Nutricionista",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}