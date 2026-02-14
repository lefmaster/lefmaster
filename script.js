document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil (Hamburguesa)
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling para los enlaces de navegación
    const links = document.querySelectorAll('.nav-links a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Cerrar menú móvil al hacer click
        if(navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }

        window.scrollTo({
            top: targetSection.offsetTop - 70, // -70 para compensar el header fijo
            behavior: 'smooth'
        });
    }
});
