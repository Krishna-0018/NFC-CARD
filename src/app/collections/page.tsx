'use client'

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon, Menu, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

const products = [
  {
    name: "NFC Card",
    description: "Smart contactless card with instant tap sharing.",
    image: "/images/nfc-card.png",
    slug: "nfc-card",
    badge: "Best Seller",
  },
  {
    name: "NFC Tag",
    description: "Stick it anywhere and automate your life.",
    image: "/images/nfc-tag.png",
    slug: "nfc-tag",
    badge: "New",
  },
  {
    name: "NFC Keychain",
    description: "Your digital identity in your pocket.",
    image: "/images/nfc-keychain.png",
    slug: "nfc-keychain",
  },
  {
    name: "NFC Car Tag",
    description: "Start navigation, open music, or automate actions.",
    image: "/images/nfc-car-tag.png",
    slug: "nfc-car-tag",
  },
  {
    name: "NFC Social Media Tag",
    description: "Share all your social profiles with one tap.",
    image: "/images/nfc-social-media.png",
    slug: "nfc-social-media-tag",
  },
]

export default function CollectionsPage() {
  const { setTheme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* --- Navbar --- */}
      <nav className="bg-card shadow-md px-4 py-3 flex items-center justify-between w-full">
        {/* Left: Logo */}
        <h1 className="text-xl font-bold text-primary">NFC Card Maker</h1>

        {/* Center Menu (Desktop) */}
        <div className="hidden md:flex gap-6 items-center">
          <Button variant="ghost" asChild><Link href="/">Home</Link></Button>

          {/* Collections Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Collections</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {products.map((p) => (
                <DropdownMenuItem key={p.slug} asChild>
                  <Link href={`/collections/${p.slug}`}>{p.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost">About Us</Button>
          <Button variant="ghost">Contact</Button>
        </div>

        {/* Right: Theme Toggle & Auth */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline">Login</Button>
            <Button variant="default">Register</Button>
            <Button variant="ghost" size="icon" title="Account">
              <User className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <div className="flex flex-col space-y-4 mt-6">
                  <Button variant="ghost" asChild><Link href="/">Home</Link></Button>
                  <p className="px-2 text-sm font-semibold">Collections</p>
                  {products.map((p) => (
                    <Button variant="ghost" className="justify-start pl-4" asChild key={p.slug}>
                      <Link href={`/collections/${p.slug}`}>{p.name}</Link>
                    </Button>
                  ))}
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

      {/* --- Main Product Grid --- */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">🛍️ Shop All NFC Products</h1>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Card key={product.slug} className="hover:shadow-md transition">
                <CardHeader className="p-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="rounded-t-md object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>{product.name}</CardTitle>
                    {product.badge && (
                      <Badge variant="outline">{product.badge}</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <Button asChild className="w-full mt-2">
                    <Link href={`/collections/${product.slug}`}>View Product</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-card border-t mt-12">
  <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-muted-foreground">
    {/* Company Info */}
    <div>
      <h4 className="text-base font-semibold mb-2 text-primary">NFC Card Maker</h4>
      <p>Your smart identity solution. Customize NFC cards, tags, and more.</p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-base font-semibold mb-2 text-primary">Quick Links</h4>
      <ul className="space-y-1">
        <li><Link  href="/" className="hover:underline">Home</Link ></li>
        <li><Link  href="/collections" className="hover:underline">Collections</Link ></li>
        <li><Link  href="/about" className="hover:underline">About Us</Link ></li>
        <li><Link  href="/contact" className="hover:underline">Contact</Link ></li>
      </ul>
    </div>

    {/* Policies */}
    <div>
      <h4 className="text-base font-semibold mb-2 text-primary">Policies</h4>
      <ul className="space-y-1">
        <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
        <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
        <li><a href="/return-policy" className="hover:underline">Return & Refund</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="text-base font-semibold mb-2 text-primary">Connect with Us</h4>
      <ul className="space-y-1">
        <li><a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
        <li><a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
        <li><a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a></li>
        <li><a href="mailto:support@nfc-card-maker.com" className="hover:underline">support@nfc-card-maker.com</a></li>
      </ul>
    </div>
  </div>

  <div className="text-center text-xs py-4 border-t text-muted-foreground">
    &copy; {new Date().getFullYear()} NFC Card Maker. All rights reserved.
  </div>
</footer>

    </div>
  )
}
