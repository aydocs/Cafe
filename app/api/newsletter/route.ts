import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "E-posta adresi gerekli" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Geçerli bir e-posta adresi girin" }, { status: 400 })
    }

    // Welcome email to subscriber
    const welcomeEmailData = {
      to: email,
      subject: "Reyhan Cihan Pasta & Cafe Bültenine Hoş Geldiniz! 🎉",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc;">
          <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); padding: 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 32px; font-weight: bold;">Hoş Geldiniz! ☕✨</h1>
            <p style="color: #dbeafe; margin: 15px 0 0 0; font-size: 18px;">Reyhan Cihan Pasta & Cafe ailesine katıldığınız için teşekkürler</p>
          </div>
          
          <div style="padding: 40px 30px; background: #fff;">
            <h2 style="color: #1e40af; margin: 0 0 25px 0; font-size: 24px; text-align: center;">Neler Bekleyebilirsiniz? 🎁</h2>
            
            <div style="margin: 35px 0;">
              <div style="display: flex; align-items: center; margin-bottom: 25px; padding: 20px; background: #eff6ff; border-radius: 12px;">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #3b82f6, #6366f1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; flex-shrink: 0;">
                  <span style="font-size: 28px;">🎁</span>
                </div>
                <div>
                  <h3 style="color: #1e40af; margin: 0; font-size: 18px; font-weight: 600;">Özel İndirimler</h3>
                  <p style="color: #3730a3; margin: 5px 0 0 0; font-size: 15px;">Sadece abonelere özel fırsatlar ve kampanyalar</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; margin-bottom: 25px; padding: 20px; background: #f0fdf4; border-radius: 12px;">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; flex-shrink: 0;">
                  <span style="font-size: 28px;">🍰</span>
                </div>
                <div>
                  <h3 style="color: #065f46; margin: 0; font-size: 18px; font-weight: 600;">Yeni Ürünler</h3>
                  <p style="color: #047857; margin: 5px 0 0 0; font-size: 15px;">Yeni pasta ve kahve çeşitlerimizden ilk siz haberdar olun</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; margin-bottom: 25px; padding: 20px; background: #fef3c7; border-radius: 12px;">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; flex-shrink: 0;">
                  <span style="font-size: 28px;">🎵</span>
                </div>
                <div>
                  <h3 style="color: #92400e; margin: 0; font-size: 18px; font-weight: 600;">Özel Etkinlikler</h3>
                  <p style="color: #78350f; margin: 5px 0 0 0; font-size: 15px;">Canlı müzik geceleri ve tadım etkinlikleri</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: center; margin-bottom: 25px; padding: 20px; background: #fdf2f8; border-radius: 12px;">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #ec4899, #db2777); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px; flex-shrink: 0;">
                  <span style="font-size: 28px;">📱</span>
                </div>
                <div>
                  <h3 style="color: #831843; margin: 0; font-size: 18px; font-weight: 600;">Özel İçerikler</h3>
                  <p style="color: #9d174d; margin: 5px 0 0 0; font-size: 15px;">Pasta tarifleri ve kahve ipuçları</p>
                </div>
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; padding: 30px; border-radius: 16px; text-align: center; margin: 40px 0;">
              <h3 style="margin: 0 0 15px 0; font-size: 24px; font-weight: bold;">🎉 Hoş Geldin Hediyesi!</h3>
              <p style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">İlk siparişinizde %20 İndirim</p>
              <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; font-size: 18px; font-weight: bold; letter-spacing: 2px;">HOSGELDIN20</p>
              </div>
              <p style="margin: 0; font-size: 14px; opacity: 0.9;">Bu kod ile 30 gün içinde geçerli</p>
            </div>
            
            <p style="color: #6b7280; line-height: 1.8; text-align: center; font-size: 16px; margin: 30px 0;">
              Reyhan Cihan Pasta & Cafe'de sizi görmek için sabırsızlanıyoruz! ☕💙
            </p>
            
            <div style="text-align: center; margin: 35px 0;">
              <a href="/" style="background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block; margin-right: 15px;">
                🌐 Web Sitemizi Ziyaret Edin
              </a>
              <a href="/menu" style="background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block;">
                📋 Menümüzü İnceleyin
              </a>
            </div>
          </div>
          
          <div style="background: #f1f5f9; padding: 30px; text-align: center; color: #64748b; font-size: 14px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 15px 0; font-size: 16px; font-weight: 600; color: #374151;"><strong>Reyhan Cihan Pasta & Cafe</strong></p>
            <p style="margin: 0 0 10px 0;">Merkez Mahallesi, Reyhan Cihan Sokak No:15, Kadıköy/İstanbul</p>
            <p style="margin: 0 0 15px 0;">📞 +90 216 456 78 90 | 📧 info@reyhancihan.com</p>
            <div style="margin: 20px 0;">
              <a href="#" style="color: #3b82f6; text-decoration: none; margin: 0 10px;">Instagram</a>
              <a href="#" style="color: #3b82f6; text-decoration: none; margin: 0 10px;">Facebook</a>
              <a href="#" style="color: #3b82f6; text-decoration: none; margin: 0 10px;">Twitter</a>
            </div>
            <p style="margin: 15px 0 0 0; font-size: 12px;">
              <a href="#" style="color: #6b7280; text-decoration: none;">Abonelikten çık</a> | 
              <a href="#" style="color: #6b7280; text-decoration: none;">Gizlilik Politikası</a>
            </p>
          </div>
        </div>
      `,
    }

    // Notification to admin
    const adminNotificationData = {
      to: "info@reyhancihan.com",
      subject: "Yeni Bülten Abonesi - Reyhan Cihan Pasta & Cafe",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc;">
          <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Yeni Bülten Abonesi! 🎉</h1>
            <p style="color: #dbeafe; margin: 10px 0 0 0; font-size: 16px;">Reyhan Cihan Pasta & Cafe</p>
          </div>
          
          <div style="padding: 40px 30px; background: #fff;">
            <div style="background: #ecfdf5; border: 2px solid #10b981; border-radius: 12px; padding: 25px; text-align: center;">
              <h2 style="color: #065f46; margin: 0 0 15px 0; font-size: 22px;">📧 Yeni Abone Bilgileri</h2>
              <p style="color: #047857; margin: 0; font-size: 18px; font-weight: 600;">${email}</p>
              <p style="color: #059669; margin: 10px 0 0 0; font-size: 14px;">Tarih: ${new Date().toLocaleString("tr-TR")}</p>
            </div>
            
            <div style="margin: 30px 0; padding: 20px; background: #eff6ff; border-radius: 8px;">
              <h3 style="color: #1e40af; margin: 0 0 15px 0;">📊 Abone İstatistikleri</h3>
              <p style="color: #3730a3; margin: 0; font-size: 14px;">Bu ay toplam abone sayısı artışınızı admin panelinden takip edebilirsiniz.</p>
            </div>
          </div>
          
          <div style="background: #f1f5f9; padding: 25px; text-align: center; color: #64748b; font-size: 14px;">
            <p style="margin: 0;"><strong>Reyhan Cihan Pasta & Cafe</strong> - Admin Bildirimi</p>
          </div>
        </div>
      `,
    }

    console.log("Newsletter welcome email:", welcomeEmailData)
    console.log("Admin notification:", adminNotificationData)

    return NextResponse.json({
      success: true,
      message: "Bültene başarıyla abone oldunuz",
    })
  } catch (error) {
    console.error("Newsletter error:", error)
    return NextResponse.json({ error: "Abonelik işlemi sırasında bir hata oluştu" }, { status: 500 })
  }
}
