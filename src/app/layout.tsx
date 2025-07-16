import "./globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
// import { Providers } from "./providers";
import { ThemeProvider } from "next-themes";
// import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "NFC Card Maker",
  description: "Create and share your identity with NFC cards",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable, "antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
