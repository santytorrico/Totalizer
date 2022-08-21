import {netprice,taxprice} from "./calculate";

const quant = document.querySelector("#quantity");
const taxes = document.querySelector("#tax");
const prices = document.querySelector("#price")
const form = document.querySelector("#totalizer-form");
const div = document.querySelector("#resultado-div");

function getTranslationMap(qdiscount){
  const discounts={
    1000:3,
    3000:5,
    7000:7,
    10000:10,
    30000:15,
  };
  return discounts[qdiscount]?? 0
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const price = Number.parseInt(prices.value);
  const quantity = Number.parseInt(quant.value);
  const tax = Number.parseInt(taxes.value);
  const np=netprice(price,quantity)
  const taxap= (np*tax)/100 
  const tp= np + taxap
  div.innerHTML = "<p>" + `Price whith Taxes applied to this product ${tp} ` + `Discount ${getTranslationMap(quantity)} ` + "</p>";
});
