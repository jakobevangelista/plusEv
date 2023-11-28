import type { Metadata } from "next";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlusEv",
  description: "Modern solutions for modern problems",
  icons: { icon: "/squareCircleLogoJPEG.jpg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
