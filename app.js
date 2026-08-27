const APIKEY = "3d855a3b";
const busca = document.getElementById("busca");
const grid = document.getElementById("grid");

async function buscarFilme(nome) {
	grid.innerHTML = "<h3 style='color:white'>Carregando...</h3>";

	try {
		const res = await fetch(
			`https://www.omdbapi.com/?s=${encodeURIComponent(nome)}&apikey=${APIKEY}`
		);
		const dados = await res.json();

		if (dados.Response === "False") {
			grid.innerHTML = "<h3 style='color:white'>Nenhum filme encontrado</h3>";
			return;
		}

		grid.innerHTML = "";
		dados.Search.forEach((filme) => {
			const poster = filme.Poster === "N/A"
				? "https://placehold.co/300x450?text=Sem+Poster"
				: filme.Poster;

			grid.innerHTML += `
				<div class="card">
					<img src="${poster}" alt="Poster de ${filme.Title}" style="width:100%; height:300px; object-fit:cover;">
					<h3>${filme.Title}</h3>
					<p>${filme.Year}</p>
				</div>
			`;
		});
	} catch (erro) {
		grid.innerHTML = "<h3 style='color:white'>Erro ao buscar filmes</h3>";
		console.error(erro);
	}
}

buscarFilme("ghost");

busca.addEventListener("input", () => {
	if (busca.value.length > 2) {
		buscarFilme(busca.value);
	}
});
