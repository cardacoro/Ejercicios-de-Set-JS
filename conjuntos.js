// - Un nuevo Set con los nombres de tu familia

const familia = new Set(['Carlos', 'Madeleine', 'Ebba', 'Ana', 'Carlos Alberto', 'Carlos Daniel']);
console.log(familia);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

familia.add('Carlos Daniel');
console.log(familia);

// - Modifica el Set original añadiendo el nombre "Javascript" 

familia.add('JavaScript');
console.log(familia);