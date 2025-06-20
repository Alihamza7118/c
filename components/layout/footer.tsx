import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-700 text-white p-2 rounded-lg">
                <span className="font-bold text-lg">ERT</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Ehtisham Riaz Traders</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium agricultural products. Serving farmers across Pakistan with quality and
              excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer" />
              <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-gray-400 hover:text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=pesticides" className="text-gray-400 hover:text-white">
                  Pesticides & Insecticides
                </Link>
              </li>
              <li>
                <Link href="/products?category=fertilizers" className="text-gray-400 hover:text-white">
                  Fertilizers & Nutrients
                </Link>
              </li>
              <li>
                <Link href="/products?category=seeds" className="text-gray-400 hover:text-white">
                  Seeds & Varieties
                </Link>
              </li>
              <li>
                <Link href="/products?category=specialty" className="text-gray-400 hover:text-white">
                  Specialty Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-500" />
                <span className="text-gray-400">+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-500" />
                <span className="text-gray-400">info@ehtishamriaztraders.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-green-500" />
                <span className="text-gray-400">Lahore, Punjab, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Ehtisham Riaz Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
