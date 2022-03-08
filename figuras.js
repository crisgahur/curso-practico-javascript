console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado)
{ 
    return lado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado+ " cm");
}
perimetroCuadrado();

function areaCuadrado(lado)
{
    return lado * lado;
// console.log("El area del cuadrado es: " + areaCuadrado+ " cm2");
}
areaCuadrado();

console.groupEnd(); //Este console, junto con el de la linea 1 lo que hace es agrupar todos los console que hay dentro de estos en uno solo.

// Codigo del cuadrado



console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


//console.log("Los lados del triangulo miden: " 
//  + ladoTriangulo1 
//  + "cm, " 
//  + ladoTriangulo2 
//  +"cm, " + baseTriangulo 
//  +"cm"
//);

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo +  " cm")

function perimetroTriangulo (lado1, lado2, base)
{
    return lado1 + lado2 + base;
//console.log("El perimetro del triangulo es: " + perimetroTriangulo+ " cm");
}
perimetroTriangulo();

function areaTriangulo (base, altura)
{
    return (base*altura)/2;
//console.log("El area del triangulo es: " + areaTriangulo+ " cm2");
}
areaTriangulo();

console.groupEnd();

// Codigo del triangulo





console.group("Circulo");

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm"); 

function diametroCirculo(radio) 
{
    return radio*2;
}

const PI = Math.PI;
//console.log("PI es: " + PI + " cm");

function perimetroCirculo(radio) 
{
const diametro = diametroCirculo(radio);
return diametro* PI;
}

function areaCirculo (radio)
{
    return (radio * radio) * PI;
}

console.groupEnd();

//Aqui interactuvamos con el HTML:

function calcularPerimetroCuadrado()
{
 const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const perimetro = perimetroCuadrado(value);
 alert(perimetro);

 
}

function calcularAreaCuadrado()
{
const input = document.getElementById("InputCuadrado");
 const value = input.value;

const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo()
{
 const input = document.getElementById("InputTriangulo1");
 const input2 = document.getElementById("InputTriangulo2");
 const input3 = document.getElementById("InputTriangulo3");
 const value = parseInt(input.value);
 const value2 = parseInt(input2.value);
 const value3 = parseInt(input3.value);

 const perimetro = perimetroTriangulo(value, value2, value3);
 alert(perimetro);
 
}

function calcularAreaTriangulo()
{
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = parseInt(input3.value);
    const input4 = document.getElementById("InputTriangulo4");
    const value4 = parseInt(input4.value);

const area = areaTriangulo(value3, value4);
    alert(area);
}


function calcularDiametroCirculo()
{
 const input = document.getElementById("InputCirculo");
 const value = input.value;

 const diametro = diametroCirculo(value);
 alert(diametro);

 
}

function calcularAreaCirculo()
{
const input = document.getElementById("InputCirculo");
 const value = input.value;

const area = areaCirculo(value);
    alert(area);
}

function calcularPerimetroCirculo()
{
 const input = document.getElementById("InputCirculo");
 const value = input.value;

 const perimetro = perimetroCirculo(value);
 alert(perimetro);

 
}




function alturaIsoscel (lado1, lado2, base)
{
    if(lado1==lado2 && base!=lado1)
    {

return Math.sqrt( (lado1 * lado2) - ( (base*base) / 4) )
    }
    else
    {
    alert("Los lados no son iguales");
    }
}




     function calcularAlturaIsoscel()
     {
      const input = document.getElementById("InputIsoscel1");
      const input2 = document.getElementById("InputIsoscel2");
      const input3 = document.getElementById("InputIsoscel3");
      const value = parseInt(input.value);
      const value2 = parseInt(input2.value);
      const value3 = parseInt(input3.value);
      const altura = alturaIsoscel(value, value2, value3);
      alert("La altura es " + altura);
 
     }

