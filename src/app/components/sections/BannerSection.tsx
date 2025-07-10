'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from 'next/image'

const banners = [
  {
    image: "/images/banner1.jpg",
    title: "Smart NFC Cards",
    description: "Tap and connect instantly with premium NFC visiting cards.",
  },
  {
    image: "/images/banner2.jpg",
    title: "NFC Keychains & Tags",
    description: "Smart accessories for smart people. Carry NFC in style.",
  },
  {
    image: "/images/banner3.jpg",
    title: "Business Branding Tools",
    description: "Grow your business with customized NFC solutions that stand out.",
  },
]

export default function BannerSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length)
    }, 3000) // Change slide every 3 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={banners[index].image}
            alt={banners[index].title}
            className="w-full h-full object-cover" width={1200} height={400}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm p-8 md:p-16 flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{banners[index].title}</h2>
            <p className="text-lg max-w-2xl mb-6">{banners[index].description}</p>
            <Button variant="secondary">Explore Now</Button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            className={cn(
              "w-3 h-3 rounded-full transition",
              i === index ? "bg-white" : "bg-white/40"
            )}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
