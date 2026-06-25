## 1 Mi Ubicación (Geolocalización + Mapa)

Esta página obtiene la ubicación actual del usuario usando la API de geolocalización del navegador y la muestra en un mapa interactivo usando Leaflet y OpenStreetMap.

---

###  Funcionalidades:
- Obtener ubicación actual al presionar un botón
- Mostrar datos de ubicación:
  - Latitud
  - Longitud
  - Precisión
- Mostrar un mapa centrado en la ubicación
- Agregar un marcador en la posición del usuario
- Re-generar el mapa si se solicita nuevamente la ubicación

---

###  Tecnologías y APIs utilizadas:
- Geolocation API (navegador)
- Leaflet.js (librería de mapas)
- OpenStreetMap (mapas base)

---

###  Descripción:
El usuario puede presionar un botón para obtener su ubicación actual. El sistema solicita permiso al navegador y, si es aceptado, muestra las coordenadas y un mapa centrado en la posición detectada con un marcador indicando la ubicación exacta.


## 2 Buscador de Videos (YouTube API)

Esta página permite buscar videos en YouTube utilizando la **YouTube Data API v3**, mostrando resultados dinámicos en forma de tarjetas.

---

###  Funcionalidades:
- Buscar videos por palabra clave
- Mostrar resultados en tarjetas con:
  - Miniatura del video
  - Título
- Abrir el video en YouTube al hacer clic
- Mostrar hasta 12 resultados por búsqueda
- Validación de búsqueda vacía

---

###  API utilizada:
- YouTube Data API v3  
https://developers.google.com/youtube/v3

---

###  Descripción:
El usuario escribe una búsqueda en el campo de texto y la aplicación consulta la API de YouTube. Los resultados se muestran como tarjetas con imagen y título. Al hacer clic en una tarjeta, se abre el video en una nueva pestaña de YouTube.


## 3 Feed de Publicaciones (API de Posts)

Esta página simula un feed de red social consumiendo la API de **DummyJSON**, mostrando publicaciones aleatorias de usuarios.

---

###  Funcionalidades:
- Cargar publicaciones automáticamente al abrir la página
- Botón para actualizar y cargar nuevos posts
- Mostrar publicaciones aleatorias en cada carga
- Mostrar información del post:
  - Usuario (ID)
  - Título del post
  - Contenido
  - Reacciones (likes)
- Mensajes de carga mientras se obtienen los datos
- Manejo de errores si la API falla

---

###  API utilizada:
- DummyJSON Posts API  
https://dummyjson.com/

---

###  Descripción:
La página obtiene publicaciones desde una API externa y las muestra en forma de tarjetas tipo red social. El usuario puede presionar un botón para actualizar los posts y cargar contenido nuevo aleatorio, simulando un feed dinámico como una red social real.


##  Pokédex (API de Pokémon)

Esta página permite buscar información de Pokémon utilizando la **PokeAPI**, mostrando datos en pantalla de forma dinámica.

---

###  Funcionalidades:
- Buscar Pokémon por nombre
- Mostrar información del Pokémon:
  - Nombre
  - Imagen oficial
  - ID
  - Altura
  - Peso
  - Tipo(s)
- Manejo de errores si el Pokémon no existe
- Conversión automática de texto a minúsculas para búsquedas

---

###  API utilizada:
- PokeAPI  
https://pokeapi.co/

---

###  Descripción:
El usuario ingresa el nombre de un Pokémon y la aplicación consulta la API de PokeAPI. Si el Pokémon existe, se muestran sus datos principales junto con su imagen. Si no se encuentra, se muestra un mensaje de error.
