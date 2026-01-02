import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-poppins" });
};

  title: "Happy Birthday!",
  description: "A special birthday greeting website.",
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      <body className={`${inter.variable} ${poppins.variable} bg-[#FFF4FB] text-[#333] font-body min-h-screen`}>{children}</body>
    </html>
  );
}
