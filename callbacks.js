//Los callback son funciones que se le pasan por parametros a otras funciones

// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 1000);

// console.log('Primero');

//Mandando el callback
const getUsarioByID = (id, callback) => {

    const usuario = {
        id: id,
        nombre: 'Ilbert'
    }

    setTimeout(()=>{
        callback(usuario);
    },1500);
}

//desarrollando el callback
getUsarioByID(10, (usuario) => {
    console.log(usuario.nombre.toUpperCase());
});

console.log('Ilbert');