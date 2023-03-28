

// function sumar(a, b){
//     return a+b;
// }

//asi se crea una funcion de flecha. Cuando el cuerpo solo tiene una sola linea no es necesario usar llaves
const sumar = (a,b = 10) => {
    return a+b;
}

const saludar = () => 'Hola mundo';

console.log(sumar(5));
console.log(saludar());