const filmes = [
  { t: "Ghost", img: "https://via.placeholder.com/300x450?text=Ghost" },
  { t: "Ghostbusters", img: "https://via.placeholder.com/300x450?text=Ghostbusters" },
  { t: "Ghost Rider", img: "https://via.placeholder.com/300x450?text=Ghost+Rider" }
];

function mostrar(lista) {
  const container = document.getElementById("grid");
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

mostrar(filmes);