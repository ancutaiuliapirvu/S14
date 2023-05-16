let numberOfDogs = 8;
let numberOfCats = 6;
let numberOfEmployees = 1;

// Exercitiu: Daca avem numar par de caini si numar par de pisici
// afisam mesajul "Toata lumea este fericita!".
// if ( numberOfDogs % 2 === 0 && numberOfCats % 2 === 0) {
//   console.log("Toata lumea este fericita!");
// }
// ATENTIE! Operatorul && se executa ultimul, deoarece are prioritatea cea mai mica.

// Exercitiu: Daca numarul cainilor si al pisicilor e mai mic sau egal cu 15
// sau daca avem mai mult de 2 afisam mesajul "Toate animalele sunt ingrijite bine!".
// if ( numberOfDogs + numberOfCats < 15 || numberOfEmployees > 2 ) {
//   console.log("Toate animalele sunt ingrijite bine!");
// }
// ATENTIE! Operatorul && se executa ultimul, deoarece are prioritatea cea mai mica.

// Exercitiu: Daca numarul de caini e par sau numarul de pisici e par
// si avem mai mult de 2 angajati afisati mesajul 'Toata lumea este fericita!'.
// if ((numberOfDogs % 2 === 0 || numberOfCats % 2 === 0) && numberOfEmployees > 2) {
//   console.log("Toata lumea este fericita!");
// }
// ATENTIE! Operatorul && are prioritate mai mare decat ||! Pentru a schiba ordinea efectuarii operatiilor folosim (), ca la matematica. 