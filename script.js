let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Loop back to the last slide
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initialize the first slide as active
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

function meijiEra() {
    alert("A Era Meiji durou de 1868 a 1912, e foi um período de grandes mudanças políticas, econômicas e sociais no Japão, marcando a modernização do país.");
}
