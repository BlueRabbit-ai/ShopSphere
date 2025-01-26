"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Electronics", icon: "💻", description: "Gadgets and devices for your tech needs" },
  { name: "Clothing", icon: "👕", description: "Stylish apparel for all occasions" },
  { name: "Accessories", icon: "👜", description: "Complete your look with our accessories" },
  { name: "Home & Living", icon: "🏠", description: "Furnish and decorate your living space" },
  { name: "Sports & Outdoors", icon: "⚽", description: "Gear up for your active lifestyle" },
  { name: "Beauty & Personal Care", icon: "💄", description: "Look and feel your best" },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-bold"
      >
        Categories
      </motion.h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="rounded-lg bg-card p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 text-4xl">{category.icon}</div>
              <h2 className="mb-2 text-xl font-semibold">{category.name}</h2>
              <p className="mb-4 text-muted-foreground">{category.description}</p>
              <Button asChild>
                <Link href={`/products?category=${category.name}`}>View Products</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

