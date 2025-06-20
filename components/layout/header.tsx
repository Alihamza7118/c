"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, Search, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/providers/cart-provider"
import { CartModal } from "@/components/cart/cart-modal"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <header className="bg-white shadow-sm border-b">
        {/* Top Bar */}
        <div className="bg-green-700 text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>+92 300 1234567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>info@ehtishamriaztraders.com</span>
                </div>
              </div>
              <div className="hidden md:block">
                <span>Free Delivery on Orders Above Rs. 5,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-green-700 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">ERT</span>
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-900">Ehtisham Riaz Traders</h1>
                <p className="text-sm text-gray-600">Agricultural Products</p>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Input type="text" placeholder="Search products..." className="pl-10 pr-4" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>

            {/* Cart and Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => setIsCartOpen(true)} className="relative">
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8 mt-4 pt-4 border-t">
            <Link href="/" className="text-gray-700 hover:text-green-700 font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-green-700 font-medium">
              All Products
            </Link>
            <Link href="/products?category=pesticides" className="text-gray-700 hover:text-green-700 font-medium">
              Pesticides
            </Link>
            <Link href="/products?category=fertilizers" className="text-gray-700 hover:text-green-700 font-medium">
              Fertilizers
            </Link>
            <Link href="/products?category=seeds" className="text-gray-700 hover:text-green-700 font-medium">
              Seeds
            </Link>
            <Link href="/companies" className="text-gray-700 hover:text-green-700 font-medium">
              Companies
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-700 font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t">
              <div className="flex flex-col space-y-4">
                <div className="mb-4">
                  <Input type="text" placeholder="Search products..." className="w-full" />
                </div>
                <Link href="/" className="text-gray-700 hover:text-green-700 font-medium py-2">
                  Home
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-green-700 font-medium py-2">
                  All Products
                </Link>
                <Link
                  href="/products?category=pesticides"
                  className="text-gray-700 hover:text-green-700 font-medium py-2"
                >
                  Pesticides
                </Link>
                <Link
                  href="/products?category=fertilizers"
                  className="text-gray-700 hover:text-green-700 font-medium py-2"
                >
                  Fertilizers
                </Link>
                <Link href="/products?category=seeds" className="text-gray-700 hover:text-green-700 font-medium py-2">
                  Seeds
                </Link>
                <Link href="/companies" className="text-gray-700 hover:text-green-700 font-medium py-2">
                  Companies
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-green-700 font-medium py-2">
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
