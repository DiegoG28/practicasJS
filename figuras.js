//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//Código del triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2
 }

console.groupEnd();

//Código del círculo
console.group("Círculo");

const pi = Math.PI;
function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio){
    return (radio * radio) * pi;
}

console.groupEnd();

//Interactuando con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("lado1Triangulo");
    const inputLado2 = document.getElementById("lado2Triangulo");
    const inputBase = document.getElementById("base");

    const valueLado1 = inputLado1.value;
    const valueLado2 = inputLado2.value;
    const valueBase = inputBase.value;

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("base");
    const inputAltura = document.getElementById("altura");

    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}