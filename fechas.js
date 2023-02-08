// - La fecha de hoy
const hoy = new Date
console.log(hoy);

// - La fecha de tu nacimiento
const miNacimiento = new Date(1998,10, 04)
console.log(miNacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const masTarde = hoy > miNacimiento;
console.log(masTarde);

// - Una variable que contenga el día de tu nacimiento
const dia = miNacimiento.getDate();
console.log(dia);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = miNacimiento.getMonth();
console.log(mes);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const año = miNacimiento.getFullYear();
console.log(año);