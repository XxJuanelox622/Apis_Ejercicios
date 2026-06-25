# Proyecto: Consumo de APIs con JavaScript

## Descripción general
Este proyecto es una colección de aplicaciones web desarrolladas con HTML, CSS y JavaScript puro. Su objetivo es demostrar el consumo correcto de APIs públicas, la separación de lógica y presentación, y el manejo de datos asíncronos con buenas prácticas de desarrollo frontend.

Cada módulo está diseñado de forma independiente, manteniendo código modular, legible y estructurado.

---

# 1. Mi Ubicación (Geolocalización + Mapa)

## Descripción
Aplicación que obtiene la ubicación del usuario mediante la Geolocation API del navegador y la representa en un mapa interactivo con Leaflet y OpenStreetMap.

## Arquitectura y buenas prácticas
- Separación clara entre lógica de obtención de datos y renderizado del mapa
- Funciones reutilizables para inicialización y actualización del mapa
- Manejo de errores si el usuario niega permisos o falla la API

## Funcionalidades
- Obtener ubicación actual con botón
- Mostrar latitud, longitud y precisión
- Renderizar mapa centrado dinámicamente
- Agregar y actualizar marcador
- Re-render seguro del mapa en cada solicitud

## Tecnologías
- Geolocation API
- Leaflet.js
- OpenStreetMap

---

# 2. Buscador de Videos (YouTube API)

## Descripción
Aplicación que consume la YouTube Data API v3 para realizar búsquedas dinámicas de videos y mostrar resultados estructurados en interfaz tipo tarjetas.

## Arquitectura y buenas prácticas
- Separación entre capa de API (fetch) y capa de UI
- Funciones asíncronas con manejo de errores (try/catch)
- Validación de entrada del usuario antes de consumir la API
- Manejo de respuestas vacías o inválidas

## Funcionalidades
- Búsqueda por palabra clave
- Renderizado dinámico de resultados (máximo 12)
- Tarjetas con miniatura y título
- Redirección a YouTube en nueva pestaña
- Validación de input vacío

## API utilizada
https://developers.google.com/youtube/v3

---

# 3. Feed de Publicaciones (DummyJSON API)

## Descripción
Simulación de un feed tipo red social consumiendo la API de DummyJSON, mostrando publicaciones dinámicas y aleatorias.

## Arquitectura y buenas prácticas
- Función separada para consumo de API
- Función independiente para renderizado del feed
- Manejo de estados: loading, success y error
- Control de errores de red y API

## Funcionalidades
- Carga automática al iniciar
- Recarga manual de publicaciones
- Posts aleatorios en cada solicitud
- Render de usuario, contenido y reacciones
- Indicador de carga mientras se obtiene información
- Manejo de fallos de API

## API utilizada
https://dummyjson.com/

---

# 4. Pokédex (PokeAPI)

## Descripción
Aplicación que permite consultar información de Pokémon mediante la PokeAPI, mostrando datos estructurados de forma dinámica.

## Arquitectura y buenas prácticas
- Función separada para consulta de API
- Función separada para renderizar datos del Pokémon
- Normalización de input (lowercase)
- Manejo de errores para Pokémon inexistentes
- Validación de respuesta antes de renderizar

## Funcionalidades
- Búsqueda por nombre
- Mostrar información completa:
  - Nombre
  - Imagen oficial
  - ID
  - Altura
  - Peso
  - Tipos
- Manejo de errores si no existe el Pokémon

## API utilizada
https://pokeapi.co/

---
