import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"
import "../shared/styles/globals.css";
import Providers from "@/shared/utils/providers";

// const inter = Inter({ subsets: ["latin"] });
const clashDisplay = localFont({
  src: "../assets/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clashDisplay",
  weight: "700"
})

export const metadata: Metadata = {
  title: "Newsletter App",
  description: "Newsletter application for sending news letter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clashDisplay.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
