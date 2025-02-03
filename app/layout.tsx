import type { Metadata } from "next";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/layout/Header";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";

const rubik = localFont({
  src: "./fonts/Rubik-VariableFont_wght.ttf",
  variable: "--font-rubik",
  display: "swap",
});
const roboto = localFont({
  src: "./fonts/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venta Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${roboto.variable} antialiased`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
