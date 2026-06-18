import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Förderverein Kloster Nordalbanien – Hilfe, die in Nordalbanien ankommt",
  description:
    "Der Förderverein Kloster Nordalbanien sammelt in der Schweiz Spenden und bringt sie zweckgebunden zu den Menschen in Nordalbanien – über die Schwestern des Klosters Mutter der Barmherzigkeit in Shkodra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
