"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Coffee,
  Star,
  Heart,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChefHat,
  Wifi,
  Car,
  CreditCard,
  Gift,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Award,
  Leaf,
  Utensils,
  Camera,
  Menu,
  X,
  CheckCircle,
  Quote,
  BookOpen,
  Newspaper,
} from "lucide-react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [email, setEmail] = useState("")
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false)
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const heroSlides = [
    {
      title: "Reyhan Cihan",
      subtitle: "Pasta & Cafe",
      description: "Premium kahve deneyimi ve el yapımı pastalarla unutulmaz anlar",
      image: "/placeholder.svg?height=1080&width=1920",
      cta: "Menüyü Keşfet",
    },
    {
      title: "Artisan Kahveler",
      subtitle: "Dünya Standartında",
      description: "Özenle seçilmiş çekirdeklerden hazırlanan mükemmel kahve deneyimi",
      image: "/placeholder.svg?height=1080&width=1920",
      cta: "Kahvelerimizi Gör",
    },
    {
      title: "El Yapımı Pastalar",
      subtitle: "Geleneksel Lezzetler",
      description: "Geleneksel tariflerle modern dokunuşların buluştuğu eşsiz tatlar",
      image: "/placeholder.svg?height=1080&width=1920",
      cta: "Pastalarımızı Keşfet",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Signature Tiramisu",
      description: "İtalyan usulü hazırlanan, özel mascarpone kreması ve taze kahve ile",
      price: "85₺",
      originalPrice: "95₺",
      image: "/placeholder.svg?height=400&width=400",
      badge: "En Popüler",
      rating: 4.9,
      reviews: 342,
      category: "Tatlı",
    },
    {
      id: 2,
      name: "Artisan Cappuccino",
      description: "Özenle seçilmiş çekirdeklerden hazırlanan, latte art ile süslenmiş",
      price: "45₺",
      originalPrice: "52₺",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Barista Özel",
      rating: 4.8,
      reviews: 256,
      category: "Kahve",
    },
    {
      id: 3,
      name: "Truffle Cheesecake",
      description: "Premium çikolata truffle ile zenginleştirilmiş cheesecake",
      price: "75₺",
      originalPrice: "85₺",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Yeni",
      rating: 4.9,
      reviews: 89,
      category: "Tatlı",
    },
    {
      id: 4,
      name: "Gourmet Sandwich",
      description: "Premium malzemelerle hazırlanan, taze sebzeler ve özel soslar",
      price: "65₺",
      originalPrice: "75₺",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Şef Önerisi",
      rating: 4.7,
      reviews: 189,
      category: "Ana Yemek",
    },
    {
      id: 5,
      name: "Seasonal Fruit Tart",
      description: "Mevsim meyvelerinden hazırlanan, özel krema ile süslenmiş tart",
      price: "70₺",
      originalPrice: "80₺",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Mevsimlik",
      rating: 4.8,
      reviews: 156,
      category: "Tatlı",
    },
    {
      id: 6,
      name: "Turkish Coffee Set",
      description: "Geleneksel Türk kahvesi, lokum ve su ile özel sunum",
      price: "35₺",
      originalPrice: "40₺",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Geleneksel",
      rating: 4.9,
      reviews: 298,
      category: "Kahve",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Ayşe Demir",
      role: "Food Blogger",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment: "Reyhan Cihan Pasta & Cafe, İstanbul'un en iyi pastanesi! Tiramisu'ları efsane, atmosfer muhteşem.",
      date: "2 gün önce",
      verified: true,
    },
    {
      id: 2,
      name: "Mehmet Kaya",
      role: "İş İnsanı",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment: "İş toplantılarım için mükemmel bir mekan. Kahveleri dünya standartında, servis kalitesi harika.",
      date: "1 hafta önce",
      verified: true,
    },
    {
      id: 3,
      name: "Zeynep Özkan",
      role: "Influencer",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment: "Instagram'da paylaştığım fotoğraflar viral oldu! Hem lezzet hem görsellik açısından mükemmel.",
      date: "2 hafta önce",
      verified: true,
    },
    {
      id: 4,
      name: "Can Yılmaz",
      role: "Müzisyen",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment: "Canlı müzik gecelerinde sahne aldığım en sevdiğim mekan. Akustik mükemmel, atmosfer sıcak.",
      date: "3 hafta önce",
      verified: true,
    },
    {
      id: 5,
      name: "Elif Şahin",
      role: "Öğretmen",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment: "Öğrenci velileriyle toplantılarımızı burada yapıyoruz. Sakin ortam ve lezzetli kahve.",
      date: "1 ay önce",
      verified: true,
    },
    {
      id: 6,
      name: "Ahmet Özdemir",
      role: "Fotoğrafçı",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment: "Düğün fotoğrafları için gelenlere burayı öneriyorum. Dekor ve ışık harika!",
      date: "1 ay önce",
      verified: true,
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Kahve Çekirdeğinden Fincana: Mükemmel Espresso'nun Sırları",
      excerpt: "Dünya standartında espresso hazırlamanın püf noktalarını ve kullandığımız özel teknikleri keşfedin.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Barista Emre",
      date: "15 Şubat 2024",
      readTime: "5 dk",
      category: "Kahve",
    },
    {
      id: 2,
      title: "Mevsimlik Tatlılarımızın Hikayesi",
      excerpt: "Her mevsim özel olarak hazırladığımız tatlıların arkasındaki ilham ve tarifler.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Şef Elif",
      date: "12 Şubat 2024",
      readTime: "4 dk",
      category: "Tatlı",
    },
    {
      id: 3,
      title: "Sürdürülebilir Kahve: Çevre Dostu Uygulamalarımız",
      excerpt: "Çevre dostu kahve üretimi ve sürdürülebilirlik konusundaki yaklaşımımız.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Reyhan Cihan",
      date: "8 Şubat 2024",
      readTime: "6 dk",
      category: "Sürdürülebilirlik",
    },
  ]

  const pressFeatures = [
    {
      id: 1,
      publication: "Time Out İstanbul",
      title: "İstanbul'un En İyi 10 Cafe'si",
      excerpt: "Reyhan Cihan Pasta & Cafe, benzersiz atmosferi ve kaliteli ürünleriyle listenin zirvesinde.",
      date: "Ocak 2024",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      id: 2,
      publication: "Hürriyet Gazetesi",
      title: "Kadıköy'ün Yükselen Yıldızı",
      excerpt: "Geleneksel lezzetleri modern dokunuşlarla buluşturan cafe, bölgenin gözdesi oldu.",
      date: "Aralık 2023",
      logo: "/placeholder.svg?height=60&width=120",
    },
    {
      id: 3,
      publication: "Gastronomi Dergisi",
      title: "Yılın Pastanesi Ödülü",
      excerpt: "Jürimiz, Reyhan Cihan'ı el yapımı pastalar kategorisinde yılın en iyisi seçti.",
      date: "Kasım 2023",
      logo: "/placeholder.svg?height=60&width=120",
    },
  ]

  const awards = [
    {
      id: 1,
      title: "İstanbul'un En İyi Pastanesi",
      organization: "İstanbul Gastronomi Derneği",
      year: "2023",
      icon: <Award className="h-8 w-8 text-yellow-500" />,
    },
    {
      id: 2,
      title: "Müşteri Memnuniyeti Ödülü",
      organization: "TripAdvisor",
      year: "2023",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
    },
    {
      id: 3,
      title: "Sürdürülebilirlik Sertifikası",
      organization: "Yeşil İşletmeler Birliği",
      year: "2023",
      icon: <Leaf className="h-8 w-8 text-green-500" />,
    },
    {
      id: 4,
      title: "En İyi Kahve Deneyimi",
      organization: "Coffee Masters Turkey",
      year: "2022",
      icon: <Coffee className="h-8 w-8 text-brown-500" />,
    },
  ]

  const stats = [
    { number: "50K+", label: "Mutlu Müşteri", icon: <Users className="h-6 w-6" /> },
    { number: "4.9", label: "Müşteri Puanı", icon: <Star className="h-6 w-6" /> },
    { number: "25+", label: "Özel Tarif", icon: <ChefHat className="h-6 w-6" /> },
    { number: "8", label: "Yıllık Deneyim", icon: <Award className="h-6 w-6" /> },
  ]

  const features = [
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Ücretsiz WiFi",
      description: "Yüksek hızlı internet",
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Vale Hizmeti",
      description: "Güvenli otopark",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Dijital Ödeme",
      description: "Tüm kartlar kabul edilir",
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Hediye Kartı",
      description: "Özel günler için",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsNewsletterSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setNewsletterSuccess(true)
      setEmail("")
      setTimeout(() => setNewsletterSuccess(false), 3000)
    } catch (error) {
      console.error("Newsletter error:", error)
    } finally {
      setIsNewsletterSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
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
                { href: "/", label: "Ana Sayfa", active: true },
                { href: "/menu", label: "Menü" },
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
                { href: "/", label: "Ana Sayfa", active: true },
                { href: "/menu", label: "Menü" },
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

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slide.image}')`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white mb-6 px-4 py-2">Premium Coffee & Dessert Experience</Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">{heroSlides[currentSlide].title}</span>
              <span className="block text-blue-300 text-3xl md:text-5xl lg:text-6xl">
                {heroSlides[currentSlide].subtitle}
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              {heroSlides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/menu" className="flex items-center">
                  <Utensils className="h-5 w-5 mr-2" />
                  {heroSlides[currentSlide].cta}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Link href="/gallery" className="flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  Galeriyi İncele
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Size Özel Ayrıcalıklar</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Konforunuz ve memnuniyetiniz için özel olarak tasarlanmış hizmetlerimiz
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Öne Çıkan Lezzetler</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Şefimizin Özel Seçkisi</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              En kaliteli malzemeler ve geleneksel yöntemlerle hazırlanan, müşterilerimizin en çok sevdiği ürünlerimiz
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="absolute top-3 left-3 bg-blue-600 text-white">{product.badge}</Badge>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Coffee className="h-4 w-4 mr-2" />
                    Sipariş Ver
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/menu">
                Tüm Menüyü Görüntüle
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">Ödüllerimiz</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Başarılarımız</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kalitemiz ve hizmetimiz sektörde tanınıyor ve ödüllendiriliyor
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award) => (
              <Card key={award.id} className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {award.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{award.organization}</p>
                  <Badge className="bg-blue-100 text-blue-800">{award.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-800 mb-4">
              <BookOpen className="h-4 w-4 mr-2" />
              Blog
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kahve Dünyasından Haberler</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kahve kültürü, tarifler ve cafe dünyasından en güncel yazılarımız
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800">{post.category}</Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                Tüm Yazıları Oku
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Press Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-gray-100 text-gray-800 mb-4">
              <Newspaper className="h-4 w-4 mr-2" />
              Basında Biz
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Medyada Yer Aldığımız Haberler</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prestijli yayın organlarında yer alan haberlerimiz ve röportajlarımız
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pressFeatures.map((feature) => (
              <Card key={feature.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={feature.logo || "/placeholder.svg"}
                      alt={feature.publication}
                      className="h-8 object-contain"
                    />
                    <Badge className="ml-auto bg-blue-100 text-blue-800 text-xs">{feature.date}</Badge>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 mb-4">Doğrulanmış Yorumlar</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Müşterilerimizin Deneyimleri</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Binlerce mutlu müşterimizin gerçek yorumlarını okuyun
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                        {testimonial.verified && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Doğrulandı
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                  </div>

                  <div className="relative">
                    <Quote className="h-6 w-6 text-gray-300 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-4">{testimonial.comment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Özel Fırsatları Kaçırmayın!</h2>
          <p className="text-lg mb-8 text-blue-100">
            Yeni ürünler, özel indirimler ve etkinliklerden ilk siz haberdar olun
          </p>

          {newsletterSuccess ? (
            <div className="bg-white/20 rounded-lg p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Başarıyla Kaydoldunuz!</h3>
              <p className="text-blue-100">E-posta adresinize hoş geldin mesajı gönderildi.</p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  required
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/70"
                />
                <Button
                  type="submit"
                  disabled={isNewsletterSubmitting}
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  {isNewsletterSubmitting ? "Gönderiliyor..." : "Abone Ol"}
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-3">
                Spam göndermiyoruz. İstediğiniz zaman abonelikten çıkabilirsiniz.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-blue-400" />,
                title: "Açılış Saatleri",
                content: ["Pazartesi - Cuma: 07:30 - 23:30", "Hafta Sonu: 08:00 - 24:00"],
              },
              {
                icon: <MapPin className="h-8 w-8 text-blue-400" />,
                title: "Lokasyon",
                content: ["Merkez Mahallesi", "Reyhan Cihan Sokak No:15", "Kadıköy / İstanbul"],
              },
              {
                icon: <Phone className="h-8 w-8 text-blue-400" />,
                title: "İletişim",
                content: ["+90 216 456 78 90", "+90 532 456 78 90", "7/24 rezervasyon"],
              },
              {
                icon: <Users className="h-8 w-8 text-blue-400" />,
                title: "Kapasite",
                content: ["İç Mekan: 80 Kişi", "Bahçe: 50 Kişi", "VIP salon mevcut"],
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <div className="space-y-1 text-gray-300 text-sm">
                  {item.content.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Coffee className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-lg font-bold">Reyhan Cihan</span>
                  <p className="text-xs text-gray-400">Pasta & Cafe</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                2016'dan beri kaliteli pasta ve kahve ile, her anınızı özel kılıyoruz.
              </p>
              <div className="flex space-x-3">
                {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/menu", label: "Menü" },
                  { href: "/about", label: "Hakkımızda" },
                  { href: "/gallery", label: "Galeri" },
                  { href: "/events", label: "Etkinlikler" },
                  { href: "/reservations", label: "Rezervasyon" },
                  { href: "/contact", label: "İletişim" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Özel Hizmetler</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Leaf className="h-4 w-4 mr-2 text-green-400" />
                  Organik Ürünler
                </li>
                <li className="flex items-center">
                  <Gift className="h-4 w-4 mr-2 text-pink-400" />
                  Hediye Paketleme
                </li>
                <li className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-blue-400" />
                  Özel Etkinlikler
                </li>
                <li className="flex items-center">
                  <Car className="h-4 w-4 mr-2 text-purple-400" />
                  Vale Hizmeti
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">İletişim Bilgileri</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <div>
                    <p>Merkez Mahallesi, Reyhan Cihan Sokak No:15</p>
                    <p>Kadıköy / İstanbul</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <p>+90 216 456 78 90</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <p>info@reyhancihan.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2024 Reyhan Cihan Pasta & Cafe. Tüm hakları saklıdır.
              </p>
              <div className="flex space-x-6 text-sm">
                {[
                  { href: "/privacy", label: "Gizlilik Politikası" },
                  { href: "/terms", label: "Kullanım Şartları" },
                  { href: "/admin", label: "Admin" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
