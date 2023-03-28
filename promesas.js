

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

const id  = 2;

// getEmpleado(id)
//     .then(empleado => console.log(empleado.nombre)) //Si la promesa se cumple devulve el empleado
//     .catch(error => console.log(error)); //Si no se cumple devulve el error

// getSalario(id)
//     .then(salario => console.log(salario.salario))
//     .catch(error => console.log(error));

//---------------------------------------------------------------------------------------------------------------------------

//Esto se conoce como Promise hell
// getEmpleado(id)
//     .then(empleado => {
        
//         getSalario(id)
//             .then(salario => {
//                 console.log(`El nombre del empleado es: ${empleado.nombre} y su salario es: ${salario.salario}`);

//             }).catch(error => console.log(error));

//     }).catch(error => console.log(error));



let nombre;

//Esto es un ejecutar promesas en cadena
//----
getEmpleado(id)   
    .then(empleado => {
        nombre = empleado.nombre;
        return getSalario(id);
    })
    .then(salario => console.log(`El nombre del empleado es: ${nombre} y su salario es: ${salario.salario}`))
    .catch(error => console.log(error));


// const TestPromise = (salarios) => {

//     return new Promise((resolve, reject) => {


//         const salario = salarios.filter(s => s.salario === 1500);

//         if(salario){
//             resolve(salario);
//         }else{
//             reject('The array is empty');
//         }
//     });

// }


// TestPromise(salarios)
//         .then(sal => console.log(sal[0].salario));