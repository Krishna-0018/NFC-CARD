'use client'

import { useTheme } from "next-themes"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
// import { Sun, Moon, User } from "lucide-react"
import { Menu, Sun, Moon, User, Link } from "lucide-react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import BannerSlider from "../app/BannerSlider"


export default function Home() {
  const { setTheme } = useTheme()

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    instagram: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted Form:", formData)
    // TODO: save to MongoDB
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
     <nav className="bg-card shadow-md px-4 py-3 flex items-center justify-between w-full">
  {/* Left: Logo */}
  <h1 className="text-xl font-bold text-primary">NFC Card Maker</h1>

  {/* Center: Desktop Menu */}
<div className="hidden md:flex gap-6 items-center">
  <Button variant="ghost">Home</Button>

  {/* Collections Dropdown */}
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost">Collections</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" className="w-56">
      <DropdownMenuItem>NFC Card</DropdownMenuItem>
      <DropdownMenuItem>NFC Tag</DropdownMenuItem>
      <DropdownMenuItem>NFC Keychain</DropdownMenuItem>
      <DropdownMenuItem>NFC Car Tag</DropdownMenuItem>
      <DropdownMenuItem>NFC Social Media Tag</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

  <Button variant="ghost">About Us</Button>
  <Button variant="ghost">Contact</Button>
</div>


  {/* Right: Theme + Auth + Mobile Menu */}
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

    {/* Auth Buttons - hide on mobile */}
    <div className="hidden md:flex items-center gap-2">
      <Button variant="outline">Login</Button>
      <Button variant="default">Register</Button>
      <Button variant="ghost" size="icon" title="Account">
        <User className="w-5 h-5" />
      </Button>
    </div>

    {/* Mobile Menu Button */}
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
            <Button variant="ghost" asChild>
  <Link href="/collections">Collections</Link>
</Button>

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
{/* Hero Banner */}
<BannerSlider />
<section className="bg-background py-8 px-4 border-b">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 text-center">
    
    {/* 100% Trustable */}
    <div className="flex items-center gap-3">
      <span className="text-3xl">✅</span>
      <div>
        <h4 className="text-lg font-semibold text-primary">100% Trustable</h4>
        <p className="text-sm text-muted-foreground">Thousands of happy customers across India</p>
      </div>
    </div>

    {/* Fast Delivery */}
    <div className="flex items-center gap-3">
      <span className="text-3xl">🚚</span>
      <div>
        <h4 className="text-lg font-semibold text-primary">Fast & Safe Delivery</h4>
        <p className="text-sm text-muted-foreground">Pan-India shipping with tracking</p>
      </div>
    </div>

    {/* Own Manufacturer */}
    <div className="flex items-center gap-3">
      <span className="text-3xl">🏭</span>
      <div>
        <h4 className="text-lg font-semibold text-primary">We Are the Manufacturer</h4>
        <p className="text-sm text-muted-foreground">In-house production for best pricing & quality</p>
      </div>
    </div>

    {/* Quality Support */}
    <div className="flex items-center gap-3">
      <span className="text-3xl">💯</span>
      <div>
        <h4 className="text-lg font-semibold text-primary">Premium Service</h4>
        <p className="text-sm text-muted-foreground">Quick support & 5-star rated service</p>
      </div>
    </div>

  </div>
</section>



      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 space-y-8">
        {/* Welcome Card */}
        <Card className="max-w-xl w-full">
          <CardHeader>
            <CardTitle>Welcome to NFC Card Maker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We offer smart NFC Cards, Tags, Keychains, and more. Fill the form below to create your personalized NFC product.
            </p>
          </CardContent>
        </Card>

        {/* Customer Form */}
        <Card className="max-w-xl w-full">
          <CardHeader>
            <CardTitle>Enter Your Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website / Portfolio</Label>
                <Input id="website" name="website" value={formData.website} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram Handle</Label>
                <Input id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} />
              </div>

              <Button type="submit" className="w-full">
                Submit Details
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
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
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/collections" className="hover:underline">Collections</a></li>
        <li><a href="/about" className="hover:underline">About Us</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
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
