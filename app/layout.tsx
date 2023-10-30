import "./globals.css";

import { Playpen_Sans } from "next/font/google";
import NavBar from "./NavBar"
import { cn } from "@/lib/utils";


const inter = Playpen_Sans({
  subsets: ["latin"],
  variable: "--font-playpen"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-playpen antialiased", inter.variable)}>
        <NavBar />
        <main className="p-2">{children}</main>
      </body>
    </html>
  )
}
