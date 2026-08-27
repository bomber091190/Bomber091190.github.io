const filmes = [
  { t: "Ghost", img: "https://picsum.photos/300/450?random=1" },
  { t: "Ghostbusters", img: "https://picsum.photos/300/450?random=2" },
  { t: "Ghost Rider", img: "https://picsum.photos/300/450?random=3" }
];

function mostrar(lista) {
	const container = document.getElementById("grid");
	container.innerHTML = "";
	lista.forEach(filme => {
		container.innerHTML += `
			<div class="card">
				<img src="${filme.img}" style="width:100%">
				<h3>${filme.t}</h3>
			</div>
		`;
	});
}

mostrar(filmes);
