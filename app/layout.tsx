import "./globals.css";

import { Playpen_Sans } from "next/font/google";
import NavBar from "./NavBar"


const inter = Playpen_Sans({
  subsets: ["latin"],
  variable: "--font-playpen-sans"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <NavBar />
        <main className="p-2">{children}</main>
      </body>
    </html>
  )
}
