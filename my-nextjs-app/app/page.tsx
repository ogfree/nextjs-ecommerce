import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { HeartIcon, StarIcon } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

const products = [
  { id: 1, name: "Stylish T-Shirt", price: 29.99, image: "/placeholder.svg?height=200&width=300", category: "Clothing" },
  { id: 2, name: "Comfortable Jeans", price: 59.99, image: "/placeholder.svg?height=200&width=300", category: "Clothing" },
  { id: 3, name: "Running Shoes", price: 89.99, image: "/placeholder.svg?height=200&width=300", category: "Footwear" },
  { id: 4, name: "Leather Wallet", price: 39.99, image: "/placeholder.svg?height=200&width=300", category: "Accessories" },
]

export default function HomePage() {
  return (
    <div>
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Welcome to ShopNow</h1>
            <p className="text-xl text-muted-foreground mb-8">Discover amazing products at unbeatable prices.</p>
            <Button size="lg" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className="h-4 w-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <HeartIcon className="h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}