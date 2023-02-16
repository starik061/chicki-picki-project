// $("select").on("change", function () {
//   const fixPrice = $(".fix-price").html().replace(/./, "");
//   const totalPrice = $("#price");
//   const val = this.value.match(/\d/)[0];
//   const result = +fixPrice + val;
//   $(totalPrice).html(result);
// });

const convert = document.getElementById("convert");
const result = document.getElementById("result");
const to = document.getElementById("to")
const amount = document.getElementById("amount");
convert.addEventListener("click", function() {
   let toCurrency = to.value;
   let amt = amount.value;
   fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
   .then(response => {
         return response.json();
   })
   .then(data => {
      let rate = data.rates[toCurrency];
      let total = rate * amt;
      result.innerHTML = `${amt} = ${total}
      ${toCurrency}`;
   });
});