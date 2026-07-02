import type { Metadata } from "next";
import "./globals.css";

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
      className="h-full antialiased dark"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
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
