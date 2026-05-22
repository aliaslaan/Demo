// ========== HAMBURGER MENÜ (Tüm sayfalar) ==========
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});

// ========== HERO SLIDER (Sadece index.html'de çalışır) ==========
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('slider-container');
  if (!container) return;

  const images = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617531653332-b5f53e6d4e3e?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596986952526-3ae1e0c39a0a?q=80&w=1920&auto=format&fit=crop'
  ];

  let currentIndex = 0;
  images.forEach((src, index) => {
    const div = document.createElement('div');
    div.className = 'absolute inset-0 w-full h-full bg-cover bg-center slider-image';
    div.style.backgroundImage = `url('${src}')`;
    div.style.opacity = index === 0 ? '1' : '0';
    div.style.transition = 'opacity 0.7s ease-in-out';
    container.appendChild(div);
  });

  const slides = document.querySelectorAll('.slider-image');
  function switchSlide() {
    slides[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = '1';
  }
  setInterval(switchSlide, 2000);
});

// ========== WHATSAPP FORM (Tüm sayfalarda) ==========
window.sendWhatsApp = function(e) {
  e.preventDefault();
  const name = document.getElementById('whatsapp-name')?.value.trim();
  const phone = document.getElementById('whatsapp-phone')?.value.trim();
  const message = document.getElementById('whatsapp-message')?.value.trim();
  if (!name || !message) return;
  const text = encodeURIComponent(`Merhaba, ben ${name}.\n${phone ? `Telefon: ${phone}\n` : ''}Mesaj: ${message}`);
  const formMsg = document.getElementById('form-message');
  if (formMsg) {
    formMsg.classList.remove('hidden');
    setTimeout(() => formMsg.classList.add('hidden'), 4000);
  }
  window.open(`https://wa.me/905383468590?text=${text}`, '_blank');
};
