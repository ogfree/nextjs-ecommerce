'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingBagIcon, SearchIcon, MenuIcon, UserIcon, TrashIcon, PlusIcon, MinusIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data for cart items
const initialCartItems = [
  { id: 1, name: "Stylish T-Shirt", price: 29.99, quantity: 2, image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Comfortable Jeans", price: 59.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "Running Shoes", price: 89.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
]

export function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const applyPromoCode = () => {
    // Mock promo code logic
    if (promoCode.toLowerCase() === "discount10") {
      setDiscount(10)
    } else {
      setDiscount(0)
      alert("Invalid promo code")
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal - discount

  useEffect(() => {
    if (cartItems.length === 0) {
      setDiscount(0)
      setPromoCode("")
    }
  }, [cartItems])

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
                <Input className="pl-10 w-full" placeholder="Search products..." />
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2">
                <UserIcon className="h-5 w-5" />
                <span className="sr-only">User account</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBagIcon className="h-5 w-5" />
                <Badge className="absolute top-0 right-0 -mt-1 -mr-1" variant="destructive">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
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

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBagIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-4">Looks like you haven't added any items to your cart yet.</p>
            <Button>Continue Shopping</Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <Card key={item.id} className="mb-4">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center">
                        <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <MinusIcon className="h-4 w-4" />
                        </Button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <PlusIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="ml-4" onClick={() => removeItem(item.id)}>
                        <TrashIcon className="h-5 w-5 text-red-500" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch p-4">
                  <Button className="w-full mb-2">Proceed to Checkout</Button>
                  <div className="flex mt-4">
                    <Input 
                      placeholder="Enter promo code" 
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="mr-2"
                    />
                    <Button variant="outline" onClick={applyPromoCode}>Apply</Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-muted py-8 mt-16">
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