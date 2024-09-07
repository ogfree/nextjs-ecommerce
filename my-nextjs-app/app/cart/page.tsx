'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { TrashIcon, PlusIcon, MinusIcon } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

// Mock data for cart items
const initialCartItems = [
  { id: 1, name: "Stylish T-Shirt", price: 29.99, quantity: 2, image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Comfortable Jeans", price: 59.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "Running Shoes", price: 89.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

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

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10 // Fixed shipping cost for this example
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-4">Looks like you haven't added any items to your cart yet.</p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <Card key={item.id} className="mb-4">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Image src={item.image} alt={item.name} width={80} height={80} className="w-20 h-20 object-cover rounded mr-4" />
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
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full" asChild>
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}