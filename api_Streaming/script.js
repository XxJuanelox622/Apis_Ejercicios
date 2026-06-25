const API_KEY = "AIzaSyArYuGMavf80kEQD6Qir9KQbaQBXAQFw60";

document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("btnBuscar")
        .addEventListener("click", buscarVideos);
});

async function buscarVideos() {

    const busqueda = document
        .getElementById("searchInput")
        .value
        .trim();

    if (!busqueda) {
        alert("Escribe algo para buscar");
        return;
    }

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(busqueda)}&type=video&maxResults=12&key=${API_KEY}`;

    try {

        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        if (datos.error) {
            alert("Error: " + datos.error.message);
            return;
        }

        mostrarVideos(datos.items);

    } catch (error) {
        console.error(error);
        alert("Error al conectar con la API");
    }
}

function mostrarVideos(videos) {

    const contenedor = document.getElementById("videos");
    contenedor.innerHTML = "";

    videos.forEach(video => {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
            <h3>${video.snippet.title}</h3>
        `;

        card.addEventListener("click", () => {
            window.open(
                `https://www.youtube.com/watch?v=${video.id.videoId}`,
                "_blank"
            );
        });

        contenedor.appendChild(card);
    });
}