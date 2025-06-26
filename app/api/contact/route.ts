import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tüm alanlar zorunludur" }, { status: 400 })
    }

    // Email data for restaurant
    const emailData = {
      to: "info@reyhancihan.com",
      subject: `İletişim Formu: ${subject} - Reyhan Cihan Pasta & Cafe`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc;">
          <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Yeni İletişim Mesajı</h1>
            <p style="color: #dbeafe; margin: 10px 0 0 0; font-size: 16px;">Reyhan Cihan Pasta & Cafe</p>
          </div>
          
          <div style="padding: 40px 30px; background: #fff;">
            <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
              <h2 style="color: #1e40af; margin: 0 0 10px 0; font-size: 20px;">📧 Yeni Müşteri Mesajı</h2>
              <p style="color: #3730a3; margin: 0; font-size: 14px;">Aşağıdaki müşteri sizinle iletişime geçmek istiyor.</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 15px 0; font-weight: 600; color: #374151; width: 25%;">👤 Gönderen:</td>
                <td style="padding: 15px 0; color: #6b7280; font-size: 16px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 15px 0; font-weight: 600; color: #374151;">📧 E-posta:</td>
                <td style="padding: 15px 0; color: #6b7280; font-size: 16px;">${email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 15px 0; font-weight: 600; color: #374151;">📋 Konu:</td>
                <td style="padding: 15px 0; color: #6b7280; font-size: 16px;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 15px 0; font-weight: 600; color: #374151; vertical-align: top;">💬 Mesaj:</td>
                <td style="padding: 15px 0; color: #6b7280; line-height: 1.8; font-size: 16px;">${message}</td>
              </tr>
            </table>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}" style="background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block;">
                📧 Yanıtla
              </a>
            </div>
          </div>
          
          <div style="background: #f1f5f9; padding: 25px; text-align: center; color: #64748b; font-size: 14px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 10px 0;"><strong>Reyhan Cihan Pasta & Cafe</strong></p>
            <p style="margin: 0;">Gönderim Tarihi: ${new Date().toLocaleString("tr-TR")}</p>
          </div>
        </div>
      `,
    }

    // Auto-reply to customer
    const autoReplyData = {
      to: email,
      subject: "Mesajınız Alındı - Reyhan Cihan Pasta & Cafe",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc;">
          <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Mesajınız Alındı! ✨</h1>
            <p style="color: #dbeafe; margin: 10px 0 0 0; font-size: 16px;">Reyhan Cihan Pasta & Cafe</p>
          </div>
          
          <div style="padding: 40px 30px; background: #fff;">
            <p style="color: #374151; font-size: 18px; margin-bottom: 20px;">Merhaba <strong>${name}</strong>,</p>
            
            <p style="color: #6b7280; line-height: 1.8; font-size: 16px; margin-bottom: 25px;">
              Reyhan Cihan Pasta & Cafe'ye gönderdiğiniz mesaj için teşekkür ederiz. Mesajınız başarıyla alınmış olup, 
              en kısa sürede size dönüş yapacağız.
            </p>
            
            <div style="background: linear-gradient(135deg, #ecfdf5, #f0fdf4); border: 2px solid #10b981; border-radius: 12px; padding: 25px; margin: 25px 0;">
              <h3 style="color: #065f46; margin: 0 0 20px 0; font-size: 20px;">📋 Mesaj Detayları</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #065f46;">📋 Konu:</td>
                  <td style="padding: 8px 0; color: #047857;">${subject}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #065f46; vertical-align: top;">💬 Mesajınız:</td>
                  <td style="padding: 8px 0; color: #047857; line-height: 1.6;">${message}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
              <h4 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">⏰ Yanıt Süresi</h4>
              <p style="color: #78350f; margin: 0; line-height: 1.6;">
                Genellikle 2-4 saat içinde yanıt veriyoruz. Acil durumlar için 
                <strong>+90 216 456 78 90</strong> numarasından bizi arayabilirsiniz.
              </p>
            </div>
            
            <p style="color: #6b7280; line-height: 1.8; font-size: 16px; margin-bottom: 30px;">
              Görüş ve önerileriniz bizim için çok değerli. Size en iyi hizmeti sunabilmek için 
              sürekli kendimizi geliştirmeye devam ediyoruz.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="tel:+902164567890" style="background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block; margin-right: 15px;">
                📞 Bizi Arayın
              </a>
              <a href="/" style="background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block;">
                🌐 Web Sitemiz
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

    console.log("Contact form email:", emailData)
    console.log("Auto-reply email:", autoReplyData)

    return NextResponse.json({
      success: true,
      message: "Mesajınız başarıyla gönderildi",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Mesaj gönderimi sırasında bir hata oluştu" }, { status: 500 })
  }
}
