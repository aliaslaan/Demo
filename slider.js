document.addEventListener('DOMContentLoaded', function() {

  // İletişim formu kontrolü (varsa)
  const form = document.getElementById('contact-form');
  if (form) {
    const messageDiv = document.getElementById('form-message');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (messageDiv) {
        messageDiv.classList.remove('hidden');
        form.reset();
        setTimeout(() => messageDiv.classList.add('hidden'), 4000);
      }
    });
  }

  // Smooth scroll (sayfa içi anchor linkler için)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Sabit WhatsApp/Instagram butonları zaten HTML'de mevcut.
  // Ekstra mobil dokunmatik iyileştirmeleri istenirse eklenebilir.
});
