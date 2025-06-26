"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  User,
  Send,
  Menu,
  X,
  CheckCircle,
  AlertCircle,
  Instagram,
  Facebook,
  Twitter,
  Globe,
  Navigation,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Ad soyad gereklidir"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Ad soyad en az 2 karakter olmalıdır"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-posta adresi gereklidir"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi girin"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Konu gereklidir"
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Konu en az 3 karakter olmalıdır"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesaj gereklidir"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setErrors({})
      }, 3000)
    } catch (error) {
      console.error("Contact form error:", error)
      setErrors({ submit: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Adres",
      details: ["Merkez Mahallesi", "Reyhan Cihan Sokak No:15", "Kadıköy / İstanbul"],
      action: "Yol Tarifi Al",
      actionIcon: <Navigation className="h-4 w-4" />,
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Telefon",
      details: ["+90 212 123 45 67", "+90 532 123 45 67"],
      action: "Ara",
      actionIcon: <Phone className="h-4 w-4" />,
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: "E-posta",
      details: ["info@reyhancihan.com", "rezervasyon@reyhancihan.com"],
      action: "E-posta Gönder",
      actionIcon: <Mail className="h-4 w-4" />,
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Pazar", "08:00 - 23:00", "Son sipariş 22:30"],
      action: "Detaylar",
      actionIcon: <Clock className="h-4 w-4" />,
    },
  ]

  const socialMedia = [
    {
      name: "Instagram",
      handle: "@reyhancihan",
      url: "#",
      icon: <Instagram className="h-6 w-6" />,
      color: "bg-pink-500 hover:bg-pink-600",
    },
    {
      name: "Facebook",
      handle: "Reyhan Cihan Pasta & Cafe",
      url: "#",
      icon: <Facebook className="h-6 w-6" />,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Twitter",
      handle: "@reyhancihan",
      url: "#",
      icon: <Twitter className="h-6 w-6" />,
      color: "bg-sky-500 hover:bg-sky-600",
    },
  ]

  const workingHours = [
    { day: "Pazartesi - Cuma", hours: "08:00 - 23:00" },
    { day: "Cumartesi", hours: "08:00 - 24:00" },
    { day: "Pazar", hours: "09:00 - 23:00" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
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
                { href: "/events", label: "Etkinlikler" },
                { href: "/reservations", label: "Rezervasyon" },
                { href: "/contact", label: "İletişim", active: true },
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
                { href: "/events", label: "Etkinlikler" },
                { href: "/reservations", label: "Rezervasyon" },
                { href: "/contact", label: "İletişim", active: true },
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">İletişim</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Bizimle iletişime geçin. Sorularınızı yanıtlamak ve size yardımcı olmak için buradayız.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">İletişim Bilgileri</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Size en uygun yöntemle ulaşın</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full">
                    {info.actionIcon}
                    <span className="ml-2">{info.action}</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <Card className="bg-white shadow-xl border border-gray-200 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                    Konumumuz
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    {/* Google Maps placeholder */}
                    <div className="text-center text-gray-600">
                      <MapPin className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">Google Haritalar</p>
                      <p className="text-sm">Merkez Mahallesi, Reyhan Cihan Sokak No:15</p>
                      <p className="text-sm">Kadıköy / İstanbul</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Ulaşım Bilgileri</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Toplu Taşıma:</h5>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Metro: Kadıköy (10 dk)</li>
                          <li>• Otobüs: 16, 19, 25</li>
                          <li>• Vapur: Kadıköy İskelesi</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-700 mb-2">Araç ile:</h5>
                        <ul className="text-gray-600 space-y-1">
                          <li>• Ücretsiz vale hizmeti</li>
                          <li>• Yakın otopark alanları</li>
                          <li>• Kolay erişim</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white shadow-xl border border-gray-200">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <MessageSquare className="h-6 w-6 mr-2 text-blue-600" />
                    Bize Yazın
                  </CardTitle>
                  <p className="text-gray-600 mt-2">Sorularınızı, önerilerinizi veya geri bildirimlerinizi paylaşın</p>
                </CardHeader>
                <CardContent className="p-8">
                  {errors.submit && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        {errors.submit}
                      </p>
                    </div>
                  )}

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Mesajınız Gönderildi!</h3>
                      <p className="text-gray-600 mb-4">En kısa sürede size dönüş yapacağız.</p>
                      <div className="bg-green-50 rounded-lg p-4 text-left">
                        <h4 className="font-semibold text-green-900 mb-2">Mesaj Detayları:</h4>
                        <div className="text-sm text-green-800 space-y-1">
                          <p>
                            <strong>Konu:</strong> {formData.subject}
                          </p>
                          <p>
                            <strong>Gönderen:</strong> {formData.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-700 font-medium flex items-center">
                            <User className="h-4 w-4 mr-2 text-blue-600" />
                            Ad Soyad *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                              errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                            }`}
                            placeholder="Adınızı ve soyadınızı girin"
                            disabled={isSubmitting}
                          />
                          {errors.name && (
                            <p className="text-red-600 text-sm flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700 font-medium flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-blue-600" />
                            E-posta *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                              errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                            }`}
                            placeholder="ornek@email.com"
                            disabled={isSubmitting}
                          />
                          {errors.email && (
                            <p className="text-red-600 text-sm flex items-center">
                              <AlertCircle className="h-4 w-4 mr-1" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-700 font-medium">
                          Konu *
                        </Label>
                        <Input
                          id="subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                            errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                          }`}
                          placeholder="Mesajınızın konusu"
                          disabled={isSubmitting}
                        />
                        {errors.subject && (
                          <p className="text-red-600 text-sm flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          Mesaj *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                            errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                          }`}
                          placeholder="Mesajınızı buraya yazın..."
                          rows={6}
                          disabled={isSubmitting}
                        />
                        {errors.message && (
                          <p className="text-red-600 text-sm flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Gönderiliyor...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Mesaj Gönder
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Çalışma Saatlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Size en uygun zamanda ziyaret edin</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg border border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                      </div>
                      <span className="text-gray-600 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Not:</strong> Son sipariş kapanıştan 30 dakika önce alınır. Özel günlerde çalışma saatleri
                    değişebilir.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Sosyal Medyada Bizi Takip Edin</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Güncel haberler, özel fırsatlar ve lezzetli kareler için sosyal medya hesaplarımızı takip edin
          </p>

          <div className="flex justify-center space-x-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div
                  className={`w-16 h-16 ${social.color} rounded-xl flex items-center justify-center mb-4 text-white transition-colors`}
                >
                  {social.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{social.name}</h3>
                <p className="text-gray-600 text-sm">{social.handle}</p>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <Card className="bg-white shadow-lg border border-gray-200 max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web Sitemizi Ziyaret Edin</h3>
                <p className="text-gray-600 mb-4">
                  Menümüz, etkinliklerimiz ve daha fazlası için web sitemizi keşfedin
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/">
                    <Globe className="h-4 w-4 mr-2" />
                    Ana Sayfaya Git
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
