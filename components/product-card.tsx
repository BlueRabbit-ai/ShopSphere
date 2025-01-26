"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useShoppingCart } from "@/hooks/use-shopping-cart"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    category: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useShoppingCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="h-[200px] w-full object-cover transition-all hover:scale-105"
            />
          </Link>
        </CardContent>
        <CardFooter className="flex flex-col items-start p-4">
          <Link href={`/products/${product.id}`}>
            <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
          </Link>
          <p className="mb-2 text-sm text-muted-foreground">{product.category}</p>
          <p className="mb-4 text-sm font-semibold">${product.price.toFixed(2)}</p>
          <Button size="sm" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

