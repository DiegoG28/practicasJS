function calcularModa(lista){
     const listaCount ={};

     //Iteramos la lista por cada elemento que tenga
     for (let elemento of lista){
          //Comprobamos si la listaCount tiene una propiedad con el nombre que la variable elemento tenga
          if(listaCount.hasOwnProperty(elemento)){
               //Si lo tiene, significa que ya tenía un valor y le sumamos 1
               listaCount[elemento] +=1;
          }else{
               //Si no, agregamos esa propiedad y le damos el valor de 1. (listaCount[elemento] es los mismo que listaCount.elemento)
               listaCount[elemento] = 1;
          }
     }

     //Con object.entires convertimos listaCount a un arreglo se segunda dimensión, y con sort ordenamos ese arreglo de menor a mayor según el valor que tenga cada arreglo dentro del arreglo.
     const listaArray = Object.entries(listaCount).sort(function (a,b){
          return a[1] - b[1];
     });

     //El arreglo con el mayor valor quedará al último, así que lo retornamos y obtendremos el número junto con la cantidad de veces que se repite.
     return listaArray[listaArray.length-1];
}




//const productos = [
//     { nombre: "Camiseta", precio: 500 },
//     { nombre: "Pantalón", precio: 300 },
//     { nombre: "Zapatos", precio: 1200},
//     { nombre: "Zapatos", precio: 200},
//];

//const productoMenor1000 = producto => producto.precio < 1000;
//const obtenerPrecio = (producto => producto.precio);
//const sumarPrecios = ((total, valorActual) => total + valorActual);
//const totalProductoMenor1000 = productos.filter(productoMenor1000).map(obtenerPrecio).reduce(sumarPrecios);

//const totalProductoMenor1000v2 = productos.reduce(function(total, valorActual){
//     if(valorActual.precio < 1000){
//          return total + valorActual.precio;
//     }else{
//          return total;
//     }
//},0);
