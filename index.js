const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.getElementById("container");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const randomId = Math.floor(Math.random() * 826) + 1;
  traerPokemon(randomId);
});

function traerPokemon(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
      crearPokemon(data);
    });
}

function crearPokemon(character) {
  const img = document.createElement("img");
  img.src = character.image;
  img.classList.add("image");

  const name = document.createElement("h3");
  name.textContent = character.name;
  img.classList.add("name");

  const status = document.createElement("p");
  status.textContent = character.status;

  const div = document.createElement("div");
  div.classList.add("card");
  div.appendChild(img);
  div.appendChild(name);
  div.appendChild(status);
  container.appendChild(div);
}
