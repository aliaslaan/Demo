/**
 * Hatay Sound - Performanslı ve Akıcı Hero Slider Scripti
 * Bu dosya index.html içerisindeki #slider-container alanını yönetir.
 */
(function() {
  const sliderContainer = document.getElementById('slider-container');
  
  // Eğer sayfa yüklendiğinde container bulunamazsa scriptin çökmesini engelle
  if (!sliderContainer) return;

  // ----------------------------------------------------------------------
  // 📸 KAYAN BÜYÜK GÖRSELLERİNİ AŞAĞIDAKİ ALANA EKLEYEBİLİRSİN
  // Dilediğin kadar görsel ekleyebilir veya mevcut linkleri değiştirebilirsin.
  // ----------------------------------------------------------------------
  const images = [
    'hsgarage.JPG', 
    'hsgarage1.JPG',
    'hsgarage2.JPG'
  ];

  let currentIndex = 0;
  let slides = [];

  // 1. Slider HTML yapısını arka planda dinamik olarak inşa etme fonksiyonu
  function buildSlider() {
    sliderContainer.innerHTML = ''; // İçeriyi temizle
    
    images.forEach((src, index) => {
      const imgDiv = document.createElement('div');
      
      // Gerekli Tailwind ve geçiş sınıflarını ekliyoruz
      imgDiv.className = 'absolute inset-0 w-full h-full bg-cover bg-center slider-image';
      imgDiv.style.backgroundImage = `url('${src}')`;
      
      // İlk görseli görünür ve ön planda yap, diğerlerini gizle
      imgDiv.style.opacity = index === 0 ? '1' : '0';
      imgDiv.style.zIndex = index === 0 ? '1' : '0';
      
      sliderContainer.appendChild(imgDiv);
    });

    // Oluşturulan elementleri hafızaya al
    slides = sliderContainer.querySelectorAll('.slider-image');
  }

  // 2. Slayt değiştirme ve yumuşak geçiş (Fade) fonksiyonu
  function switchSlide() {
    if (!slides.length) return;

    // Aktif olan mevcut görseli yumuşakça gizle ve z-index'ini düşür
    slides[currentIndex].style.opacity = '0';
    slides[currentIndex].style.zIndex = '0';

    // Bir sonraki görselin sırasını hesapla (Son görsele gelince başa dönmesi için Modulo)
    currentIndex = (currentIndex + 1) % slides.length;

    // Yeni görseli yumuşakça görünür yap ve en öne taşı
    slides[currentIndex].style.opacity = '1';
    slides[currentIndex].style.zIndex = '1';
  }

  // Fonksiyonları tetikle
  buildSlider();

  // İstediğin gibi tam 2 saniyede bir (2000 milisaniye) otomatik geçişi başlat
  setInterval(switchSlide, 2000);
})();
