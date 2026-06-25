const boton = document.getElementById("btnUbicacion");

let mapa;

boton.addEventListener("click", obtenerUbicacion);

function obtenerUbicacion(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(
            mostrarUbicacion,
            mostrarError,
            {
                enableHighAccuracy:true
            }
        );

    }else{

        document.getElementById("datos").innerHTML =
        "Tu navegador no soporta geolocalización.";

    }
}

function mostrarUbicacion(posicion){

    const lat = posicion.coords.latitude;
    const lon = posicion.coords.longitude;
    const precision = posicion.coords.accuracy;

    document.getElementById("datos").innerHTML = `
        <strong>Latitud:</strong> ${lat}<br>
        <strong>Longitud:</strong> ${lon}<br>
        <strong>Precisión:</strong> ${precision.toFixed(2)} metros
    `;

    if(mapa){
        mapa.remove();
    }

    mapa = L.map('map').setView([lat, lon], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(mapa);

    L.marker([lat, lon])
        .addTo(mapa)
        .bindPopup("Tu ubicación actual")
        .openPopup();
}

function mostrarError(error){

    document.getElementById("datos").innerHTML =
    "No fue posible obtener la ubicación.";

}