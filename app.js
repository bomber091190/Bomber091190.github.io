const APIKEY = "3d855a3b";

const busca = document.getElementById("busca");
const grid = document.getElementById("grid");

const modal = document.getElementById("modal");
const detalhes = document.getElementById("detalhes");
const fechar = document.getElementById("fechar");

async function buscarFilme(nome) {
	if (!nome.trim()) {
		grid.innerHTML = `
			<div class="mensagem">
				<h3>Digite o nome de um filme 🎬</h3>
			</div>
		`;
		return;
	}

	grid.innerHTML = `
		<div class="mensagem">
			<h3>🔎 Procurando filmes...</h3>
		</div>
	`;

	try {
		const url = `https://www.omdbapi.com/?s=${encodeURIComponent(nome)}&apikey=${APIKEY}`;
		const resposta = await fetch(url);
		const dados = await resposta.json();

		if (dados.Response === "False") {
			grid.innerHTML = `
				<div class="mensagem">
					<h3>😢 Nenhum filme encontrado</h3>
					<p>${dados.Error}</p>
				</div>
			`;
			return;
		}

		grid.innerHTML = "";

		dados.Search.forEach((filme) => {
			const poster = filme.Poster === "N/A"
				? "https://placehold.co/300x450?text=Sem+Poster"
				: filme.Poster;

			const card = document.createElement("div");
			card.className = "card";
			card.innerHTML = `
				<img src="${poster}" alt="Poster de ${filme.Title}">
				<div class="card-info">
					<h3>${filme.Title}</h3>
					<p>📅 ${filme.Year}</p>
					<p>🎬 ${filme.Type}</p>
				</div>
			`;

			card.addEventListener("click", () => abrirDetalhes(filme.imdbID));
			grid.appendChild(card);
		});
	} catch (erro) {
		console.error(erro);
		grid.innerHTML = `
			<div class="mensagem">
				<h3>❌ Erro ao conectar com a API</h3>
				<p>Verifique sua conexão.</p>
			</div>
		`;
	}
}

async function abrirDetalhes(id) {
	modal.classList.add("ativo");
	detalhes.innerHTML = `
		<div class="mensagem">
			<h3>Carregando detalhes...</h3>
		</div>
	`;

	try {
		const resposta = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${APIKEY}`);
		const filme = await resposta.json();
		const poster = filme.Poster === "N/A"
			? "https://placehold.co/300x450?text=Sem+Poster"
			: filme.Poster;

		detalhes.innerHTML = `
			<div class="detalhes">
				<div><img src="${poster}" alt="Poster de ${filme.Title}"></div>
				<div>
					<h2>${filme.Title}</h2>
					<div class="meta">
						<span>📅 ${filme.Year}</span>
						<span>⏱️ ${filme.Runtime}</span>
						<span>🎬 ${filme.Genre}</span>
						<span class="nota">⭐ IMDb ${filme.imdbRating}</span>
					</div>
					<p>${filme.Plot}</p>
					<p><strong>🎭 Atores:</strong> ${filme.Actors}</p>
					<p><strong>🎬 Diretor:</strong> ${filme.Director}</p>
					<p><strong>✍️ Roteiro:</strong> ${filme.Writer}</p>
					<p><strong>🌎 País:</strong> ${filme.Country}</p>
				</div>
			</div>
		`;
	} catch (erro) {
		console.error(erro);
		detalhes.innerHTML = `
			<div class="mensagem">
				<h3>❌ Não foi possível carregar os detalhes.</h3>
			</div>
		`;
	}
}

fechar.addEventListener("click", () => modal.classList.remove("ativo"));

modal.addEventListener("click", (evento) => {
	if (evento.target === modal) modal.classList.remove("ativo");
});

let timer;
busca.addEventListener("input", () => {
	clearTimeout(timer);
	const texto = busca.value.trim();

	if (texto.length < 3) return;

	timer = setTimeout(() => buscarFilme(texto), 500);
});

buscarFilme("ghost");
