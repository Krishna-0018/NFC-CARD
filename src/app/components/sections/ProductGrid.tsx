import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ProductGrid() {
  const products = [
    {
      title: "NFC Card",
      desc: "Sleek, credit-card-sized smart cards to share your digital profile with a single tap.",
    },
    {
      title: "NFC Keychain",
      desc: "Compact, stylish, and always with you. Share info instantly via your keychain.",
    },
    {
      title: "NFC Tag",
      desc: "Stickable NFC tags for branding, smart posters, or business applications.",
    },
    {
      title: "NFC Car Tag",
      desc: "Share your business or contact info easily while on the road.",
    },
    {
      title: "NFC Social Media Tag",
      desc: "Instantly connect others to your Instagram, LinkedIn, or portfolio with one tap.",
    },
  ]

  return (
    <section className="py-10 px-4 bg-background border-b">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our NFC Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
    