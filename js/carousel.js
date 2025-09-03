document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.carousel-nav.prev');
  const nextButton = document.querySelector('.carousel-nav.next');
  let currentIndex = 0;
  const itemWidth = items[0].clientWidth;

  function updateCarousel() {
    track.style.transform = 'translateX(' + (-currentIndex * itemWidth) + 'px)';
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = items.length - 1;
    }
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  // Opcional: Adiciona funcionalidade de arrastar para o carrossel em dispositivos de toque
  let startX = 0;
  let isDragging = false;

  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    track.style.transition = 'none';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX;
    const walk = (x - startX);
    track.style.transform = 'translateX(' + (-currentIndex * itemWidth + walk) + 'px)';
  });

  track.addEventListener('mouseup', () => {
    isDragging = false;
    track.style.transition = 'transform 0.5s ease-in-out';
    const dragDistance = startX - event.clientX;
    if (Math.abs(dragDistance) > 50) { // Considera um "arrasto" se for mais que 50px
      if (dragDistance > 0 && currentIndex < items.length - 1) {
        currentIndex++;
      } else if (dragDistance < 0 && currentIndex > 0) {
        currentIndex--;
      }
    }
    updateCarousel();
  });

  track.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      track.style.transition = 'transform 0.5s ease-in-out';
      updateCarousel();
    }
  });

  // Ajusta o carrossel ao redimensionar a tela
  window.addEventListener('resize', () => {
    updateCarousel();
  });
});