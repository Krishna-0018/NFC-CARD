'use client'
import Image from "next/image"
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
  {/* <DropdownMenu>
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
  </DropdownMenu> */}
{/* Products Dropdown */}
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost">Products</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start" className="max-w-xs grid grid-cols-2 gap-2 p-2">
    <DropdownMenuItem>NFC Tags</DropdownMenuItem>
    <DropdownMenuItem>NFC Stickers</DropdownMenuItem>
    <DropdownMenuItem>NFC Cards</DropdownMenuItem>
    <DropdownMenuItem>NFC Card Reader</DropdownMenuItem>
    <DropdownMenuItem>NFC Keychains</DropdownMenuItem>
    <DropdownMenuItem>NFC Bracelets</DropdownMenuItem>
    <DropdownMenuItem>Digital Business Cards</DropdownMenuItem>
    <DropdownMenuItem>Smartcard Reader</DropdownMenuItem>
    <DropdownMenuItem>NFC devices</DropdownMenuItem>
    <DropdownMenuItem>Chip Scanner</DropdownMenuItem>
    <DropdownMenuItem>Tap Business Card</DropdownMenuItem>
    <DropdownMenuItem>Plastic Business Cards</DropdownMenuItem>
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
<section className="py-10 px-4 bg-background border-b">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our NFC Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
      {/* NFC Card */}
      <Card className="hover:shadow-lg transition">
        <CardHeader>
          <CardTitle>NFC Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Sleek, credit-card-sized smart cards to share your digital profile with a single tap.
          </p>
        </CardContent>
      </Card>

      {/* NFC Keychain */}
      <Card className="hover:shadow-lg transition">
        <CardHeader>
          <CardTitle>NFC Keychain</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Compact, stylish, and always with you. Share info instantly via your keychain.
          </p>
        </CardContent>
      </Card>

      {/* NFC Tag */}
      <Card className="hover:shadow-lg transition">
        <CardHeader>
          <CardTitle>NFC Tag</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Stickable NFC tags for branding, smart posters, or business applications.
          </p>
        </CardContent>
      </Card>

      {/* NFC Car Tag */}
      <Card className="hover:shadow-lg transition">
        <CardHeader>
          <CardTitle>NFC Car Tag</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Share your business or contact info easily while on the road.
          </p>
        </CardContent>
      </Card>

      {/* NFC Social Media Tag */}
      <Card className="hover:shadow-lg transition">
        <CardHeader>
          <CardTitle>NFC Social Media Tag</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Instantly connect others to your Instagram, LinkedIn, or portfolio with one tap.
          </p>
        </CardContent>
      </Card>

    </div>
  </div>
</section>
<section className="bg-[#e6f8fc] py-12 px-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Left: Image */}
    <div className="w-full md:w-1/2">
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image
          src="/nfc-about.png"  // Ensure this image exists in /public folder
          alt="NFC Card Demo"
          width={800}
          height={600}
          className="object-cover w-full h-auto"
        />
      </div>
    </div>

    {/* Right: Text Content */}
    <div className="w-full md:w-1/2 bg-white p-6 md:p-10 rounded-2xl shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        About NFC World
      </h2>
      <p className="text-gray-700 mb-6">
        In 2018, two entrepreneurs discovered the power of <span className="text-blue-600">NFC technology</span>. A passion was immediately born.
        We don’t keep this passion to ourselves; we like to share it with others. Our vision is therefore: to make the world familiar with NFC.
        As entrepreneurs, we were looking for a high-quality product with fast delivery. We are now committed to that every day.
        Currently, we are more enthusiastic than ever about NFC technology. We are sure you will be as excited about NFC as we are.
      </p>
      <Link href="/about">
        <button className="px-5 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition">
          About us
        </button>
      </Link>
    </div>
  </div>
</section>
<section className="py-12 px-4 bg-background">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
      Don't miss anything and read all about NFC
    </h2>

    {/* Blog Cards Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
        <Image
          src="/blog-1.jpg" // Save in /public
          alt="Blog 1"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-5 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2">
              Corporate sustainability with the CSR performance ladder
            </h3>
            <p className="text-sm text-muted-foreground">
              Sustainability has long since ceased to be a luxury, but a requirement to remain relevant. Companies must prove...
            </p>
          </div>
          <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-b-xl rounded-t-md hover:bg-teal-700 transition">
            Read article
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
        <Image
          src="/blog-1.jpg"
          alt="Blog 2"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-5 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2">
              Everything you need to know about ESG legislation as a company
            </h3>
            <p className="text-sm text-muted-foreground">
              ESG legislation is increasing. Governments are setting stricter rules to encourage sustainable business practices...
            </p>
          </div>
          <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-b-xl rounded-t-md hover:bg-teal-700 transition">
            Read article
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
        <Image
          src="/blog-1.jpg"
          alt="Blog 3"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-5 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2">
              7 inspiring green companies doing sustainable business
            </h3>
            <p className="text-sm text-muted-foreground">
              Many organizations are choosing sustainability to reduce environmental impact. Here are 7 inspiring companies...
            </p>
          </div>
          <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-b-xl rounded-t-md hover:bg-teal-700 transition">
            Read article
          </button>
        </div>
      </div>
    </div>

    {/* CTA Button */}
    <div className="flex justify-center mt-10">
      <a href="/blogs">
        <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
          See all our blogs
        </button>
      </a>
    </div>
  </div>
</section>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 space-y-8">
        {/* Welcome Card */}
        {/* <Card className="max-w-xl w-full">
          <CardHeader>
            <CardTitle>Welcome to NFC Card Maker</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We offer smart NFC Cards, Tags, Keychains, and more. Fill the form below to create your personalized NFC product.
            </p>
          </CardContent>
        </Card> */}

        {/* Customer Form */}
        {/* <Card className="max-w-xl w-full">
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
        </Card> */}
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
        <li><a  href="#" className="hover:underline">Home</a ></li>
        <li><a  href="/collections" className="hover:underline">Collections</a ></li>
        <li><a  href="/about" className="hover:underline">About Us</a ></li>
        <li><a  href="/contact" className="hover:underline">Contact</a ></li>
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
