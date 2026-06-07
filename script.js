document.addEventListener("DOMContentLoaded", function () {
    // 1. Creamos la estructura del Lightbox dinámicamente en el HTML
    const fondoModal = document.createElement("div");
    fondoModal.className = "lightbox-modal";
    
    const imagenModal = document.createElement("img");
    imagenModal.className = "lightbox-contenido";
    
    fondoModal.appendChild(imagenModal);
    document.body.appendChild(fondoModal);

    // 2. Seleccionamos todas las imágenes dentro de los marcos de los casos
    const imagenes = document.querySelectorAll(".marco-imagen img");

    imagenes.forEach(img => {
        img.style.cursor = "zoom-in"; // Cambia el cursor para indicar que se puede hacer clic
        
        img.addEventListener("click", function () {
            // Al hacer clic, copiamos la ruta de la imagen y mostramos el modal
            imagenModal.src = this.src;
            fondoModal.style.display = "flex";
            fondoModal.style.display = "center";
            document.body.style.overflow = "hidden"; // Evita que la página se mueva de fondo
        });
    });

    // 3. Al hacer clic en cualquier parte del fondo oscuro, se cierra
    fondoModal.addEventListener("click", function () {
        fondoModal.style.display = "none";
        document.body.style.overflow = "auto"; // Devuelve el scroll normal
    });
});
