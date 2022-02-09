const coupons = [
     {
          name: "prettyfriday",
          discount: 15,
     },
     {
          name: "awesome",
          discount: 25,
     },
     {
          name: "luckybastard",
          discount: 30,
     },
];

function getPriceDiscount(price, discount){
     return price * (1-(discount/100));
}

function priceDiscountButton(){
     const inputPrice = document.getElementById("inputPrice");
     const priceValue = inputPrice.value;

     const inputCoupon = document.getElementById("inputCoupon");
     let couponValue = inputCoupon.value;
     
     const resultPrice = document.getElementById("resultPrice");

     function checkCoupon(coupon){//Esta función la usa find para ir comparando cada valor de la propiedad name en nuestro array con el cupón ingresado por el usuario.
          return coupon.name === couponValue;
     }

     function isCouponValid(){//Usa la función find para devolvernos un objeto y sus propiedades, o undefined en caso de que no encuentre nada.
          return couponValue = coupons.find(checkCoupon);
     }
     
     if(isCouponValid()){
          const discount = couponValue.discount;
          const priceDiscount = getPriceDiscount(priceValue, discount);
          resultPrice.innerText = "El precio con descuento es " + "$" + priceDiscount;
          
     }else{
          console.log("Cupón no válido")  
     }
}


//La función array.includes() nos permite validar si un elemento ha sido almacenado en el array.

//La función array.find() devuelve el primer elemento del array que cumple con la función de prueba o condición, en este caso la condición es que algún valor de la propiedad name sea igual al cupón ingresado por el usuario. Ejecutará esta "prueba" hasta encontrar una incidencia, de lo contrario, devolverá undefined.

//Algo muy importante a aclarar es que, aunque couponValid no contiene funciones que devuelvan true o false, JavaScript por defecto puede determinar si cualquier función es true o false. Será false cuando éste sea 0, null, undefined o false, y será true cuando no sea ninguno de estos.

//Cuando coupon.find() devuelve un valor, JavaScript puede determinar que es true cuando no nos retorna 0, null, undefined o false. Pero si coupon.find no encuentra nada, nos devolverá undefined y entonces la función será false.
