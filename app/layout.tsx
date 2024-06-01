import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather App",
  description: "A weather app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen items-center justify-center bg-gradient-blue bg-cover bg-fixed bg-no-repeat">
        {children}
      </body>
    </html>
  );
}
