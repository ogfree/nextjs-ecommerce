'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ShoppingBagIcon, SearchIcon, MenuIcon, UserIcon, PackageIcon, CreditCardIcon, SettingsIcon, HomeIcon, MapPinIcon } from "lucide-react"

export function EnhancedAccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-primary">ShopNow</a>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input className="pl-10 w-64" placeholder="Search products..." />
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2">
                <UserIcon className="h-5 w-5" />
                <span className="sr-only">User account</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBagIcon className="h-5 w-5" />
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
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 h-auto">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="payment">Payment Methods</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your account details here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us a little about yourself" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View your past orders and their status.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0">
                      <div>
                        <p className="font-semibold">Order #{1000 + order}</p>
                        <p className="text-sm text-muted-foreground">Placed on: {new Date().toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${(Math.random() * 100 + 50).toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">Status: Delivered</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View All Orders</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="addresses">
            <Card>
              <CardHeader>
                <CardTitle>Manage Addresses</CardTitle>
                <CardDescription>Add or edit your shipping and billing addresses.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Shipping Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <address className="not-italic">
                        John Doe<br />
                        123 Main St<br />
                        Anytown, ST 12345<br />
                        United States
                      </address>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">Edit</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Billing Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <address className="not-italic">
                        John Doe<br />
                        456 Oak Ave<br />
                        Another City, ST 67890<br />
                        United States
                      </address>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">Edit</Button>
                    </CardFooter>
                  </Card>
                </div>
                <Button>Add New Address</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your saved payment methods.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Visa ending in 1234</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Expiry: 12/2025</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Remove</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">PayPal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>john.doe@example.com</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Remove</Button>
                    </CardFooter>
                  </Card>
                </div>
                <Button>Add New Payment Method</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences and security settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive order updates and promotions</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button>Update Password</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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