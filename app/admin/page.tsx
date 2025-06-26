"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Coffee,
  Users,
  Calendar,
  Settings,
  Plus,
  Edit,
  Trash2,
  Check,
  X,
  Eye,
  BarChart3,
  TrendingUp,
  Clock,
  Star,
  Mail,
  Phone,
  Utensils,
  Save,
} from "lucide-react"

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [reservations, setReservations] = useState([
    {
      id: 1,
      name: "Ayşe Demir",
      phone: "+90 532 123 45 67",
      email: "ayse@example.com",
      date: "2024-02-15",
      time: "19:00",
      guests: 4,
      status: "pending",
      specialRequests: "Pencere kenarı masa rica ediyorum",
      createdAt: "2024-02-10T10:30:00Z",
    },
    {
      id: 2,
      name: "Mehmet Kaya",
      phone: "+90 533 987 65 43",
      email: "mehmet@example.com",
      date: "2024-02-16",
      time: "20:30",
      guests: 2,
      status: "confirmed",
      specialRequests: "",
      createdAt: "2024-02-11T14:15:00Z",
    },
    {
      id: 3,
      name: "Zeynep Özkan",
      phone: "+90 534 456 78 90",
      email: "zeynep@example.com",
      date: "2024-02-17",
      time: "18:00",
      guests: 6,
      status: "pending",
      specialRequests: "Doğum günü kutlaması için özel masa düzeni",
      createdAt: "2024-02-12T09:45:00Z",
    },
  ])

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Signature Tiramisu",
      category: "dessert",
      price: 65,
      description: "İtalyan usulü hazırlanan özel mascarpone kreması ile",
      image: "/placeholder.svg?height=200&width=200",
      available: true,
      featured: true,
    },
    {
      id: 2,
      name: "Artisan Cappuccino",
      category: "coffee",
      price: 35,
      description: "Özenle seçilmiş çekirdeklerden hazırlanan cappuccino",
      image: "/placeholder.svg?height=200&width=200",
      available: true,
      featured: true,
    },
    {
      id: 3,
      name: "Club Sandwich",
      category: "sandwich",
      price: 48,
      description: "Premium malzemelerle hazırlanan özel sandwich",
      image: "/placeholder.svg?height=200&width=200",
      available: true,
      featured: false,
    },
  ])

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Piyano Gecesi",
      date: "2024-02-20",
      time: "20:00",
      description: "Canlı piyano performansı eşliğinde özel bir gece",
      capacity: 40,
      registered: 25,
      price: "Ücretsiz",
      image: "/placeholder.svg?height=200&width=300",
      status: "active",
    },
    {
      id: 2,
      title: "Kahve Tadım Atölyesi",
      date: "2024-02-25",
      time: "15:00",
      description: "Dünya kahvelerini keşfedin",
      capacity: 15,
      registered: 12,
      price: "150₺",
      image: "/placeholder.svg?height=200&width=300",
      status: "active",
    },
  ])

  const [stats, setStats] = useState({
    totalReservations: 156,
    pendingReservations: 12,
    todayReservations: 8,
    totalRevenue: 45600,
    monthlyGrowth: 15.3,
    averageRating: 4.8,
    totalCustomers: 2340,
    popularItem: "Signature Tiramisu",
  })

  const [newMenuItem, setNewMenuItem] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
  })

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    capacity: "",
    price: "",
  })

  const handleReservationStatusChange = (id: number, status: string) => {
    setReservations(
      reservations.map((reservation) => (reservation.id === id ? { ...reservation, status } : reservation)),
    )
  }

  const handleAddMenuItem = () => {
    if (newMenuItem.name && newMenuItem.category && newMenuItem.price) {
      const item = {
        id: Date.now(),
        ...newMenuItem,
        price: Number.parseFloat(newMenuItem.price),
        available: true,
        featured: false,
      }
      setMenuItems([...menuItems, item])
      setNewMenuItem({ name: "", category: "", price: "", description: "", image: "" })
    }
  }

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      const event = {
        id: Date.now(),
        ...newEvent,
        capacity: Number.parseInt(newEvent.capacity) || 0,
        registered: 0,
        image: "/placeholder.svg?height=200&width=300",
        status: "active",
      }
      setEvents([...events, event])
      setNewEvent({ title: "", date: "", time: "", description: "", capacity: "", price: "" })
    }
  }

  const handleDeleteMenuItem = (id: number) => {
    setMenuItems(menuItems.filter((item) => item.id !== id))
  }

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Bekliyor</Badge>
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800">Onaylandı</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">İptal</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">Bilinmiyor</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
                <p className="text-sm text-gray-600">Reyhan Cihan Pasta & Cafe</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">Online</Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Ayarlar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="reservations" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Rezervasyonlar</span>
            </TabsTrigger>
            <TabsTrigger value="menu" className="flex items-center space-x-2">
              <Utensils className="h-4 w-4" />
              <span>Menü</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Etkinlikler</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Ayarlar</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Toplam Rezervasyon</p>
                      <p className="text-3xl font-bold">{stats.totalReservations}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-indigo-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-indigo-100">Bekleyen Rezervasyon</p>
                      <p className="text-3xl font-bold">{stats.pendingReservations}</p>
                    </div>
                    <Clock className="h-8 w-8 text-indigo-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Aylık Gelir</p>
                      <p className="text-3xl font-bold">{stats.totalRevenue.toLocaleString()}₺</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-pink-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-pink-100">Müşteri Puanı</p>
                      <p className="text-3xl font-bold">{stats.averageRating}</p>
                    </div>
                    <Star className="h-8 w-8 text-pink-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Son Rezervasyonlar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reservations.slice(0, 5).map((reservation) => (
                      <div key={reservation.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{reservation.name}</p>
                          <p className="text-sm text-gray-600">
                            {reservation.date} - {reservation.time} ({reservation.guests} kişi)
                          </p>
                        </div>
                        {getStatusBadge(reservation.status)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-900">Popüler Ürünler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {menuItems
                      .filter((item) => item.featured)
                      .map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-medium text-gray-900">{item.name}</p>
                              <p className="text-sm text-gray-600">{item.price}₺</p>
                            </div>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800">{item.category}</Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reservations */}
          <TabsContent value="reservations" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Rezervasyon Yönetimi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Müşteri</TableHead>
                      <TableHead>İletişim</TableHead>
                      <TableHead>Tarih/Saat</TableHead>
                      <TableHead>Kişi</TableHead>
                      <TableHead>Durum</TableHead>
                      <TableHead>İşlemler</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reservations.map((reservation) => (
                      <TableRow key={reservation.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{reservation.name}</p>
                            {reservation.specialRequests && (
                              <p className="text-sm text-gray-600 mt-1">{reservation.specialRequests}</p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm">
                              <Phone className="h-3 w-3 mr-1" />
                              {reservation.phone}
                            </div>
                            {reservation.email && (
                              <div className="flex items-center text-sm">
                                <Mail className="h-3 w-3 mr-1" />
                                {reservation.email}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p>{reservation.date}</p>
                            <p className="text-sm text-gray-600">{reservation.time}</p>
                          </div>
                        </TableCell>
                        <TableCell>{reservation.guests}</TableCell>
                        <TableCell>{getStatusBadge(reservation.status)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {reservation.status === "pending" && (
                              <>
                                <Button
                                  size="sm"
                                  onClick={() => handleReservationStatusChange(reservation.id, "confirmed")}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleReservationStatusChange(reservation.id, "cancelled")}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Rezervasyon Detayları</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <Label>Müşteri Adı</Label>
                                    <p className="font-medium">{reservation.name}</p>
                                  </div>
                                  <div>
                                    <Label>Telefon</Label>
                                    <p>{reservation.phone}</p>
                                  </div>
                                  {reservation.email && (
                                    <div>
                                      <Label>E-posta</Label>
                                      <p>{reservation.email}</p>
                                    </div>
                                  )}
                                  <div>
                                    <Label>Tarih ve Saat</Label>
                                    <p>
                                      {reservation.date} - {reservation.time}
                                    </p>
                                  </div>
                                  <div>
                                    <Label>Kişi Sayısı</Label>
                                    <p>{reservation.guests} kişi</p>
                                  </div>
                                  {reservation.specialRequests && (
                                    <div>
                                      <Label>Özel İstekler</Label>
                                      <p>{reservation.specialRequests}</p>
                                    </div>
                                  )}
                                  <div>
                                    <Label>Rezervasyon Tarihi</Label>
                                    <p>{new Date(reservation.createdAt).toLocaleString("tr-TR")}</p>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Menu Management */}
          <TabsContent value="menu" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Menü Yönetimi</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Yeni Ürün Ekle
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Yeni Menü Öğesi Ekle</DialogTitle>
                    <DialogDescription>Menüye yeni bir ürün ekleyin</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ürün Adı</Label>
                      <Input
                        id="name"
                        value={newMenuItem.name}
                        onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
                        placeholder="Ürün adını girin"
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Kategori</Label>
                      <Select
                        value={newMenuItem.category}
                        onValueChange={(value) => setNewMenuItem({ ...newMenuItem, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Kategori seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="coffee">Kahve</SelectItem>
                          <SelectItem value="dessert">Tatlı</SelectItem>
                          <SelectItem value="sandwich">Sandviç</SelectItem>
                          <SelectItem value="beverage">İçecek</SelectItem>
                          <SelectItem value="breakfast">Kahvaltı</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="price">Fiyat (₺)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={newMenuItem.price}
                        onChange={(e) => setNewMenuItem({ ...newMenuItem, price: e.target.value })}
                        placeholder="Fiyat girin"
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Açıklama</Label>
                      <Textarea
                        id="description"
                        value={newMenuItem.description}
                        onChange={(e) => setNewMenuItem({ ...newMenuItem, description: e.target.value })}
                        placeholder="Ürün açıklaması"
                      />
                    </div>
                    <div>
                      <Label htmlFor="image">Görsel URL</Label>
                      <Input
                        id="image"
                        value={newMenuItem.image}
                        onChange={(e) => setNewMenuItem({ ...newMenuItem, image: e.target.value })}
                        placeholder="Görsel URL'si"
                      />
                    </div>
                    <Button onClick={handleAddMenuItem} className="w-full">
                      <Save className="h-4 w-4 mr-2" />
                      Ürünü Kaydet
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map((item) => (
                <Card key={item.id} className="bg-white">
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {item.featured && <Badge className="absolute top-2 left-2 bg-blue-600 text-white">Öne Çıkan</Badge>}
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <Button size="sm" variant="outline" className="bg-white/80">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteMenuItem(item.id)}
                        className="bg-red-600/80"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">{item.price}₺</span>
                      <Badge className={item.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {item.available ? "Mevcut" : "Tükendi"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Management */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Etkinlik Yönetimi</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Yeni Etkinlik Ekle
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Yeni Etkinlik Ekle</DialogTitle>
                    <DialogDescription>Yeni bir etkinlik oluşturun</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Etkinlik Başlığı</Label>
                      <Input
                        id="title"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        placeholder="Etkinlik başlığı"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Tarih</Label>
                        <Input
                          id="date"
                          type="date"
                          value={newEvent.date}
                          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Saat</Label>
                        <Input
                          id="time"
                          type="time"
                          value={newEvent.time}
                          onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description">Açıklama</Label>
                      <Textarea
                        id="description"
                        value={newEvent.description}
                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                        placeholder="Etkinlik açıklaması"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="capacity">Kapasite</Label>
                        <Input
                          id="capacity"
                          type="number"
                          value={newEvent.capacity}
                          onChange={(e) => setNewEvent({ ...newEvent, capacity: e.target.value })}
                          placeholder="Maksimum katılımcı"
                        />
                      </div>
                      <div>
                        <Label htmlFor="price">Fiyat</Label>
                        <Input
                          id="price"
                          value={newEvent.price}
                          onChange={(e) => setNewEvent({ ...newEvent, price: e.target.value })}
                          placeholder="Fiyat (örn: 50₺ veya Ücretsiz)"
                        />
                      </div>
                    </div>
                    <Button onClick={handleAddEvent} className="w-full">
                      <Save className="h-4 w-4 mr-2" />
                      Etkinliği Kaydet
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="bg-white">
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <Button size="sm" variant="outline" className="bg-white/80">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteEvent(event.id)}
                        className="bg-red-600/80"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString("tr-TR")}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {event.registered}/{event.capacity} kişi
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Coffee className="h-4 w-4 mr-2" />
                        {event.price}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Doluluk Oranı</span>
                        <span>{Math.round((event.registered / event.capacity) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <Badge
                      className={
                        event.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }
                    >
                      {event.status === "active" ? "Aktif" : "Pasif"}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Genel Ayarlar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="cafe-name">Cafe Adı</Label>
                  <Input id="cafe-name" defaultValue="Reyhan Cihan Pasta & Cafe" />
                </div>

                <div>
                  <Label htmlFor="address">Adres</Label>
                  <Textarea
                    id="address"
                    defaultValue="Merkez Mahallesi, Reyhan Cihan Sokak No:15, Kadıköy / İstanbul"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" defaultValue="+90 216 456 78 90" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-posta</Label>
                    <Input id="email" defaultValue="info@reyhancihan.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="working-hours">Çalışma Saatleri</Label>
                  <Textarea
                    id="working-hours"
                    defaultValue="Pazartesi - Cuma: 07:30 - 23:30&#10;Hafta Sonu: 08:00 - 24:00"
                  />
                </div>

                <div>
                  <Label htmlFor="capacity">Toplam Kapasite</Label>
                  <Input id="capacity" type="number" defaultValue="130" />
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4 mr-2" />
                  Ayarları Kaydet
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Sosyal Medya</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input id="instagram" placeholder="@reyhancihan" />
                </div>
                <div>
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input id="facebook" placeholder="Reyhan Cihan Pasta & Cafe" />
                </div>
                <div>
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input id="twitter" placeholder="@reyhancihan" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="h-4 w-4 mr-2" />
                  Sosyal Medya Ayarlarını Kaydet
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
