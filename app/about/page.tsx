"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coffee, Heart, Users, Award, Clock, Leaf, Menu, X, Star, ChefHat, Target, Eye, Shield } from "lucide-react"

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const founders = [
    {
      name: "Reyhan Cihan",
      role: "Kurucu & Baş Şef",
      description: "20 yıllık pastane deneyimi ve Avrupa'da aldığı eğitimlerle",
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Pasta Sanatı", "Geleneksel Tarifler", "Modern Teknikler"],
      awards: ["En İyi Pastane Şefi 2023", "Gastronomi Ödülü 2022"],
    },
    {
      name: "Mehmet Özkan",
      role: "Kurucu & Kahve Uzmanı",
      description: "Dünya kahve şampiyonluğu deneyimi ve özel harman uzmanlığı",
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Kahve Harmanlama", "Latte Art", "Barista Eğitimi"],
      awards: ["Türkiye Barista Şampiyonu 2021", "Kahve Uzmanı Sertifikası"],
    },
  ]

  const values = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Kaliteli Malzemeler",
      description: "Dünyanın en iyi kahve çekirdeklerini ve organik malzemeleri özenle seçiyor, taze olarak işliyoruz.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Sıcak Atmosfer",
      description: "Evinizin sıcaklığında, samimi ve huzurlu bir ortam sunarak her misafirimizi özel hissettiriyoruz.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Müşteri Memnuniyeti",
      description: "Her misafirimizin memnuniyeti bizim için en önemli önceliktir. 7/24 güleryüzlü hizmet veriyoruz.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Mükemmellik",
      description: "Her detayda mükemmelliği hedefliyor, sürekli kendimizi geliştiriyor ve yenilikleri takip ediyoruz.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Geleneksel Yöntemler",
      description:
        "Geleneksel pasta ve kahve yapım yöntemlerini modern tekniklerle harmanlayarak eşsiz tatlar yaratıyoruz.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sürdürülebilirlik",
      description: "Çevre dostu uygulamalar ve sürdürülebilir kaynaklarla çalışarak geleceğe katkı sağlıyoruz.",
    },
  ]

  const timeline = [
    {
      year: "2016",
      title: "Kuruluş",
      description: "Reyhan Cihan Pasta & Cafe, iki arkadaşın ortak hayaliyle Kadıköy'de açıldı.",
    },
    {
      year: "2018",
      title: "İlk Ödül",
      description: "İstanbul'un En İyi Pastanesi ödülünü kazandık ve müşteri sayımız 10 katına çıktı.",
    },
    {
      year: "2020",
      title: "Dijital Dönüşüm",
      description: "Online sipariş sistemi ve mobil uygulamamızı hayata geçirdik.",
    },
    {
      year: "2022",
      title: "Yenileme",
      description: "Cafe'mizi tamamen yeniledik ve kapasitemizi 130 kişiye çıkardık.",
    },
    {
      year: "2024",
      title: "Bugün",
      description: "50.000+ mutlu müşteri ve 4.9 yıldız ortalama ile hizmet vermeye devam ediyoruz.",
    },
  ]

  const stats = [
    { number: "50K+", label: "Mutlu Müşteri", icon: <Users className="h-6 w-6" /> },
    { number: "4.9", label: "Müşteri Puanı", icon: <Star className="h-6 w-6" /> },
    { number: "25+", label: "Özel Tarif", icon: <ChefHat className="h-6 w-6" /> },
    { number: "8", label: "Yıllık Deneyim", icon: <Award className="h-6 w-6" /> },
  ]

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
                { href: "/menu", label: "Menü" },
                { href: "/about", label: "Hakkımızda", active: true },
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
                { href: "/menu", label: "Menü" },
                { href: "/about", label: "Hakkımızda", active: true },
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-6 px-4 py-2">
            <Heart className="h-4 w-4 mr-2" />
            Hikayemiz
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Kahve tutkusu ve pasta sanatının buluştuğu yerde, 2016 yılından beri kaliteli hizmet veriyoruz
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-6 px-4 py-2">Hikayemiz</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tutkuyla Başlayan Yolculuk</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Reyhan Cihan Pasta & Cafe, kahve sevgisi ve pasta sanatına olan tutkuyla 2016 yılında kuruldu. İki
                  arkadaşın ortak hayali olan bu mekan, zamanla İstanbul'un en sevilen buluşma noktalarından biri haline
                  geldi.
                </p>
                <p>
                  Dünyanın dört bir yanından özenle seçtiğimiz kahve çekirdekleri, geleneksel yöntemlerle kavruluyor ve
                  uzman barista'larımız tarafından sizlere sunuluyor. Her fincan kahvede, tutkumuzun ve özenimizin
                  tadını alabilirsiniz.
                </p>
                <p>
                  Sadece kahve değil, aynı zamanda el yapımı pastalarımız, taze sandviçlerimiz ve sıcak atmosferimizle
                  misafirlerimize unutulmaz deneyimler yaşatmayı hedefliyoruz.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/menu">Menümüzü İnceleyin</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Cafe iç mekan"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="/placeholder.svg?height=250&width=300"
                  alt="Kahve hazırlama"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/placeholder.svg?height=250&width=300"
                  alt="Pasta vitrin"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Cafe dış mekan"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Misyon & Vizyon
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hedeflerimiz ve İlkelerimiz</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 p-8 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              </div>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed">
                  Kaliteli kahve ve lezzetli pastalarla, misafirlerimize sıcak ve samimi bir ortamda unutulmaz
                  deneyimler yaşatmak. Her müşterimizin kendini evinde hissetmesini sağlamak ve günlük yaşamın
                  stresinden uzaklaşabilecekleri bir alan sunmak.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-600 p-8 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              </div>
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed">
                  İstanbul'un en sevilen ve tercih edilen cafe'si olmak. Kahve kültürünü yaygınlaştırmak ve toplumsal
                  buluşma noktası olarak hizmet vermek. Sürdürülebilir ve çevre dostu uygulamalarla sektöre öncülük
                  etmek.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4 px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              Tarihçemiz
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Yolculuğumuz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              2016'dan bugüne kadar geçen süreçte yaşadığımız önemli anlar
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600 rounded-full hidden md:block"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}
                  >
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div
                            className={`w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold ${index % 2 === 0 ? "md:ml-auto md:mr-4" : "md:mr-auto md:ml-4"}`}
                          >
                            {item.year.slice(-2)}
                          </div>
                          <div className={index % 2 === 0 ? "md:text-right" : "md:text-left"}>
                            <h3 className="text-xl font-bold text-gray-900">{item.year}</h3>
                            <h4 className="text-lg font-semibold text-blue-600">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden md:block w-6 h-6 bg-white border-4 border-blue-600 rounded-full z-10"></div>

                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4 px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Ekibimiz
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kurucularımız</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reyhan Cihan Pasta & Cafe'nin kurucuları ve vizyonerleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-blue-200 font-medium">{founder.role}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6">{founder.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Uzmanlık Alanları:</h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.specialties.map((specialty, idx) => (
                        <Badge key={idx} className="bg-blue-100 text-blue-800">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Ödüller:</h4>
                    <div className="space-y-2">
                      {founder.awards.map((award, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Award className="h-4 w-4 text-yellow-500 mr-2" />
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-white/20 text-white mb-4 px-4 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Değerlerimiz
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bizi Biz Yapan Değerler</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Her gün işimizi yaparken rehber aldığımız ilkeler ve değerler
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bizi Ziyaret Edin!</h2>
          <p className="text-lg mb-8 text-blue-100">
            Hikayemizin bir parçası olmak ve lezzetlerimizi deneyimlemek için cafe'mize bekleriz
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
