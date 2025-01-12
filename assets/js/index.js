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


//seccion

const polygons = document.querySelectorAll('.polygon-container');

polygons.forEach((container) => {
    let isDragging = false;
    let startX = 0, startY = 0;
    let currentX = 0, currentY = 0;
    let rotationX = 0, rotationY = 0;

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        rotationX += deltaY * 0.5;
        rotationY += deltaX * 0.5;

        container.querySelector('.polygon').style.transform = `
            rotateX(${rotationX}deg) rotateY(${rotationY}deg)
        `;

        startX = e.clientX;
        startY = e.clientY;

        currentX = rotationX;
        currentY = rotationY;
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;

            const polygon = container.querySelector('.polygon');
            polygon.style.transition = 'transform 0.8s ease';
            polygon.style.transform = `rotateX(0deg) rotateY(0deg)`;

            rotationX = 0;
            rotationY = 0;

            setTimeout(() => {
                polygon.style.transition = '';
            }, 800);
        }
    });
});
