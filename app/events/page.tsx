"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Coffee,
  Calendar,
  Clock,
  Users,
  MapPin,
  Music,
  BookOpen,
  Heart,
  Star,
  Ticket,
  ArrowRight,
  Menu,
  X,
  Filter,
} from "lucide-react"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const eventCategories = [
    { id: "all", name: "Tüm Etkinlikler", icon: <Calendar className="h-4 w-4" />, count: 12 },
    { id: "music", name: "Canlı Müzik", icon: <Music className="h-4 w-4" />, count: 4 },
    { id: "tasting", name: "Tadım Etkinlikleri", icon: <Coffee className="h-4 w-4" />, count: 3 },
    { id: "workshop", name: "Atölyeler", icon: <BookOpen className="h-4 w-4" />, count: 3 },
    { id: "special", name: "Özel Günler", icon: <Heart className="h-4 w-4" />, count: 2 },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Jazz Gecesi - Trio Performance",
      category: "music",
      date: "2024-03-15",
      time: "20:00",
      duration: "3 saat",
      price: "Ücretsiz",
      capacity: 40,
      registered: 28,
      image: "/placeholder.svg?height=300&width=400",
      description: "Ünlü jazz trio'su ile unutulmaz bir gece. Canlı müzik eşliğinde kahve ve tatlı keyfi.",
      features: ["Canlı Müzik", "Özel Menü", "Rezervasyon Gerekli"],
      artist: "Istanbul Jazz Trio",
      status: "available",
    },
    {
      id: 2,
      title: "Kahve Tadım Atölyesi",
      category: "tasting",
      date: "2024-03-18",
      time: "14:00",
      duration: "2 saat",
      price: "150₺",
      capacity: 15,
      registered: 12,
      image: "/placeholder.svg?height=300&width=400",
      description: "Dünya kahvelerini keşfedin. Profesyonel barista eşliğinde tadım deneyimi.",
      features: ["Uzman Eğitmen", "Sertifika", "Kahve Hediyesi"],
      instructor: "Barista Emre Yılmaz",
      status: "available",
    },
    {
      id: 3,
      title: "Latte Art Workshop",
      category: "workshop",
      date: "2024-03-20",
      time: "16:00",
      duration: "2.5 saat",
      price: "200₺",
      capacity: 12,
      registered: 12,
      image: "/placeholder.svg?height=300&width=400",
      description: "Latte art yapma sanatını öğrenin. Temel tekniklerden ileri seviye desenlere.",
      features: ["Uygulamalı Eğitim", "Malzeme Dahil", "Sertifika"],
      instructor: "Barista Selin Kaya",
      status: "full",
    },
    {
      id: 4,
      title: "Sevgililer Günü Özel Menü",
      category: "special",
      date: "2024-03-14",
      time: "18:00",
      duration: "Tüm gün",
      price: "Menüye göre",
      capacity: 60,
      registered: 45,
      image: "/placeholder.svg?height=300&width=400",
      description: "Sevgililer günü için özel hazırlanmış romantik menü ve atmosfer.",
      features: ["Özel Menü", "Romantik Dekorasyon", "Canlı Müzik"],
      chef: "Şef Elif Özkan",
      status: "available",
    },
    {
      id: 5,
      title: "Akustik Gitar Performansı",
      category: "music",
      date: "2024-03-22",
      time: "19:30",
      duration: "2 saat",
      price: "Ücretsiz",
      capacity: 35,
      registered: 18,
      image: "/placeholder.svg?height=300&width=400",
      description: "Yerel sanatçılardan akustik gitar performansı. Samimi atmosferde müzik keyfi.",
      features: ["Akustik Performans", "Şarkı İstekleri", "Ücretsiz Giriş"],
      artist: "Murat Özdemir",
      status: "available",
    },
    {
      id: 6,
      title: "Kahve Çekirdeği Kavurma Gösterisi",
      category: "tasting",
      date: "2024-03-25",
      time: "15:00",
      duration: "1.5 saat",
      price: "100₺",
      capacity: 20,
      registered: 8,
      image: "/placeholder.svg?height=300&width=400",
      description: "Kahve çekirdeğinin kavurma sürecini canlı olarak izleyin ve tadın.",
      features: ["Canlı Gösteri", "Tadım", "Kavurma Teknikleri"],
      instructor: "Kavurma Uzmanı Ali Demir",
      status: "available",
    },
  ]

  const pastEvents = [
    {
      id: 7,
      title: "Yılbaşı Özel Gecesi",
      date: "2023-12-31",
      image: "/placeholder.svg?height=200&width=300",
      participants: 80,
      rating: 4.9,
      highlights: ["Canlı Müzik", "Özel Menü", "Yılbaşı Sürprizi"],
    },
    {
      id: 8,
      title: "Kahve Kültürü Semineri",
      date: "2023-12-15",
      image: "/placeholder.svg?height=200&width=300",
      participants: 25,
      rating: 4.8,
      highlights: ["Uzman Konuşmacı", "Interaktif Sunum", "Soru-Cevap"],
    },
    {
      id: 9,
      title: "Caz ve Blues Gecesi",
      date: "2023-11-28",
      image: "/placeholder.svg?height=200&width=300",
      participants: 45,
      rating: 4.9,
      highlights: ["Profesyonel Müzisyenler", "Vintage Atmosfer", "Özel Kokteyl"],
    },
  ]

  const filteredEvents =
    selectedCategory === "all" ? upcomingEvents : upcomingEvents.filter((event) => event.category === selectedCategory)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Yer Var</Badge>
      case "full":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Dolu</Badge>
      case "cancelled":
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">İptal</Badge>
      default:
        return null
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "music":
        return <Music className="h-4 w-4 text-blue-600" />
      case "tasting":
        return <Coffee className="h-4 w-4 text-blue-600" />
      case "workshop":
        return <BookOpen className="h-4 w-4 text-blue-600" />
      case "special":
        return <Heart className="h-4 w-4 text-blue-600" />
      default:
        return <Calendar className="h-4 w-4 text-blue-600" />
    }
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    } catch (error) {
      return dateString
    }
  }

  const formatPastDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    } catch (error) {
      return dateString
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Reyhan Cihan</span>
                <p className="text-xs text-gray-600 font-medium">Pasta & Cafe</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/menu", label: "Menü" },
                { href: "/about", label: "Hakkımızda" },
                { href: "/gallery", label: "Galeri" },
                { href: "/events", label: "Etkinlikler", active: true },
                { href: "/reservations", label: "Rezervasyon" },
                { href: "/contact", label: "İletişim" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative ${
                    item.active ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  {item.active && (
                    <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                <Link href="/reservations">Rezervasyon Yap</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menüyü aç/kapat"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/menu", label: "Menü" },
                { href: "/about", label: "Hakkımızda" },
                { href: "/gallery", label: "Galeri" },
                { href: "/events", label: "Etkinlikler", active: true },
                { href: "/reservations", label: "Rezervasyon" },
                { href: "/contact", label: "İletişim" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    item.active ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`}
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
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Badge className="bg-white/20 text-white mb-6 px-4 py-2 border border-white/30">
            <Calendar className="h-4 w-4 mr-2" />
            Etkinlik Takvimi
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Etkinliklerimiz</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Canlı müzik gecelerinden kahve tadım atölyelerine, özel etkinliklerden eğitici workshoplara kadar birçok
            aktivite sizi bekliyor
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Kategori Filtresi
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {eventCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-sm border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                } transition-all duration-200`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
                <Badge
                  className={`ml-2 text-xs ${
                    selectedCategory === category.id
                      ? "bg-white/20 text-white border-white/30"
                      : "bg-gray-100 text-gray-600 border-gray-200"
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Yaklaşan Etkinlikler</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Heyecan verici etkinliklerimize katılın ve unutulmaz anlar yaşayın
            </p>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredEvents.map((event) => (
                <Card
                  key={event.id}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-200 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      {getCategoryIcon(event.category)}
                    </div>
                    <div className="absolute top-4 right-4">{getStatusBadge(event.status)}</div>
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                      <div className="flex items-center text-gray-700 text-sm font-medium">
                        <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                        {formatDate(event.date)}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-3">
                        <Clock className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{event.time}</div>
                          <div className="text-xs text-gray-500">{event.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-3">
                        <Users className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                        <div>
                          <div className="font-medium">
                            {event.registered}/{event.capacity} kişi
                          </div>
                          <div className="text-xs text-gray-500">Kayıtlı</div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-3">
                        <Ticket className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{event.price}</div>
                          <div className="text-xs text-gray-500">Fiyat</div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-3">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Cafe Aroma</div>
                          <div className="text-xs text-gray-500">Lokasyon</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {event.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 border-blue-200 text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {(event.artist || event.instructor || event.chef) && (
                      <div className="mb-6 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800 font-medium">
                          {event.artist && `🎵 Sanatçı: ${event.artist}`}
                          {event.instructor && `👨‍🏫 Eğitmen: ${event.instructor}`}
                          {event.chef && `👨‍🍳 Şef: ${event.chef}`}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Doluluk</span>
                          <span className="font-medium text-gray-900">
                            {Math.round((event.registered / event.capacity) * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min((event.registered / event.capacity) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      <Button
                        disabled={event.status === "full"}
                        className={`${
                          event.status === "full"
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 shadow-sm"
                        } text-white whitespace-nowrap px-6`}
                      >
                        {event.status === "full" ? "Dolu" : "Katıl"}
                        {event.status !== "full" && <ArrowRight className="h-4 w-4 ml-2" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bu kategoride etkinlik bulunamadı</h3>
              <p className="text-gray-600 mb-6">
                Seçtiğiniz kategoride henüz etkinlik bulunmuyor. Diğer kategorileri kontrol edin.
              </p>
              <Button
                onClick={() => setSelectedCategory("all")}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Tüm Etkinlikleri Göster
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Geçmiş Etkinlikler</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Daha önce düzenlediğimiz başarılı etkinliklerden kareler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
              >
                <div className="relative">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 shadow-sm">
                    <div className="flex items-center text-gray-700 text-xs font-medium">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatPastDate(event.date)}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center bg-blue-50 rounded-lg px-3 py-1">
                        <Users className="h-4 w-4 mr-1 text-blue-600" />
                        <span className="font-medium">{event.participants} katılımcı</span>
                      </div>
                      <div className="flex items-center bg-yellow-50 rounded-lg px-3 py-1">
                        <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{event.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-green-50 text-green-700 border-green-200 text-xs"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Etkinliklerimizi Kaçırmayın!</h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Yeni etkinliklerden haberdar olmak için bültenimize abone olun ve özel fırsatları yakalayın
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg px-8 py-3">
              <Link href="/contact">
                <Calendar className="h-5 w-5 mr-2" />
                Etkinlik Takvimi
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
            >
              <Link href="/reservations">
                <Ticket className="h-5 w-5 mr-2" />
                Rezervasyon Yap
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
