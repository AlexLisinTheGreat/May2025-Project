import type { Metadata } from "next";
import { Lato, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"]
})

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${libreCaslon.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
