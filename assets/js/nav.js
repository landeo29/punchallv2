document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const colorModeSelect = document.getElementById('colorMode');
    const navbar = document.querySelector('.navbar');

    /**
     * Alterna el estado del menú hamburguesa.
     */
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
    };

    // Evento para abrir/cerrar el menú hamburguesa
    menuToggle.addEventListener('click', toggleMenu);

    /**
     * Actualiza la clase .scrolled en la barra de navegación según la posición del scroll.
     */
    const updateNavbarState = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    /**
     * Cambia el modo de color sin afectar el estado del scroll ni la barra.
     */
    const changeColorMode = (mode) => {
        // Guardar la posición actual del scroll
        const currentScroll = window.scrollY;

        // Cambiar el modo de color sin alterar el scroll
        document.body.className = ''; // Limpia clases previas
        if (mode && mode !== 'normal') {
            document.body.classList.add(mode);
        }

        // Restaura la posición del scroll
        window.scrollTo(0, currentScroll);

        // Actualiza el estado de la barra basado en el scroll actual
        updateNavbarState();
    };

    // Evento para el selector de modo de color
    if (colorModeSelect) {
        colorModeSelect.addEventListener('change', (e) => {
            const selectedMode = e.target.value;
            changeColorMode(selectedMode);
        });
    }

    // Evento para manejar el scroll
    window.addEventListener('scroll', updateNavbarState);

    // Asegura el estado inicial al cargar la página
    updateNavbarState();

    console.log('Barra de navegación y modos de color inicializados correctamente.');
});
