

const empleados = [
    {
        id:1,
        nombre: 'Ilbert'
    },
    {
        id:2,
        nombre: 'Juan'
    },
    {
        id:3,
        nombre: 'Pedro'
    }
];

const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    }
];


//Asi se crea una promesa
const getEmpleado = (id , callback) => {

    //Utilizamos la clase Promise, esta resive un callback como parametro
    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id);
        
        if(empleado){
            resolve(empleado); //Si se resuelve ejecutamos el metodo resolve
        }else{
            reject(`No existe el empleado con id ${id}`); //Si da error ejecutamos el metodo reject
        }

        // Esto lo  podemos hacer tambien con el operador ternario.
        // (empleado) ? resolve(empleado) : reject(`No existe el empleado con id ${id}`);  

    });

}

const getSalario = (id, callback) => {

    return new Promise((resolve, reject) => {

        const salario = salarios.find(s => s.id === id);
        (salario) ? resolve(salario) : reject(`No existe salario para el empleado con id ${id}`);

    });
}

//Async transforma las funciones en promesa
const getInfoUsuario = async(id) => {
    try {
        
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El nombre del empleado es: ${empleado.nombre} y su salario es: ${salario.salario}`;

    } catch (error) {
        throw new Error(error);
    }
}


const id = 5; 

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));