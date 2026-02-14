document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Cerrar otros items si se desea (opcional)
            // document.querySelectorAll('.accordion-item').forEach(i => {
            //    if (i !== item) i.classList.remove('active');
            // });

            item.classList.toggle('active');
            
            // Cambiar el icono de + a -
            const span = header.querySelector('span');
            if (item.classList.contains('active')) {
                span.textContent = '−';
            } else {
                span.textContent = '+';
            }
        });
    });
});
