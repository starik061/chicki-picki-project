$("select").on("change", function () {
  const fixPrice = $(".fix-price").html().replace(/./, "");
  const totalPrice = $("#price");
  const val = this.value.match(/\d/)[0];
  const result = +fixPrice + val;
  $(totalPrice).html(result);
});