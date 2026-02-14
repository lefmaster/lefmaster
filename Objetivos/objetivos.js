document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los elementos que queremos animar
    const faders = document.querySelectorAll('.fade-in');

    // Configuramos el observador
    const appearOptions = {
        threshold: 0.1, // El elemento debe estar al menos 10% visible para activarse
        rootMargin: "0px 0px -50px 0px" // Activa un poco antes de llegar al fondo de la pantalla
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Si el elemento es visible, añadimos la clase que detona la animación CSS
                entry.target.classList.add('visible');
                // Dejamos de observarlo para que la animación no se repita
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Aplicamos el observador a cada tarjeta
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
