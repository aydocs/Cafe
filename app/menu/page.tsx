"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Coffee,
  Search,
  Star,
  Heart,
  ShoppingCart,
  Menu,
  X,
  Clock,
  Utensils,
  Snowflake,
  Flame,
  Salad,
} from "lucide-react"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sortBy, setSortBy] = useState("popular")

  const categories = [
    { id: "all", name: "Tümü", count: 68, icon: <Utensils className="h-4 w-4" /> },
    { id: "coffee", name: "Kahveler", count: 18, icon: <Coffee className="h-4 w-4" /> },
    { id: "desserts", name: "Tatlılar", count: 16, icon: <Heart className="h-4 w-4" /> },
    { id: "sandwiches", name: "Sandviçler", count: 12, icon: <Utensils className="h-4 w-4" /> },
    { id: "breakfast", name: "Kahvaltı", count: 10, icon: <Clock className="h-4 w-4" /> },
    { id: "cold-drinks", name: "Soğuk İçecekler", count: 8, icon: <Snowflake className="h-4 w-4" /> },
    { id: "hot-drinks", name: "Sıcak İçecekler", count: 6, icon: <Flame className="h-4 w-4" /> },
    { id: "salads", name: "Salatalar", count: 8, icon: <Salad className="h-4 w-4" /> },
  ]

  const menuItems = [
    // Kahveler
    {
      id: 1,
      name: "Signature Espresso",
      category: "coffee",
      price: 35,
      originalPrice: 40,
      description: "Özenle seçilmiş çekirdeklerden hazırlanan yoğun ve aromatik espresso",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 234,
      isPopular: true,
      isNew: false,
      allergens: ["Kafein"],
      preparationTime: "2-3 dk",
      calories: 5,
    },
    {
      id: 2,
      name: "Artisan Cappuccino",
      category: "coffee",
      price: 45,
      originalPrice: 50,
      description: "Kremsi süt köpüğü ve latte art ile süslenmiş mükemmel cappuccino",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 189,
      isPopular: true,
      isNew: false,
      allergens: ["Süt", "Kafein"],
      preparationTime: "3-4 dk",
      calories: 120,
    },
    {
      id: 3,
      name: "Caramel Macchiato",
      category: "coffee",
      price: 50,
      originalPrice: 55,
      description: "Karamel şurubu ve vanilya aroması ile zenginleştirilmiş özel macchiato",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 156,
      isPopular: false,
      isNew: true,
      allergens: ["Süt", "Kafein"],
      preparationTime: "4-5 dk",
      calories: 180,
    },
    {
      id: 4,
      name: "Turkish Coffee",
      category: "coffee",
      price: 25,
      originalPrice: 30,
      description: "Geleneksel Türk kahvesi, lokum ve su ile servis edilir",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 298,
      isPopular: true,
      isNew: false,
      allergens: ["Kafein"],
      preparationTime: "5-6 dk",
      calories: 10,
    },
    {
      id: 5,
      name: "Flat White",
      category: "coffee",
      price: 42,
      originalPrice: 48,
      description: "Avustralya usulü hazırlanan, mikroköpük ile mükemmel denge",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 167,
      isPopular: false,
      isNew: false,
      allergens: ["Süt", "Kafein"],
      preparationTime: "3-4 dk",
      calories: 110,
    },
    {
      id: 6,
      name: "Mocha Supreme",
      category: "coffee",
      price: 55,
      originalPrice: 62,
      description: "Premium çikolata ve espresso'nun mükemmel uyumu",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 203,
      isPopular: false,
      isNew: false,
      allergens: ["Süt", "Kafein", "Çikolata"],
      preparationTime: "4-5 dk",
      calories: 220,
    },

    // Tatlılar
    {
      id: 7,
      name: "Signature Tiramisu",
      category: "desserts",
      price: 85,
      originalPrice: 95,
      description: "İtalyan usulü hazırlanan, özel mascarpone kreması ve taze kahve ile",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 342,
      isPopular: true,
      isNew: false,
      allergens: ["Yumurta", "Süt", "Gluten"],
      preparationTime: "Hazır",
      calories: 320,
    },
    {
      id: 8,
      name: "Chocolate Lava Cake",
      category: "desserts",
      price: 75,
      originalPrice: 85,
      description: "İçinden çikolata akan sıcak kek, vanilyalı dondurma ile servis",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 267,
      isPopular: true,
      isNew: false,
      allergens: ["Yumurta", "Süt", "Gluten"],
      preparationTime: "8-10 dk",
      calories: 450,
    },
    {
      id: 9,
      name: "Seasonal Fruit Tart",
      category: "desserts",
      price: 65,
      originalPrice: 75,
      description: "Mevsim meyvelerinden hazırlanan, özel krema ile süslenmiş tart",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 198,
      isPopular: false,
      isNew: true,
      allergens: ["Yumurta", "Süt", "Gluten"],
      preparationTime: "Hazır",
      calories: 280,
    },
    {
      id: 10,
      name: "Cheesecake New York",
      category: "desserts",
      price: 70,
      originalPrice: 80,
      description: "Kremsi Philadelphia peyniri ile hazırlanan klasik New York cheesecake",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 223,
      isPopular: true,
      isNew: false,
      allergens: ["Yumurta", "Süt", "Gluten"],
      preparationTime: "Hazır",
      calories: 380,
    },
    {
      id: 11,
      name: "Baklava Selection",
      category: "desserts",
      price: 45,
      originalPrice: 52,
      description: "Geleneksel Türk baklavası, fıstık ve ceviz çeşitleri",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 189,
      isPopular: false,
      isNew: false,
      allergens: ["Fındık", "Ceviz", "Gluten"],
      preparationTime: "Hazır",
      calories: 250,
    },
    {
      id: 12,
      name: "Crème Brûlée",
      category: "desserts",
      price: 68,
      originalPrice: 75,
      description: "Vanilya aromalı krema üzerinde karamelize şeker tabakası",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 156,
      isPopular: false,
      isNew: false,
      allergens: ["Yumurta", "Süt"],
      preparationTime: "Hazır",
      calories: 290,
    },

    // Sandviçler
    {
      id: 13,
      name: "Gourmet Club Sandwich",
      category: "sandwiches",
      price: 65,
      originalPrice: 75,
      description: "Premium tavuk, avokado, domates ve özel soslarla hazırlanan sandwich",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 189,
      isPopular: true,
      isNew: false,
      allergens: ["Gluten", "Yumurta"],
      preparationTime: "8-10 dk",
      calories: 520,
    },
    {
      id: 14,
      name: "Avocado Toast Deluxe",
      category: "sandwiches",
      price: 55,
      originalPrice: 65,
      description: "Taze avokado, cherry domates, feta peyniri ve özel baharatlar",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 156,
      isPopular: false,
      isNew: false,
      allergens: ["Gluten", "Süt"],
      preparationTime: "5-7 dk",
      calories: 420,
    },
    {
      id: 15,
      name: "Smoked Salmon Bagel",
      category: "sandwiches",
      price: 78,
      originalPrice: 85,
      description: "Füme somon, krem peynir, kapari ve soğan ile bagel",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 134,
      isPopular: false,
      isNew: true,
      allergens: ["Gluten", "Süt", "Balık"],
      preparationTime: "6-8 dk",
      calories: 480,
    },
    {
      id: 16,
      name: "Grilled Chicken Panini",
      category: "sandwiches",
      price: 62,
      originalPrice: 70,
      description: "Izgara tavuk, mozzarella, domates ve pesto soslu panini",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 178,
      isPopular: false,
      isNew: false,
      allergens: ["Gluten", "Süt"],
      preparationTime: "10-12 dk",
      calories: 550,
    },

    // Kahvaltı
    {
      id: 17,
      name: "Turkish Breakfast",
      category: "breakfast",
      price: 95,
      originalPrice: 110,
      description: "Geleneksel Türk kahvaltısı - peynir, zeytin, reçel, bal, yumurta",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 278,
      isPopular: true,
      isNew: false,
      allergens: ["Yumurta", "Süt", "Gluten"],
      preparationTime: "15-20 dk",
      calories: 650,
    },
    {
      id: 18,
      name: "Pancake Stack",
      category: "breakfast",
      price: 65,
      originalPrice: 75,
      description: "Üç katlı pancake, akçaağaç şurubu ve taze meyveler ile",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 198,
      isPopular: false,
      isNew: false,
      allergens: ["Yumurta", "Süt", "Gluten"],
      preparationTime: "10-12 dk",
      calories: 580,
    },
    {
      id: 19,
      name: "Eggs Benedict",
      category: "breakfast",
      price: 72,
      originalPrice: 80,
      description: "Poşe yumurta, jambon ve hollandaise sos ile İngiliz muffin",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 145,
      isPopular: false,
      isNew: false,
      allergens: ["Yumurta", "Süt", "Gluten"],
      preparationTime: "12-15 dk",
      calories: 620,
    },
    {
      id: 20,
      name: "Granola Bowl",
      category: "breakfast",
      price: 48,
      originalPrice: 55,
      description: "Ev yapımı granola, yoğurt, taze meyveler ve bal",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 167,
      isPopular: false,
      isNew: false,
      allergens: ["Süt", "Fındık"],
      preparationTime: "5-7 dk",
      calories: 380,
    },
    {
      id: 21,
      name: "French Toast",
      category: "breakfast",
      price: 58,
      originalPrice: 65,
      description: "Brioche ekmeği, vanilya ve tarçın ile hazırlanmış",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 189,
      isPopular: false,
      isNew: false,
      allergens: ["Yumurta", "Süt", "Gluten"],
      preparationTime: "8-10 dk",
      calories: 450,
    },

    // Soğuk İçecekler
    {
      id: 22,
      name: "Iced Caramel Latte",
      category: "cold-drinks",
      price: 45,
      originalPrice: 50,
      description: "Buzlu karamel latte, özel krema ile süslenmiş",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 145,
      isPopular: false,
      isNew: false,
      allergens: ["Süt", "Kafein"],
      preparationTime: "3-4 dk",
      calories: 200,
    },
    {
      id: 23,
      name: "Fresh Lemonade",
      category: "cold-drinks",
      price: 35,
      originalPrice: 40,
      description: "Taze sıkılmış limon suyu, nane ve buz ile serinletici içecek",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 123,
      isPopular: false,
      isNew: false,
      allergens: [],
      preparationTime: "2-3 dk",
      calories: 80,
    },
    {
      id: 24,
      name: "Tropical Smoothie",
      category: "cold-drinks",
      price: 55,
      originalPrice: 65,
      description: "Mango, ananas ve hindistan cevizi ile hazırlanan tropikal smoothie",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 189,
      isPopular: true,
      isNew: true,
      allergens: [],
      preparationTime: "4-5 dk",
      calories: 150,
    },
    {
      id: 25,
      name: "Cold Brew Coffee",
      category: "cold-drinks",
      price: 38,
      originalPrice: 45,
      description: "12 saat soğuk demleme yöntemi ile hazırlanan özel kahve",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 167,
      isPopular: false,
      isNew: false,
      allergens: ["Kafein"],
      preparationTime: "2-3 dk",
      calories: 15,
    },
    {
      id: 26,
      name: "Iced Tea Selection",
      category: "cold-drinks",
      price: 32,
      originalPrice: 38,
      description: "Earl Grey, yeşil çay veya meyve çayı seçenekleri",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.4,
      reviews: 98,
      isPopular: false,
      isNew: false,
      allergens: [],
      preparationTime: "2-3 dk",
      calories: 25,
    },

    // Sıcak İçecekler
    {
      id: 27,
      name: "Hot Chocolate Supreme",
      category: "hot-drinks",
      price: 42,
      originalPrice: 48,
      description: "Premium çikolata, marshmallow ve krema ile",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 156,
      isPopular: false,
      isNew: false,
      allergens: ["Süt", "Çikolata"],
      preparationTime: "4-5 dk",
      calories: 280,
    },
    {
      id: 28,
      name: "Chai Latte",
      category: "hot-drinks",
      price: 40,
      originalPrice: 45,
      description: "Geleneksel baharat karışımı ile hazırlanan sıcak içecek",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 134,
      isPopular: false,
      isNew: false,
      allergens: ["Süt"],
      preparationTime: "3-4 dk",
      calories: 160,
    },
    {
      id: 29,
      name: "Herbal Tea Collection",
      category: "hot-drinks",
      price: 28,
      originalPrice: 32,
      description: "Papatya, nane, adaçayı ve bitki çayı seçenekleri",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 89,
      isPopular: false,
      isNew: false,
      allergens: [],
      preparationTime: "3-4 dk",
      calories: 5,
    },

    // Salatalar
    {
      id: 30,
      name: "Caesar Salad",
      category: "salads",
      price: 58,
      originalPrice: 65,
      description: "Klasik Caesar salatası, tavuk, kruton ve parmesan ile",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 167,
      isPopular: false,
      isNew: false,
      allergens: ["Süt", "Gluten", "Yumurta"],
      preparationTime: "8-10 dk",
      calories: 420,
    },
    {
      id: 31,
      name: "Mediterranean Bowl",
      category: "salads",
      price: 62,
      originalPrice: 70,
      description: "Akdeniz salatası, feta peyniri, zeytin ve zeytinyağı",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 145,
      isPopular: true,
      isNew: false,
      allergens: ["Süt"],
      preparationTime: "6-8 dk",
      calories: 380,
    },
    {
      id: 32,
      name: "Quinoa Power Bowl",
      category: "salads",
      price: 65,
      originalPrice: 72,
      description: "Kinoa, avokado, nar, fındık ve özel sos ile",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 123,
      isPopular: false,
      isNew: true,
      allergens: ["Fındık"],
      preparationTime: "7-9 dk",
      calories: 450,
    },
    {
      id: 33,
      name: "Seasonal Green Salad",
      category: "salads",
      price: 48,
      originalPrice: 55,
      description: "Mevsim yeşillikleri, cherry domates ve balsamic sos",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 98,
      isPopular: false,
      isNew: false,
      allergens: [],
      preparationTime: "5-7 dk",
      calories: 180,
    },
  ]

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "popular":
      default:
        return b.reviews - a.reviews
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Reyhan Cihan</span>
                <p className="text-xs text-gray-600">Pasta & Cafe</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/menu", label: "Menü", active: true },
                { href: "/about", label: "Hakkımızda" },
                { href: "/gallery", label: "Galeri" },
                { href: "/events", label: "Etkinlikler" },
                { href: "/reservations", label: "Rezervasyon" },
                { href: "/contact", label: "İletişim" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    item.active ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/reservations">Rezervasyon Yap</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/menu", label: "Menü", active: true },
                { href: "/about", label: "Hakkımızda" },
                { href: "/gallery", label: "Galeri" },
                { href: "/events", label: "Etkinlikler" },
                { href: "/reservations", label: "Rezervasyon" },
                { href: "/contact", label: "İletişim" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 text-sm font-medium ${item.active ? "text-blue-600" : "text-gray-700"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
                <Link href="/reservations" onClick={() => setMobileMenuOpen(false)}>
                  Rezervasyon Yap
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-6 px-4 py-2">
            <Utensils className="h-4 w-4 mr-2" />
            Lezzetli Menümüz
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Menümüz</h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Özenle seçilmiş malzemelerle hazırlanan lezzetli ürünlerimizi keşfedin
          </p>

          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
              <Input
                type="text"
                placeholder="Ürün ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder-white/70"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/20 border border-white/30 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="popular" className="text-gray-800">
                En Popüler
              </option>
              <option value="rating" className="text-gray-800">
                En Yüksek Puan
              </option>
              <option value="price-low" className="text-gray-800">
                Fiyat (Düşük-Yüksek)
              </option>
              <option value="price-high" className="text-gray-800">
                Fiyat (Yüksek-Düşük)
              </option>
            </select>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                } transition-colors`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
                <Badge className="ml-2 bg-gray-100 text-gray-600 text-xs">{category.count}</Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {item.isPopular && <Badge className="bg-blue-600 text-white text-xs">En Popüler</Badge>}
                    {item.isNew && <Badge className="bg-green-600 text-white text-xs">Yeni</Badge>}
                  </div>

                  {/* Heart Icon */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>

                  {/* Discount Badge */}
                  {item.originalPrice && (
                    <div className="absolute bottom-3 right-3 bg-red-500 text-white rounded-md px-2 py-1 text-xs font-semibold">
                      %{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)} İndirim
                    </div>
                  )}

                  {/* Preparation Time */}
                  <div className="absolute bottom-3 left-3 bg-gray-900 text-white rounded-md px-2 py-1 text-xs">
                    <Clock className="h-3 w-3 inline mr-1" />
                    {item.preparationTime}
                  </div>
                </div>

                <CardContent className="p-4">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-2">
                        {item.rating} ({item.reviews})
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{item.calories} kcal</span>
                  </div>

                  {/* Name */}
                  <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>

                  {/* Allergens */}
                  {item.allergens.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.allergens.map((allergen, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                          {allergen}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{item.price}₺</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{item.originalPrice}₺</span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Sepete Ekle
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {sortedItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ürün Bulunamadı</h3>
              <p className="text-gray-600 mb-6">
                Aradığınız kriterlere uygun ürün bulunamadı. Lütfen farklı bir arama yapın.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
                variant="outline"
              >
                Filtreleri Temizle
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lezzetlerimizi Denemeye Hazır mısınız?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Rezervasyon yapın ve özel atmosferimizde bu lezzetleri deneyimleyin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/reservations">Rezervasyon Yap</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/contact">İletişime Geç</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
