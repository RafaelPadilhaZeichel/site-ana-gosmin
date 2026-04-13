import type { Metadata, Viewport } from "next";
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

// Configuração de Viewport separada para otimização de renderização
export const viewport: Viewport = {
  themeColor: "#1e3932",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ana Gosmin | Nutricionista Clínica e Comportamental",
  description: "Redefina seu estilo de vida sem restrições. Emagrecimento saudável e autonomia para as suas escolhas.",
  keywords: ["Nutricionista", "Nutrição Comportamental", "Emagrecimento", "Nutrição Clínica", "Dieta Saudável", "Ana Gosmin"],
  
  // CONFIGURAÇÃO DO ÍCONE DA ABA (FAVICON)
  icons: {
    icon: "/logo/Marca.jpeg",
    shortcut: "/logo/Marca.jpeg",
    apple: "/logo/Marca.jpeg",
  },

  openGraph: {
    title: "Ana Gosmin | Nutricionista",
    description: "Emagrecimento saudável e autonomia para as suas escolhas.",
    url: "https://site-ana-gosmin.vercel.app",
    siteName: "Ana Gosmin Nutricionista",
    images: [
      {
        url: "/images/Foto1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ana Gosmin - Nutricionista",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ana Gosmin | Nutricionista",
    description: "Emagrecimento saudável e autonomia para as suas escolhas.",
    images: ["/images/Foto1.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        {/* Acelera a conexão com o servidor da Vercel */}
        <link rel="preconnect" href="https://site-ana-gosmin.vercel.app" />
        <link rel="dns-prefetch" href="https://site-ana-gosmin.vercel.app" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-brand-bg">
        {children}
      </body>
    </html>
  );
}