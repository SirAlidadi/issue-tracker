import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";

import { Playpen_Sans } from "next/font/google";
import NavBar from "./NavBar"
import { Theme } from "@radix-ui/themes";


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
        <Theme accentColor="violet" radius="large">
          <NavBar />
          <main className="p-2">{children}</main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}
