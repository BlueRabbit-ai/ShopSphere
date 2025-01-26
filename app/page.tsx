"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

const featuredProducts = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
  },
  { id: 3, name: "Laptop", price: 999.99, image: "/placeholder.svg?height=300&width=300", category: "Electronics" },
  { id: 4, name: "Smartphone", price: 699.99, image: "/placeholder.svg?height=300&width=300", category: "Electronics" },
]

export default function Home() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-4 text-4xl font-bold">Welcome to ShopSphere</h1>
          <p className="mb-6 text-lg text-muted-foreground">Discover amazing products at unbeatable prices!</p>
          <Link href="/products">
            <Button size="lg" className="animate-pulse">
              Shop Now
            </Button>
          </Link>
        </motion.div>
      </section>

      <section ref={ref} className="mb-16">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mb-6 text-2xl font-semibold">Featured Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mb-16">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="mb-6 text-2xl font-semibold">Why Choose ShopSphere?</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-card p-6 shadow-md transition-transform hover:scale-105">
              <h3 className="mb-2 text-xl font-semibold">Wide Selection</h3>
              <p className="text-muted-foreground">Explore our vast catalog of products from top brands.</p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md transition-transform hover:scale-105">
              <h3 className="mb-2 text-xl font-semibold">Fast Shipping</h3>
              <p className="text-muted-foreground">Get your orders delivered quickly and efficiently.</p>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-md transition-transform hover:scale-105">
              <h3 className="mb-2 text-xl font-semibold">24/7 Support</h3>
              <p className="text-muted-foreground">Our customer service team is always here to help you.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

