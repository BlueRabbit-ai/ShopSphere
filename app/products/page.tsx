"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

// Mock data for products
const allProducts = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 99.99,
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    image: "/placeholder.svg?height=300&width=300",
  },
  { id: 3, name: "Laptop", price: 999.99, category: "Electronics", image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "Smartphone", price: 699.99, category: "Electronics", image: "/placeholder.svg?height=300&width=300" },
  { id: 5, name: "T-Shirt", price: 19.99, category: "Clothing", image: "/placeholder.svg?height=300&width=300" },
  { id: 6, name: "Jeans", price: 49.99, category: "Clothing", image: "/placeholder.svg?height=300&width=300" },
  { id: 7, name: "Sneakers", price: 79.99, category: "Clothing", image: "/placeholder.svg?height=300&width=300" },
  { id: 8, name: "Backpack", price: 39.99, category: "Accessories", image: "/placeholder.svg?height=300&width=300" },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesPrice && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-bold"
      >
        Products
      </motion.h1>
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="w-full md:w-1/3">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3">
          <Label>
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </Label>
          <Slider min={0} max={1000} step={10} value={priceRange} onValueChange={setPriceRange} className="mt-2" />
        </div>
        <div className="w-full md:w-1/3">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            className="w-full rounded-md border p-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
      {filteredProducts.length === 0 && (
        <p className="mt-8 text-center text-lg text-muted-foreground">No products found matching your criteria.</p>
      )}
    </div>
  )
}

