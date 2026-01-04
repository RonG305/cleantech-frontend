import type { Metadata } from "next";
import { Fira_Sans, Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { Toaster } from "sonner";

const firaSans = Fira_Sans({weight: ["400", "700"], subsets: ["latin"], variable: "--font-fira-sans"});
const inter = Inter({subsets: ["latin", "greek"], variable: "--font-inter"});

export const metadata: Metadata = {
  title: "CleanTech",
  description: "Multivendor SAAS platform for cleaning services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
             <Toaster richColors position="top-right" closeButton />
           <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
