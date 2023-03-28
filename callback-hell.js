

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


//Como se trabaja con callback y se manejan los errores
const getEmpleado = (id , callback) => {

    const empleado = empleados.find(e => e.id === id).nombre;

    if(empleado){
        callback(null, empleado); //Aqui pasamos null si la data existe
    }else{
        callback(`Empleado con  ${id} no existe`, null);
    }

}

const getSalario = (id, callback) => {

    const salario = salarios.find(s => s.id === id)?.salario; //Con el ? es como si preguntaramos si existe

    if(salario){
        callback(null, salario);
    }else{
        callback(`No existe el salario para el empleado con el numero de id:${id} `, null);
    }
}

const id = 3;

//Ha esto es que llamamos callback hell. Esto hace el codigo muy dificil de leer y mantener
//Aqui definimos el callback
getEmpleado(id, (err, empleado) => {

    //Si error tiene un valor que se ejecute
    if(err){
        console.log('ERROR!');
        return console.log(err)
    }

    getSalario(id, (err, salario) => {
        if(err){
            console.log('ERROR!');
            return console.log(err)
        }
    
        console.log(`El empleado: ${empleado} Salario: ${salario}`,);
    });
});



