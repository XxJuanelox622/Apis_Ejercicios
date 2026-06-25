async function cargarPublicaciones() {
    const feed = document.getElementById("feed");

    // Mostramos un mensaje temporal mientras descarga los nuevos datos
    feed.innerHTML = "<p style='text-align: center; color: #777;'>Cargando nuevas publicaciones...</p>";

    try {
        // Generamos un número de salto aleatorio entre 0 y 50 para traer posts distintos cada vez
        const saltoAleatorio = Math.floor(Math.random() * 50);
        
        // Consumimos la API pidiendo 10 posts saltándonos una cantidad aleatoria
        const respuesta = await fetch(`https://dummyjson.com/posts?limit=10&skip=${saltoAleatorio}`);
        const datos = await respuesta.json();

        // Limpiamos el contenedor
        feed.innerHTML = "";

        // Recorremos los nuevos posts recibidos y los inyectamos en el HTML
        datos.posts.forEach(post => {
            feed.innerHTML += `
                <div class="post-card">
                    <div class="post-user">👤 Usuario #${post.userId}</div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-body">${post.body}</p>
                    <div class="post-footer">
                        <span>❤️ ${post.reactions.likes || 0} Me gusta</span>
                    </div>
                </div>
            `;
        });

    } catch (error) {
        console.error("Error al conectar con la API:", error);
        feed.innerHTML = "<p style='color: red; text-align: center;'>No se pudieron cargar las publicaciones. Intenta de nuevo.</p>";
    }
}

// Primera carga automática al abrir la página por primera vez
cargarPublicaciones();