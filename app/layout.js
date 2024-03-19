import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/partials/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Toaster } from "@/components/ui/toaster";
import { emblema_one, nova_slim, bubblegum_sans } from "@/utils/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`inter.className ${emblema_one} ${nova_slim} ${bubblegum_sans}  bg-[#fef0e0]`}
        >
          <Navbar />
          <EdgeStoreProvider>
            {children}
            <Toaster />
          </EdgeStoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
