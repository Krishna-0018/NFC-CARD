'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductCardProps {
  title: string
  image: string
  price: string
  description: string
}

export function ProductCard({ title, image, price, description }: ProductCardProps) {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow">
      <CardHeader>
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="rounded-xl object-cover"
        />
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-lg font-semibold">{price}</p>
      </CardContent>
    </Card>
  )
}
