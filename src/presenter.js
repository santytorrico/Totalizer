

const quant = document.querySelector("#quantity");
const prices = document.querySelector("#price")
const form = document.querySelector("#totalizer-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const price = Number.parseInt(prices.value);
  const quantity = Number.parseInt(quant.value);


  div.innerHTML = "<p>" + `Actual quantity ${quantity} ` + `Price ${price}` + "</p>";
});
