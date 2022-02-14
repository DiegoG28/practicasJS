function calcularModa(lista){
     const listaCount ={};

     for (let elemento of lista){
          listaCount[elemento] = (listaCount[elemento]) ? 
          listaCount[elemento] +=1 : listaCount[elemento] = 1;
     }

     const listaArray = Object.entries(listaCount).sort((a,b) => a[1] - b[1]);

     return listaArray[listaArray.length-1];
}