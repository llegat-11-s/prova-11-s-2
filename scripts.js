document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.titles button');
    const area = document.getElementById('main-content');

    const updateContent = (targetId, clickedButton) => {
        const template = document.getElementById(targetId);

        if (template) {
            // Efecto de salida
            area.classList.remove('show');

            setTimeout(() => {
                // Cambiar contenido
                area.innerHTML = ""; 
                const cloned = template.content.cloneNode(true); 
                area.appendChild(cloned); 

                // Marcar botón activo
                buttons.forEach(btn => btn.classList.remove('active'));
                if (clickedButton) clickedButton.classList.add('active');

                // Efecto de entrada
                area.classList.add('show');
            }, 250);
        }
    };

    // Asignar eventos a los botones
    buttons.forEach(boton => {
        boton.addEventListener('click', () => {
            const targetId = boton.getAttribute('data-target');
            updateContent(targetId, boton);
        });
    });

    // Cargar sección inicial
    updateContent('intro', document.getElementById('btn_intro'));
});
