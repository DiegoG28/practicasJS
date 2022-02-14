//[■,■,■,■].map(■→●) ⇒ [●,●,●,●]
//[■,●,■,▲].filter(■→true) ⇒ [■,■]
//[■,●,■,▲].find(●→true) ⇒ ●
//[■,●,■,▲].findIndex(●→true) ⇒ 1
//[■,●,■,▲].fill(●) ⇒ [●,●,●,●]
//[■,●,■,▲].some(●→true) ⇒ true
//[■,●,■,▲].every(●→true) ⇒ false

const lista1 = [
     100,
     200,
     300,
     500,
];

function calcularPromedio(lista){
     const sumaLista = lista.reduce((total, valorActual) => total+valorActual);
          
     const promedioLista = sumaLista / lista.length;
     return promedioLista;
}