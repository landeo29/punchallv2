document.addEventListener("DOMContentLoaded", function () {
    const featuresSection = document.querySelector(".features-container");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const sectionTop = featuresSection.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 50) {
            featuresSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealOnScroll);

    // Ejecutar la función al cargar la página
    revealOnScroll();
});
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    steps.forEach((step) => observer.observe(step));
});


document.addEventListener('DOMContentLoaded', function () {
    const services = document.querySelectorAll('#our-services .services .service');
    const popup = document.querySelector('.service-popup');
    const popupText = document.getElementById('popup-text');

    services.forEach((service) => {
        service.addEventListener('mouseenter', () => {
            const info = service.getAttribute('data-info');
            popupText.textContent = info;
            popup.classList.remove('hidden');
        });

        service.addEventListener('mouseleave', () => {
            popup.classList.add('hidden');
        });
    });
});
