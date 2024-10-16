document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll('.video');

    // Función para abrir en pantalla completa
    function openFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    }

    // Función para cerrar pantalla completa
    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }

    }

    videos.forEach(video => {
        video.addEventListener('click', () => {
            // Si el video está en pausa, lo reproducimos; si está reproduciendo, lo pausamos
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }

            // Abrimos pantalla completa si no lo está
            if (!document.fullscreenElement) {
                openFullscreen(video.parentElement); // Aplicamos fullscreen al contenedor del video
                video.parentElement.classList.add('fullscreen');
            } else {
                closeFullscreen();

            }
        });
    });

    // Evento para salir de pantalla completa y quitar la clase cuando sea necesario
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            // Si ya no estamos en pantalla completa, remover la clase 'fullscreen'
            videos.forEach(video => {
                video.parentElement.classList.remove('fullscreen');
                video.pause();

            });
        }
    });
});
