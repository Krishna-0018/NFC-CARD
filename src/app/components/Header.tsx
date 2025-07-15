'use client'
// import Link from "next/link"
import { useTheme } from "next-themes"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Menu, Sun, Moon, User } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Header() {
  const { setTheme } = useTheme()

  return (
    <nav className="bg-card shadow-md px-4 py-3 flex items-center justify-between w-full">
      <h1 className="text-xl font-bold text-primary">NFC Card Maker</h1>

      <div className="hidden md:flex gap-6 items-center">
        <Button variant="ghost">Home</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">Products</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="max-w-xs grid grid-cols-2 gap-2 p-2">
            <DropdownMenuItem>NFC Tags</DropdownMenuItem>
            <DropdownMenuItem>NFC Stickers</DropdownMenuItem>
            <DropdownMenuItem>NFC Cards</DropdownMenuItem>
            <DropdownMenuItem>NFC Reader</DropdownMenuItem>
            {/* Add more if needed */}
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
          <Button variant="outline">Login</Button>
          <Button variant="default">Register</Button>
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
                <Button variant="outline">Login</Button>
                <Button variant="default">Register</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
