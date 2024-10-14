let currentSlide = 0;
const slideInterval = 10000; // Intervalo de 10 segundos
const projectsBox = document.querySelector('.projects-box');
const totalSlides = projectsBox.children.length;
const visibleSlides = 4; // Número de slides visíveis

// Clonar todos os projetos várias vezes para criar um loop infinito
const cloneCount = 100; // Número de vezes que os projetos serão clonados
for (let j = 0; j < cloneCount; j++) {
  for (let i = 0; i < totalSlides; i++) {
    const clone = projectsBox.children[i].cloneNode(true);
    projectsBox.appendChild(clone);
  }
}

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides * cloneCount) % (totalSlides * cloneCount);
  projectsBox.style.transform = `translateX(-${currentSlide * (100 / visibleSlides)}%)`;
}

function autoSlide() {
  moveSlide(1);
}

let autoSlideInterval = setInterval(autoSlide, slideInterval);

document.querySelector('.prev').addEventListener('click', () => {
  moveSlide(-1);
  resetAutoSlide();
});

document.querySelector('.next').addEventListener('click', () => {
  moveSlide(1);
  resetAutoSlide();
});

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, slideInterval);
}
