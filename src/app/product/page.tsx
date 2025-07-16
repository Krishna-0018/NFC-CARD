'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "../components/Header"
import Footer from "../components/Footer"

const products = [
  {
    name: "NFC Card",
    image: "/products/card.jpg",
    description: "Sleek, smart business cards with built-in NFC to share your digital identity instantly.",
    price: "₹499"
  },
  {
    name: "NFC Tag",
    image: "/products/card.jpg",
    description: "Stickable NFC tags for smart posters, links, or IoT automation.",
    price: "₹199"
  },
  {
    name: "NFC Keychain",
    image: "/products/card.jpg",
    description: "Stylish keychains with NFC functionality — perfect for always-on sharing.",
    price: "₹349"
  },
  {
    name: "NFC Sticker",
    image: "/products/card.jpg",
    description: "Customizable NFC stickers to brand & connect your assets digitally.",
    price: "₹249"
  },
]

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 bg-white text-black px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Our NFC Products</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition">
                <CardHeader>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={250}
                    className="rounded-xl object-cover"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle>{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <p className="text-primary font-semibold">{product.price}</p>
                  <Button className="w-full">Buy Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
