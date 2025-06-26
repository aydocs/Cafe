"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Coffee,
  Calendar,
  Users,
  Clock,
  Phone,
  User,
  MessageSquare,
  Menu,
  X,
  MapPin,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react"

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
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

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon numarası gereklidir"
    } else if (!/^[+]?[0-9\s\-$$$$]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Geçerli bir telefon numarası girin"
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi girin"
    }

    if (!formData.date) {
      newErrors.date = "Tarih seçimi gereklidir"
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      if (selectedDate < today) {
        newErrors.date = "Geçmiş bir tarih seçilemez"
      }

      // Check if date is more than 3 months in future
      const maxDate = new Date()
      maxDate.setMonth(maxDate.getMonth() + 3)
      if (selectedDate > maxDate) {
        newErrors.date = "En fazla 3 ay sonrası için rezervasyon yapabilirsiniz"
      }
    }

    if (!formData.time) {
      newErrors.time = "Saat seçimi gereklidir"
    }

    if (!formData.guests) {
      newErrors.guests = "Kişi sayısı seçimi gereklidir"
    } else if (Number.parseInt(formData.guests) < 1 || Number.parseInt(formData.guests) > 12) {
      newErrors.guests = "Kişi sayısı 1-12 arasında olmalıdır"
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
    } catch (error) {
      console.error("Reservation error:", error)
      setErrors({ submit: "Rezervasyon gönderilirken bir hata oluştu. Lütfen tekrar deneyin." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
  ]

  const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1)

  // Get today's date for min date
  const today = new Date().toISOString().split("T")[0]

  // Get max date (3 months from now)
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateString = maxDate.toISOString().split("T")[0]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md mx-auto bg-white shadow-xl border border-gray-200">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rezervasyon Alındı!</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Rezervasyonunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-blue-50 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-blue-900 mb-2">Rezervasyon Detayları:</h3>
                <div className="text-sm text-blue-800 space-y-1">
                  <p>
                    <strong>Ad:</strong> {formData.name}
                  </p>
                  <p>
                    <strong>Tarih:</strong> {new Date(formData.date).toLocaleDateString("tr-TR")}
                  </p>
                  <p>
                    <strong>Saat:</strong> {formData.time}
                  </p>
                  <p>
                    <strong>Kişi:</strong> {formData.guests} kişi
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                <Link href="/">Ana Sayfaya Dön</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    date: "",
                    time: "",
                    guests: "",
                    specialRequests: "",
                  })
                  setErrors({})
                }}
              >
                Yeni Rezervasyon Yap
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

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
                { href: "/reservations", label: "Rezervasyon", active: true },
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
                <Link href="/contact">İletişim</Link>
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
                { href: "/reservations", label: "Rezervasyon", active: true },
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
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  İletişim
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Rezervasyon</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Özel anlarınız için masa rezervasyonu yapın. Size en uygun zamanı ayıralım.
          </p>
        </div>
      </section>

      {/* Reservation Info */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Rezervasyon Bilgileri</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rezervasyon yapmadan önce çalışma saatlerimizi ve kapasitemizi kontrol edin
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Açık Günler</h3>
                <p className="text-gray-600">Her Gün Açık</p>
                <p className="text-sm text-gray-500 mt-1">Hafta içi ve hafta sonu</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Çalışma Saatleri</h3>
                <p className="text-gray-600">08:00 - 23:00</p>
                <p className="text-sm text-gray-500 mt-1">Son sipariş 22:30</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Kapasite</h3>
                <p className="text-gray-600">130 Kişi</p>
                <p className="text-sm text-gray-500 mt-1">İç ve dış mekan</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
                <p className="text-gray-600">+90 212 123 45 67</p>
                <p className="text-sm text-gray-500 mt-1">Acil rezervasyon</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="bg-white shadow-xl border border-gray-200">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
              <CardTitle className="text-2xl text-gray-900 text-center flex items-center justify-center">
                <Calendar className="h-6 w-6 mr-2 text-blue-600" />
                Rezervasyon Formu
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">Lütfen tüm gerekli alanları doldurun</p>
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
                    <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      Telefon *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                        errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="+90 5XX XXX XX XX"
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    E-posta (Opsiyonel)
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-gray-700 font-medium flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      Tarih *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                        errors.date ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                      min={today}
                      max={maxDateString}
                      disabled={isSubmitting}
                    />
                    {errors.date && (
                      <p className="text-red-600 text-sm flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.date}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-gray-700 font-medium flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      Saat *
                    </Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => handleInputChange("time", value)}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger
                        className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                          errors.time ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Saat seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.time && (
                      <p className="text-red-600 text-sm flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.time}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-gray-700 font-medium flex items-center">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    Kişi Sayısı *
                  </Label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => handleInputChange("guests", value)}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger
                      className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                        errors.guests ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Kişi sayısını seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {guestOptions.map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Kişi" : "Kişi"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.guests && (
                    <p className="text-red-600 text-sm flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.guests}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests" className="text-gray-700 font-medium flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-blue-600" />
                    Özel İstekler
                  </Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Özel istekleriniz varsa belirtebilirsiniz... (Pencere kenarı masa, doğum günü kutlaması vb.)"
                    rows={4}
                    disabled={isSubmitting}
                  />
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
                      <Calendar className="h-5 w-5 mr-2" />
                      Rezervasyon Yap
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Önemli Bilgiler:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Rezervasyonunuz onay için değerlendirilecektir</li>
                      <li>• En kısa sürede sizinle iletişime geçeceğiz</li>
                      <li>
                        • Acil durumlar için <strong>+90 212 123 45 67</strong> numarasından arayabilirsiniz
                      </li>
                      <li>• Rezervasyon değişiklikleri için en az 2 saat önceden haber verin</li>
                      <li>• En fazla 3 ay sonrası için rezervasyon yapabilirsiniz</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Bizi Ziyaret Edin</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Merkezi konumumuzda sizi ağırlamaktan mutluluk duyarız
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white shadow-lg border border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                    Adres Bilgileri
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Adres:</h4>
                      <p className="text-gray-600">
                        Merkez Mahallesi
                        <br />
                        Reyhan Cihan Sokak No:15
                        <br />
                        Kadıköy / İstanbul
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ulaşım:</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Metro: Kadıköy İstasyonu (10 dk yürüme)</li>
                        <li>• Otobüs: 16, 19, 25 numaralı hatlar</li>
                        <li>• Vapur: Kadıköy İskelesi (5 dk yürüme)</li>
                        <li>• Otopark: Ücretsiz vale hizmeti</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-gray-100 border border-gray-200">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">Google Haritalar</p>
                      <p className="text-sm">Interaktif harita yakında eklenecek</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
