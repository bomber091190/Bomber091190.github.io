const filmes = [
	{ t: "Ghost - Do Outro Lado da Vida", img: "https://m.media-amazon.com/images/M/MV5BNTgyY2Y0ODUtYjQyYi00NjJhLTg4Y2EtMTAzMTEzYjI2MzZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" },
	{ t: "Ghostbusters", img: "https://m.media-amazon.com/images/M/MV5BMTQ0MDE5MTg4M15BMl5BanBnXkFtZTcwMzYzOTQyMw@@._V1_.jpg" },
	{ t: "Ghost Rider", img: "https://m.media-amazon.com/images/M/MV5BMTk4OTQzMDE1OF5BMl5BanBnXkFtZTcwMDI5MTUyMQ@@._V1_.jpg" }
];

function mostrar(lista) {
	const container = document.getElementById("filmes");
	container.innerHTML = "";
	lista.forEach(filme => {
		container.innerHTML += `
			<div class="card">
				<img src="${filme.img}" style="width:100%; border-radius:10px;">
				<h3>${filme.t}</h3>
			</div>
		`;
	});
}

mostrar(filmes);
