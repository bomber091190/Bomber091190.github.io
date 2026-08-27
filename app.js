
const filmes = [
	{ t: "Vingadores", img: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
	{ t: "Barbie", img: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi81RuehKBHyl.jpg" },
	{ t: "Mario", img: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV.jpg" }
];

const grid = document.getElementById("grid");

function mostrar(lista) {
	grid.innerHTML = lista
		.map(
			filme => `
				<div class="card" onclick="window.open('https://www.primevideo.com/search?phrase=${encodeURIComponent(filme.t)}', '_blank')">
					<img src="${filme.img}" alt="${filme.t}">
					<div class="info">
						<h3>${filme.t}</h3>
						<button class="btn" type="button">Assistir Oficial</button>
					</div>
				</div>`
		)
		.join("");
}

function mostrar(lista) {
  const container = document.getElementById("filmes");
  container.innerHTML = "";
  lista.forEach(filme => {
    container.innerHTML += `
      <div class="card">
        <img src="${filme.img}">
        <h3>${filme.t}</h3>
      </div>
    `;
  });
}
