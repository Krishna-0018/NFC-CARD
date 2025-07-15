'use client'

import { ProductCard } from "../components/ProductCard"

export default function ProductPage() {
  return (
    <div className="min-h-screen px-6 py-12 bg-background text-foreground">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Our NFC Cards</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Product Cards */}
          <ProductCard
            title="Classic NFC Card"
            image="/images/classic.png"
            price="₹299"
            description="A sleek NFC card for professional use."
          />
          <ProductCard
            title="Custom NFC Card"
            image="/images/custom.png"
            price="₹399"
            description="Fully customizable NFC card for your brand."
          />
        </div>
      </div>
    </div>
  )
}
