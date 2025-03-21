import type { Metadata } from "next";
import { Fira_Code } from 'next/font/google';
import "./globals.css";


const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: "Terminal Portfolio",
  description: "Terminal-style portfolio website by vijayvenkatj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
