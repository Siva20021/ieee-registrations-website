import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript/PrelineScript";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Registrations | IEEE SRM",
  description: "Unlock Exclusive Access to Exciting Events and Workshops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <PrelineScript />
    </html>
  );
}