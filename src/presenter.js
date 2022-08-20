import netprice from "./calculate";

const quant = document.querySelector("#quantity");
const taxes = document.querySelector("#tax");
const prices = document.querySelector("#price")
const form = document.querySelector("#totalizer-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const price = Number.parseInt(prices.value);
  const quantity = Number.parseInt(quant.value);
  const tax = Number.parseInt(taxes.value);

  div.innerHTML = "<p>" + `The net Price is ${netprice(price,quantity)} `+ `Taxes applied to this product ${tax}%` + "</p>";
});
