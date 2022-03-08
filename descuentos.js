/* function ButtonPriceDiscount()
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultPrice");

    resultPrice.innerText ="El precio con descuento son: $" + precioConDescuento; +
}*/

const coupons =
[
"AB",
"CD",
"FG",

]

 function ButtonPriceCupon()
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
    }

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
     } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
     } else if (couponValue === "es_un_secreto") {
        descuento = 25;
     }
}

const precioConDescuento = ButtonPriceCupon(priceValue, couponValue);

  const resultPrice = document.getElementById("ResultPrice");
  resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}
