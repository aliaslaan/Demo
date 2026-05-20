document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('slider-container');
  if (!container) return;

  const images = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617531653332-b5f53e6d4e3e?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596986952526-3ae1e0c39a0a?q=80&w=1920&auto=format&fit=crop'
  ];

  let currentIndex = 0;

  // Slider yapısını oluştur
  images.forEach((src, index) => {
    const div = document.createElement('div');
    div.className = 'absolute inset-0 w-full h-full bg-cover bg-center slider-image';
    div.style.backgroundImage = `url('${src}')`;
    div.style.opacity = index === 0 ? '1' : '0';
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