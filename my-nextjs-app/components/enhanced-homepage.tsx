'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ShoppingBagIcon, SearchIcon, MenuIcon, UserIcon, HeartIcon, StarIcon } from "lucide-react"

const products = [
  { id: 1, name: "Stylish T-Shirt", price: 29.99, image: "/placeholder.svg?height=200&width=300", category: "Clothing" },
  { id: 2, name: "Comfortable Jeans", price: 59.99, image: "/placeholder.svg?height=200&width=300", category: "Clothing" },
  { id: 3, name: "Running Shoes", price: 89.99, image: "/placeholder.svg?height=200&width=300", category: "Footwear" },
  { id: 4, name: "Leather Wallet", price: 39.99, image: "/placeholder.svg?height=200&width=300", category: "Accessories" },
  { id: 5, name: "Smartwatch", price: 199.99, image: "/placeholder.svg?height=200&width=300", category: "Electronics" },
  { id: 6, name: "Sunglasses", price: 79.99, image: "/placeholder.svg?height=200&width=300", category: "Accessories" },
  { id: 7, name: "Backpack", price: 49.99, image: "/placeholder.svg?height=200&width=300", category: "Accessories" },
  { id: 8, name: "Wireless Earbuds", price: 129.99, image: "/placeholder.svg?height=200&width=300", category: "Electronics" },
]

export function EnhancedHomepage() {
  const [cartItems, setCartItems] = useState<number[]>([])
  const [wishlistItems, setWishlistItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId])
  }

  const toggleWishlist = (productId: number) => {
    if (wishlistItems.includes(productId)) {
      setWishlistItems(wishlistItems.filter(id => id !== productId))
    } else {
      setWishlistItems([...wishlistItems, productId])
    }
  }

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeCategory === "All" || product.category === activeCategory)
  )

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-primary">ShopNow</a>
            </div>
            <div className="hidden md:block flex-1 max-w-sm mx-4">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  className="pl-10 w-full" 
                  placeholder="Search products..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2">
                <UserIcon className="h-5 w-5" />
                <span className="sr-only">User account</span>
              </Button>
              <Button variant="ghost" size="icon" className="mr-2">
                <HeartIcon className="h-5 w-5" />
                <Badge className="absolute top-0 right-0 -mt-1 -mr-1" variant="destructive">
                  {wishlistItems.length}
                </Badge>
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBagIcon className="h-5 w-5" />
                <Badge className="absolute top-0 right-0 -mt-1 -mr-1" variant="destructive">
                  {cartItems.length}
                </Badge>
                <span className="sr-only">Shopping cart</span>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden ml-2">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-primary mb-4">Welcome to ShopNow</h1>
              <p className="text-xl text-muted-foreground mb-8">Discover amazing products at unbeatable prices.</p>
              <Button size="lg">Shop Now</Button>
            </div>
          </div>
        </section>

        {/* Product Listing */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="All" className="mb-8">
              <TabsList>
                <TabsTrigger value="All" onClick={() => setActiveCategory("All")}>All</TabsTrigger>
                <TabsTrigger value="Clothing" onClick={() => setActiveCategory("Clothing")}>Clothing</TabsTrigger>
                <TabsTrigger value="Footwear" onClick={() => setActiveCategory("Footwear")}>Footwear</TabsTrigger>
                <TabsTrigger value="Accessories" onClick={() => setActiveCategory("Accessories")}>Accessories</TabsTrigger>
                <TabsTrigger value="Electronics" onClick={() => setActiveCategory("Electronics")}>Electronics</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
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
                    <Button variant="outline" size="sm" onClick={() => addToCart(product.id)}>
                      Add to Cart
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => toggleWishlist(product.id)}
                      className={wishlistItems.includes(product.id) ? "text-red-500" : ""}
                    >
                      <HeartIcon className="h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="text-lg mb-8">Stay up to date with our latest offers and products.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Input className="bg-primary-foreground text-primary" placeholder="Enter your email" />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">&copy; 2023 ShopNow. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary">About</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Contact</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Privacy</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}