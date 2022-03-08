const lista1= [1,2,3,3,2,2,1,4,4,4,4,4];


const lista1Count = {}; // creamos un objeto.


lista1.map( // con el metodo .map lo que hacemos es que el codigo que apliquemos será para todos los elementos que contiene el array.
        function (numeros)
        {
            if(lista1Count[numeros])
            {
                lista1Count[numeros] += 1;
            }
            else{
            lista1Count[numeros] = 1;
            }
        }
    );

const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) 
        {
          return elementoA[1] - elementoB[1];
        }
      );
      
const moda = lista1Array[lista1Array.length - 1]; // la moda será el ultimo elemento del nuevo array creado, por eso restamos 1 al total de la longitud del array.
