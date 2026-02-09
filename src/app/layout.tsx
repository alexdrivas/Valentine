import "~/styles/globals.css";

import { Caveat, Playfair_Display } from "next/font/google";
import { type Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Will you be my Valentine?",
  description: "A little love letter for you",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${caveat.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
