import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MyThemeProvider } from "./themeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Joydeep Das",
  description: "Joydeep's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MyThemeProvider>
          {children}
        </MyThemeProvider>
      </body>
    </html>
  );
}
