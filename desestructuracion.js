

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//Podemos usar 'let' para la destructuracion de objetos y arreglos

const array = ['valor1', 'valor2', 'valor3'];
//Destructuracion de un arreglo, esto funciona por orden de los valores en los indice
const [val1, val2, val3] = array;
console.log(`${val1} ${val2} ${val3}`);

//Destructuracion de objeto, esto funcina por el nombre de las propiedades
const {nombre, apellido, poder, edad = 0} = deadpool;
console.log(`${nombre} ${apellido} ${poder} ${edad}`);

//Destructuracion de objecto como parametro. Esto se declara como let
const imprimirHeroe = ({nombre, apellido, poder, edad}) => {
    console.log(`${nombre} ${apellido} ${poder} ${edad}`);
}

imprimirHeroe(deadpool);