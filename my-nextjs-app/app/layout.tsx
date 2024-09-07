import { Inter } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingBagIcon, SearchIcon, MenuIcon, UserIcon } from "lucide-react"
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ShopNow - Your One-Stop E-commerce Shop',
  description: 'Find the best products at unbeatable prices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b sticky top-0 bg-background z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="text-2xl font-bold text-primary">ShopNow</Link>
                </div>
                <div className="hidden md:block flex-1 max-w-sm mx-4">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input className="pl-10 w-full" placeholder="Search products..." />
                  </div>
                </div>
                <div className="flex items-center">
                  <Link href="/account">
                    <Button variant="ghost" size="icon" className="mr-2">
                      <UserIcon className="h-5 w-5" />
                      <span className="sr-only">User account</span>
                    </Button>
                  </Link>
                  <Link href="/cart">
                    <Button variant="ghost" size="icon">
                      <ShoppingBagIcon className="h-5 w-5" />
                      <span className="sr-only">Shopping cart</span>
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" className="md:hidden ml-2">
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="bg-muted py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-muted-foreground">&copy; 2023 ShopNow. All rights reserved.</p>
                <nav className="flex gap-4 mt-4 md:mt-0">
                  <Link href="/about" className="text-muted-foreground hover:text-primary">About</Link>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
                  <Link href="/terms" className="text-muted-foreground hover:text-primary">Terms</Link>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy</Link>
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}