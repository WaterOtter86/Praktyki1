let index = 0;

function moveSlide(step) {
    const caruzela = document.querySelector('.caruzela');
    const totalSlides = document.querySelectorAll('.caruzela-item').length;
    index = (index + step + totalSlides) % totalSlides; 
    caruzela.style.transform = `translateX(-${index * 100}%)`;
}
