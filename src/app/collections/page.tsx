'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


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
  // const { setTheme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* --- Navbar --- */}
            {/* <Header /> */}
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
