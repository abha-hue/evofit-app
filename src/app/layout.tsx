import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "EVOFIT | FORGED IN DISCIPLINE",
  description: "EvoFit - Elite strength conditioning for those who refuse to settle. No shortcuts. Just results earned through iron and sweat. Join our community today.",
  keywords: "EvoFit, Gym, Strength Conditioning, Fitness, HIIT, Power, Pilates",
  openGraph: {
    title: "EVOFIT | FORGED IN DISCIPLINE",
    description: "Elite strength conditioning for those who refuse to settle.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${montserrat.variable} h-full antialiased dark`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body-md selection:bg-impact-orange selection:text-pure-white min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
