// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: 'Carlos',
    apellido: 'Coronado',
    edad: 24,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior

const edad = datosPersonales.edad;
console.log(edad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const lista = [datosPersonales,
    
    {nombre: 'Jesus', apellido: 'Oñate', edad: 23},
    {nombre: 'Lucia', apellido: 'Castellanos', edad: 23}
];
console.log(lista);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaOrdenada = [...lista]
listaOrdenada.sort((a,b) => {

    return b.edad - a.edad;
}); 
console.log(listaOrdenada);
