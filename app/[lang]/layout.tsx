import type { Metadata } from "next";

import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/shared/layout/Header";
import localFont from "next/font/local";
import Footer from "@/shared/layout/Footer";
import { getDictionary } from "./dictionaries";
import { ToastContainer } from "react-toastify";

const rubik = localFont({
  src: "../fonts/Rubik-VariableFont_wght.ttf",
  variable: "--font-rubik",
  display: "swap",
});
const roboto = localFont({
  src: "../fonts/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venta Academy",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "az" }, { lang: "ru" }];
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en" | "az" | "ru" };
}>) {
  const dict = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={`${rubik.variable} ${roboto.variable} antialiased`}>
        <ToastContainer position="top-right" autoClose={3000} />
        <Header t={dict?.header ?? {}} />
        {children}
        <Footer t={dict?.footer ?? {}} />
      </body>
    </html>
  );
}
