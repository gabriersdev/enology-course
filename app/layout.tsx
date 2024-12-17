import "./css/style.css";

import {Inter} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Descubra o Fascinante Mundo dos Vinhos - Curso de Enologia",
  description: "Aprenda os segredos da enologia com especialistas e torne-se um verdadeiro conhecedor de vinhos. Garanta sua vaga agora para o curso de enologia! Comece a sua jornada no mundo dos vinhos agora mesmo.",
  keywords: "Enologia; Vinhos; Mundo; Curso; Especialistas; Conhecedor; Segredos; Jornada; Garanta; Vaga; Comece; Jornada; Agora; Mesmo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
    <head>
      <meta name="author" content="Descubra o Fascinante Mundo dos Vinhos - Curso de Enologia"/>
      <meta name="robots" content="follow"/>

      <meta property="og:title" content="Descubra o Fascinante Mundo dos Vinhos - Curso de Enologia"/>
      <meta property="og:description"
            content="Aprenda os segredos da enologia com especialistas e torne-se um verdadeiro conhecedor de vinhos. Garanta sua vaga agora para o curso de enologia! Comece a sua jornada no mundo dos vinhos agora mesmo."/>
      <meta property="og:url" content="https://curso-de-enologia.vercel.app"/>
      <meta property="og:image" content="https://curso-de-enologia.vercel.app/banner-800x600.png"/>
      <meta property="og:image:secure_url"
            content="https://curso-de-enologia.vercel.app/banner-800x600.png"/>
      <meta property="og:image:type" content="image/png"/>
      <meta property="og:image:width" content="800"/>
      <meta property="og:image:height" content="600"/>
      <title>Descubra o Fascinante Mundo dos Vinhos - Curso de Enologia</title>
      <link rel={"icon"} href={"/favicon.png"}/>
    </head>
    <body
      className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
    >
    <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
      {children}
    </div>
    </body>
    </html>
  );
}
