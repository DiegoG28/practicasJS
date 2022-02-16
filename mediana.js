let mediana = 0;

function esPar(numero){
     return (numero % 2 === 0);
}

function calcularMediana(lista){
     lista.sort((a,b) => a - b);
     const mitadLista1 = Math.trunc(lista.length / 2);

     if(esPar(lista.length)){
          const elemento1 = lista[mitadLista1];
          const elemento2 = lista[mitadLista1-1];
          mediana = (elemento1 + elemento2)/2;
     }else{
          mediana = lista[mitadLista1];
     }

     return mediana;
}

