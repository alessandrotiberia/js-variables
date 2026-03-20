const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
//DIFFERENZA LENGHT (SOMMA) INDEXOF TROVA LA POSIZIONE 
const cityIndex = city.indexOf("Y"); //indexof indice di tradotto
//si occupa di contare (parte da 0) leggendo le lettere dando cosi 4 a y
console.log(cityIndex); // Output: 4

// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city
//diciamo da quale numero iniziare a leggere 4 = a Y e continua completando la parola york
const citySubstring = city.substring(4);
console.log(citySubstring); // Output: "York"

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
// replace() si usa per trovare e sostituire testo. trova york e sostituisce con delhi
const cityReplaced = city.replace('York', 'Delhi');
console.log(cityReplaced); // Output:  "New Delhi"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
// formula va a prende la variabile e la riscrive in questa posizione
const cityNameConcat = `${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
// richiamo variabile hello e con uppercase trasformo tutto in maiuscolo.
const upperCaseHello = hello.toUpperCase(); 
console.log(upperCaseHello); // Output: "HELLO"
