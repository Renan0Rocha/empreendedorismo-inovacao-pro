document.getElementById("ideaForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  let resultado = `<h2>Ideia encaminhada!</h2><ul>`;
  for (let [key, value] of formData.entries()) {
    resultado += `<li><strong>${key}:</strong> ${value}</li>`;
  }
  resultado += "</ul>";
  document.getElementById("resultado").innerHTML = resultado;
});
