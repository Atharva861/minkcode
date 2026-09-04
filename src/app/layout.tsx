import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/sonner";
import { CustomScrollbar } from "@/components/custom-scrollbar";
import { LoadingScreen } from "@/components/loading-screen";

const cabinetGrotesk = localFont({
  src: "../../public/fonts/CabinetGrotesk/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "minkcode",
  description:
    "Minkcode is a boutique web development studio designing, building, and deploying digital products from scratch.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cabinetGrotesk.variable}>
      <body>
        <LoadingScreen />
        <Navigation />
        <CustomScrollbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
