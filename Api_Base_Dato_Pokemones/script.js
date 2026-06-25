async function buscarPokemon() {

    const nombre = document
        .getElementById("pokemon")
        .value
        .toLowerCase();

    try {

        const respuesta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nombre}`
        );

        if (!respuesta.ok) {
            throw new Error();
        }

        const pokemon = await respuesta.json();

        document.getElementById("resultado").innerHTML = `
            <h2>${pokemon.name.toUpperCase()}</h2>

            <img src="${pokemon.sprites.front_default}">

            <p><strong>ID:</strong> ${pokemon.id}</p>

            <p><strong>Altura:</strong> ${pokemon.height}</p>

            <p><strong>Peso:</strong> ${pokemon.weight}</p>

            <p><strong>Tipo:</strong> ${pokemon.types
                .map(tipo => tipo.type.name)
                .join(", ")}</p>
        `;

    } catch {

        document.getElementById("resultado").innerHTML =
            "<p>❌ Pokémon no encontrado</p>";
    }
}