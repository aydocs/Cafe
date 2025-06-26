"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Camera, Heart, Share2, Download, X, ChevronLeft, ChevronRight, Menu } from "lucide-react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = [
    { id: "all", name: "Tümü", count: 48 },
    { id: "interior", name: "İç Mekan", count: 12 },
    { id: "exterior", name: "Dış Mekan", count: 8 },
    { id: "coffee", name: "Kahveler", count: 15 },
    { id: "food", name: "Yiyecekler", count: 10 },
    { id: "events", name: "Etkinlikler", count: 8 },
    { id: "team", name: "Ekibimiz", count: 6 },
  ]

  const galleryImages = [
    // Interior
    {
      id: 1,
      category: "interior",
      title: "Ana Salon",
      description: "Sıcak ve modern iç mekan tasarımımız",
      image: "/placeholder.svg?height=400&width=600",
      likes: 234,
      photographer: "Ahmet Yılmaz",
    },
    {
      id: 2,
      category: "interior",
      title: "VIP Bölüm",
      description: "Özel toplantılar için ayrılmış alan",
      image: "/placeholder.svg?height=400&width=600",
      likes: 189,
      photographer: "Elif Kaya",
    },
    {
      id: 3,
      category: "interior",
      title: "Çalışma Alanı",
      description: "Laptop dostu sessiz çalışma köşesi",
      image: "/placeholder.svg?height=400&width=600",
      likes: 156,
      photographer: "Mehmet Özkan",
    },
    {
      id: 4,
      category: "interior",
      title: "Kitap Köşesi",
      description: "Okuma keyfi için özel tasarlanmış alan",
      image: "/placeholder.svg?height=400&width=600",
      likes: 198,
      photographer: "Zeynep Demir",
    },

    // Exterior
    {
      id: 5,
      category: "exterior",
      title: "Bahçe Terası",
      description: "Açık havada kahve keyfi",
      image: "/placeholder.svg?height=400&width=600",
      likes: 267,
      photographer: "Can Yıldız",
    },
    {
      id: 6,
      category: "exterior",
      title: "Giriş Cephesi",
      description: "Cafe'mizin şık dış görünümü",
      image: "/placeholder.svg?height=400&width=600",
      likes: 145,
      photographer: "Ayşe Kaya",
    },

    // Coffee
    {
      id: 7,
      category: "coffee",
      title: "Latte Art",
      description: "Barista şefimizin sanat eseri",
      image: "/placeholder.svg?height=400&width=600",
      likes: 456,
      photographer: "Barista Emre",
    },
    {
      id: 8,
      category: "coffee",
      title: "Espresso Shot",
      description: "Mükemmel ekstraksiyon anı",
      image: "/placeholder.svg?height=400&width=600",
      likes: 234,
      photographer: "Barista Selin",
    },
    {
      id: 9,
      category: "coffee",
      title: "Cold Brew",
      description: "Serinletici soğuk demleme",
      image: "/placeholder.svg?height=400&width=600",
      likes: 189,
      photographer: "Barista Emre",
    },
    {
      id: 10,
      category: "coffee",
      title: "Kahve Çekirdekleri",
      description: "Özenle seçilmiş premium çekirdekler",
      image: "/placeholder.svg?height=400&width=600",
      likes: 167,
      photographer: "Ahmet Yılmaz",
    },

    // Food
    {
      id: 11,
      category: "food",
      title: "Tiramisu",
      description: "Ev yapımı İtalyan tatlısı",
      image: "/placeholder.svg?height=400&width=600",
      likes: 345,
      photographer: "Şef Elif",
    },
    {
      id: 12,
      category: "food",
      title: "Avokado Toast",
      description: "Sağlıklı ve lezzetli başlangıç",
      image: "/placeholder.svg?height=400&width=600",
      likes: 278,
      photographer: "Şef Elif",
    },
    {
      id: 13,
      category: "food",
      title: "Croissant",
      description: "Taze fırınlanmış Fransız böreği",
      image: "/placeholder.svg?height=400&width=600",
      likes: 198,
      photographer: "Şef Mehmet",
    },

    // Events
    {
      id: 14,
      category: "events",
      title: "Canlı Müzik Gecesi",
      description: "Cuma akşamı jazz performansı",
      image: "/placeholder.svg?height=400&width=600",
      likes: 423,
      photographer: "Event Team",
    },
    {
      id: 15,
      category: "events",
      title: "Kahve Tadım Etkinliği",
      description: "Özel kahve çeşitlerini keşfedin",
      image: "/placeholder.svg?height=400&width=600",
      likes: 234,
      photographer: "Event Team",
    },

    // Team
    {
      id: 16,
      category: "team",
      title: "Barista Ekibi",
      description: "Uzman barista ekibimiz",
      image: "/placeholder.svg?height=400&width=600",
      likes: 189,
      photographer: "HR Team",
    },
    {
      id: 17,
      category: "team",
      title: "Şef Ekibi",
      description: "Mutfak sanatçılarımız",
      image: "/placeholder.svg?height=400&width=600",
      likes: 156,
      photographer: "HR Team",
    },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? filteredImages.find((img) => img.id === selectedImage) : null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
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
                { href: "/menu", label: "Menü" },
                { href: "/about", label: "Hakkımızda" },
                { href: "/gallery", label: "Galeri", active: true },
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
                { href: "/menu", label: "Menü" },
                { href: "/about", label: "Hakkımızda" },
                { href: "/gallery", label: "Galeri", active: true },
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-6 px-4 py-2">
            <Camera className="h-4 w-4 mr-2" />
            Fotoğraf Galerisi
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cafe Aroma Galerisi</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Cafe'mizin sıcak atmosferini, lezzetli ürünlerimizi ve unutulmaz anlarımızı fotoğraflarla keşfedin
          </p>
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
                {category.name}
                <Badge className="ml-2 bg-gray-100 text-gray-600 text-xs">{category.count}</Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="group hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.image || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors">
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                      <p className="text-white/80 text-xs">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-600">{image.likes}</span>
                    </div>
                    <span className="text-xs text-gray-500">@{image.photographer}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateLightbox("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateLightbox("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedImageData.image || "/placeholder.svg"}
                alt={selectedImageData.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImageData.title}</h3>
                    <p className="text-gray-600">{selectedImageData.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span className="text-gray-600 font-medium">{selectedImageData.likes}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      İndir
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Fotoğrafçı: @{selectedImageData.photographer}</span>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span>Beğen</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>Paylaş</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
