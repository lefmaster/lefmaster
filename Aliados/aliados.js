document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sponsorship-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí normalmente conectarías con un servicio de correo o API
        alert('¡Gracias por tu interés! Nuestro equipo de mercadeo te contactará en las próximas 24 horas para enviarte el dossier de la LEF.');
        
        form.reset();
    });

    // Pequeña animación de entrada para las tarjetas
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
