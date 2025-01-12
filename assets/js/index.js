const sliderContainer = document.querySelector('.custom-slider-section');
const slider = sliderContainer.querySelector('.slider');

function activate(e) {
    if (!e.target.matches('.next, .prev')) return;

    const items = Array.from(slider.children);

    if (e.target.matches('.next')) {
        slider.appendChild(items[0]);
    } else if (e.target.matches('.prev')) {
        slider.insertBefore(items[items.length - 1], items[0]);
    }
}

// Escuchar solo eventos dentro del contenedor
sliderContainer.addEventListener('click', activate, false);

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".wave-slide");
    const navBtns = document.querySelectorAll(".nav-btn");

    let currentIndex = 0;

    const updateSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        navBtns.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });

        currentIndex = index;
    };

    navBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => updateSlide(index));
    });

    // Inicializar el primer slide
    updateSlide(currentIndex);
});
