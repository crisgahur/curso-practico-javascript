function calcularMediaAritmetica(lista)
{
    // let sumaLista = 0;

// for(let i = 0; i < lista.length; i++) // Significa que la este codigo se ejectura mientras i sea menor a cada la cantidad de elementos en la lista del array
//{sumaLista = sumaLista + lista[i];}

const sumaLista = lista.reduce(

    function (valorAcumulado = 0, nuevoElemento)
    {
      return valorAcumulado + nuevoElemento;
    }

);

const promedioLista = sumaLista / lista.length;

return promedioLista;
}
