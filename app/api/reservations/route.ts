import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, date, time, guests, specialRequests } = body

    // Validate required fields
    if (!name || !phone || !date || !time || !guests) {
      return NextResponse.json({ error: "Gerekli alanlar eksik" }, { status: 400 })
    }

    // Email data for restaurant
    const emailData = {
      to: "info@reyhancihan.com",
      subject: "Yeni Rezervasyon Talebi - Reyhan Cihan Pasta & Cafe",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc;">
          <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Yeni Rezervasyon Talebi</h1>
            <p style="color: #dbeafe; margin: 10px 0 0 0; font-size: 16px;">Reyhan Cihan Pasta & Cafe</p>
          </div>
          
          <div style="padding: 40px 30px; background: #fff; margin: 0;">
            <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
              <h2 style="color: #1e40af; margin: 0 0 10px 0; font-size: 20px;">⚠️ Acil Rezervasyon Talebi</h2>
              <p style="color: #3730a3; margin: 0; font-size: 14px;">Bu rezervasyon onay bekliyor. Lütfen en kısa sürede müşteriyle iletişime geçin.</p>
            </div>
            
            <h2 style="color: #1e40af; margin-bottom: 25px; font-size: 22px; border-bottom: 2px solid #e0e7ff; padding-bottom: 10px;">Rezervasyon Detayları</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 15px 0; font-weight: 600; color: #374151; width: 30%;">👤 Müşteri Adı:</td>
                <td style="padding: 15px 0; color: #6b7280; font-size: 16px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 15px 0; font-weight: 600; color: #374151;">📞 Telefon:</td>
                <td style="padding: 15px 0; color: #6b7280; font-size: 16px;">${phone}</td>
              </tr>
              ${
                email
                  ? `
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 15px 0; font-weight: 600; color: #374151;">📧 E-posta:</td>
                <td style="padding: 15px 0; color: #6b7280; font-size: 16px;">${email}</td>
              </tr>
              `
                  : ""
              }
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 15px 0; font-weight: 600; color: #374151;">📅 Tarih:</td>
                <td style="padding: 15px 0; color: #6b7280; font-size: 16px;">${new Date(date).toLocaleDateString(
                  "tr-TR",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 15px 0; font-weight: 600; color: #374151;">🕐 Saat:</td>
                <td style="padding: 15px 0; color: #6b7280; font-size: 16px;">${time}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 15px 0; font-weight: 600; color: #374151;">👥 Kişi Sayısı:</td>
                <td style="padding: 15px 0; color: #6b7280; font-size: 16px;">${guests} kişi</td>
              </tr>
              ${
                specialRequests
                  ? `
              <tr>
                <td style="padding: 15px 0; font-weight: 600; color: #374151; vertical-align: top;">💬 Özel İstekler:</td>
                <td style="padding: 15px 0; color: #6b7280; font-size: 16px; line-height: 1.6;">${specialRequests}</td>
              </tr>
              `
                  : ""
              }
            </table>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:${phone}" style="background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block; margin-right: 15px;">
                📞 Müşteriyi Ara
              </a>
              <a href="/admin" style="background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block;">
                🏢 Admin Panel
              </a>
            </div>
          </div>
          
          <div style="background: #f1f5f9; padding: 25px; text-align: center; color: #64748b; font-size: 14px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 10px 0;"><strong>Reyhan Cihan Pasta & Cafe</strong> - Premium Coffee & Dessert Experience</p>
            <p style="margin: 0 0 10px 0;">Merkez Mahallesi, Reyhan Cihan Sokak No:15, Kadıköy/İstanbul</p>
            <p style="margin: 0;">Rezervasyon Tarihi: ${new Date().toLocaleString("tr-TR")}</p>
          </div>
        </div>
      `,
    }

    // Customer confirmation email
    const customerEmailData = {
      to: email || phone,
      subject: "Rezervasyon Talebiniz Alındı - Reyhan Cihan Pasta & Cafe",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc;">
          <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Rezervasyon Talebiniz Alındı! ✨</h1>
            <p style="color: #dbeafe; margin: 10px 0 0 0; font-size: 16px;">Reyhan Cihan Pasta & Cafe</p>
          </div>
          
          <div style="padding: 40px 30px; background: #fff;">
            <p style="color: #374151; font-size: 18px; margin-bottom: 20px;">Merhaba <strong>${name}</strong>,</p>
            
            <p style="color: #6b7280; line-height: 1.8; font-size: 16px; margin-bottom: 25px;">
              Reyhan Cihan Pasta & Cafe'ye rezervasyon talebiniz için teşekkür ederiz. Talebiniz başarıyla alınmış olup, 
              en kısa sürede sizinle iletişime geçeceğiz.
            </p>
            
            <div style="background: linear-gradient(135deg, #ecfdf5, #f0fdf4); border: 2px solid #10b981; border-radius: 12px; padding: 25px; margin: 25px 0;">
              <h3 style="color: #065f46; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center;">
                ✅ Rezervasyon Detaylarınız
              </h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #065f46;">📅 Tarih:</td>
                  <td style="padding: 8px 0; color: #047857;">${new Date(date).toLocaleDateString("tr-TR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #065f46;">🕐 Saat:</td>
                  <td style="padding: 8px 0; color: #047857;">${time}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #065f46;">👥 Kişi Sayısı:</td>
                  <td style="padding: 8px 0; color: #047857;">${guests} kişi</td>
                </tr>
                ${
                  specialRequests
                    ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #065f46; vertical-align: top;">💬 Özel İstekler:</td>
                  <td style="padding: 8px 0; color: #047857;">${specialRequests}</td>
                </tr>
                `
                    : ""
                }
              </table>
            </div>
            
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
              <h4 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">ℹ️ Önemli Bilgiler</h4>
              <ul style="color: #78350f; margin: 0; padding-left: 20px; line-height: 1.6;">
                <li>Rezervasyonunuzun onaylanması durumunda size bilgi verilecektir</li>
                <li>Acil durumlar için <strong>+90 216 456 78 90</strong> numarasından bizi arayabilirsiniz</li>
                <li>Rezervasyon değişiklikleri için en az 2 saat önceden haber vermeniz gerekmektedir</li>
              </ul>
            </div>
            
            <p style="color: #6b7280; line-height: 1.8; font-size: 16px; margin-bottom: 30px;">
              Size özel lezzetlerimizi sunmak için sabırsızlanıyoruz. Cafe'mizde unutulmaz bir deneyim yaşamanız için 
              elimizden geleni yapacağız.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:+902164567890" style="background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block; margin-right: 15px;">
                📞 Bizi Arayın
              </a>
              <a href="https://maps.google.com" style="background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block;">
                📍 Yol Tarifi Al
              </a>
            </div>
          </div>
          
          <div style="background: #f1f5f9; padding: 25px; text-align: center; color: #64748b; font-size: 14px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 15px 0;"><strong>Reyhan Cihan Pasta & Cafe</strong></p>
            <p style="margin: 0 0 10px 0;">Merkez Mahallesi, Reyhan Cihan Sokak No:15, Kadıköy/İstanbul</p>
            <p style="margin: 0 0 10px 0;">📞 +90 216 456 78 90 | 📧 info@reyhancihan.com</p>
            <p style="margin: 0;">🕐 Pazartesi-Cuma: 07:30-23:30 | Hafta Sonu: 08:00-24:00</p>
          </div>
        </div>
      `,
    }

    console.log("Restaurant notification email:", emailData)
    console.log("Customer confirmation email:", customerEmailData)

    // Generate reservation ID
    const reservationId = `RC-${Date.now()}`

    return NextResponse.json({
      success: true,
      message: "Rezervasyon talebiniz başarıyla alındı",
      reservationId,
      data: {
        name,
        phone,
        email,
        date,
        time,
        guests,
        specialRequests,
        status: "pending",
        createdAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Reservation error:", error)
    return NextResponse.json({ error: "Rezervasyon işlemi sırasında bir hata oluştu" }, { status: 500 })
  }
}

export async function GET() {
  // Mock data for admin panel
  const reservations = [
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
  ]

  return NextResponse.json({ reservations })
}
