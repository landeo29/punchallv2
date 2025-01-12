document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const colorModeSelect = document.getElementById('colorMode');

    /**
     * Alterna el estado del menú hamburguesa.
     */
    const toggleMenu = () => {
        navLinks.classList.toggle('active');
    };

    // Evento para abrir/cerrar el menú hamburguesa
    menuToggle.addEventListener('click', toggleMenu);

    /**
     * Cambia el modo de color según la selección del usuario.
     */
    const changeColorMode = (mode) => {
        document.body.className = ''; // Limpia todas las clases del body
        if (mode && mode !== 'normal') {
            document.body.classList.add(mode);
        }
    };

    // Evento para el selector de modo de color
    if (colorModeSelect) {
        colorModeSelect.addEventListener('change', (e) => {
            const selectedMode = e.target.value;
            changeColorMode(selectedMode);
        });
    }

    console.log('Menú y selector inicializados correctamente.');
});
