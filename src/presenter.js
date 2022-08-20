

const quant = document.querySelector("#quantity");
const form = document.querySelector("#quantity-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const quantity = Number.parseInt(quant.value);

  div.innerHTML = "<p>" + quantity + "</p>";
});
