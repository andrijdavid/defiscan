import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import App from "@/components/app";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

export const metadata: Metadata = {
  title: {
    template: "%s | DeFi Scan",
    default: "DeFi Scan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen antialiased font-lexend bg-background",
          lexend.variable,
        )}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
