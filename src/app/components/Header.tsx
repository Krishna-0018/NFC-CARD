'use client'
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { Menu, Sun, Moon, User } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import Link from "next/link"

export default function Header() {
  const { setTheme } = useTheme()
  const router = useRouter()

  return (
    <nav className="bg-card shadow-md px-4 py-3 flex items-center justify-between w-full">
      <h1 className="text-xl font-bold text-primary">NFC Card Maker</h1>

      <div className="hidden md:flex gap-6 items-center">
        <Link href="/">
        <Button variant="ghost">Home</Button></Link>
        <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost">Products</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start" className="max-w-xs grid grid-cols-2 gap-2 p-2">
    <DropdownMenuItem asChild>
      <Link href="/product?type=nfc-tags">NFC Tags</Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link href="/product?type=nfc-cards">NFC Cards</Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link href="/product?type=nfc-stickers">NFC Stickers</Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link href="/product?type=nfc-reader">NFC Reader</Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        <Button variant="ghost">About Us</Button>
        <Button variant="ghost">Contact</Button>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="hidden md:flex gap-2">
          <Button variant="outline" onClick={() => router.push("/login")}>Login</Button>
          <Button variant="default" onClick={() => router.push("/login/register")}>Register</Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <div className="flex flex-col space-y-4 mt-6">
                <Button variant="ghost">Home</Button>
                <Button variant="ghost">Products</Button>
                <Button variant="ghost">About Us</Button>
                <Button variant="ghost">Contact</Button>
                <Button variant="outline" onClick={() => router.push("/login")}>Login</Button>
                <Button variant="default" onClick={() => router.push("/register")}>Register</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
