import {netprice,taxprice} from "./calculate";

const quant = document.querySelector("#quantity");
const taxes = document.querySelector("#tax");
const prices = document.querySelector("#price")
const form = document.querySelector("#totalizer-form");
const div = document.querySelector("#resultado-div");

function checkDiscount(qdiscount){
  const discounts={
    1000:3,
    3000:5,
    7000:7,
    10000:10,
    30000:15,
  };
  return discounts[qdiscount]?? 0
}

function getTax(stax){
  const statetax={
    "UT":6.65,
    "NV":8.00,
    "TX":6.25,
    "AL":4.00,
    "CA":8.25,
  };
  return statetax[stax]?? "State Not Found"
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const price = Number.parseInt(prices.value);
  const quantity = Number.parseInt(quant.value);
  const discount = checkDiscount(quantity);
  const tax = getTax(taxes.value);
  const np=netprice(price,quantity)
  const distoap = (np*discount)/100
  const taxtoap= (np*tax)/100 
  const tp= np + taxtoap - distoap
  
  div.innerHTML = "<p>" + `The NetPrice is (${price}x${quantity}): ${np}, ` + `Discount to apply (${discount}%): ${distoap}, ` + `Tax rate for ${taxes.value} is (${tax}%): $ ${taxtoap}, ` + `Total Price (Tax And Discount applied): $ ${tp} `  + "</p>";
});
