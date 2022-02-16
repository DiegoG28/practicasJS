//Helper
function isOdd(x){
     return (x % 2 === 0);
}

function median(list) {
     let median;
     const half = Math.trunc(list.length / 2);

     if(isOdd(list.length)){
          const element1 = list[half];
          const element2 = list[half-1];
          median = (element1 + element2) / 2;
     }else{
          median = list[half];
     }
     
     return median;
}

const mxSalaries = mexico.map(({salary}) => salary).sort((a,b) => a-b);

//Logic for getting the top 10 salaries
const sliceStart = Math.trunc(mxSalaries.length * 0.9);
const top10Salaries = mxSalaries.slice(sliceStart);

//Medians
const generalMedian = median(mxSalaries);
const top10Median = median(top10Salaries);

