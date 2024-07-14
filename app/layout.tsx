import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ReduxProvider from "./components/ReduxProvider"; // Adjust the path as necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dex Bookstore",
  description: "A Website to read online books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
