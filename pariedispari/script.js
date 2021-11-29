// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

// creo una funzione per il check del pari e dispari
function controllo(risultatoSomma) {
  // aggiungo una variabile boleana per il confronto
  let find = false;
  // creo la condizione di pari o dispari
  if (risultatoSomma % 2 == 0) {
    find = true;
    console.log('la somma è pari');
  } else {
    console.log('la somma è dispari');
  }
  return find;
}

// chiedo all'utente di scegliere pari o dispari
let pariOdispari = prompt('scegli pari o dispari');
console.log('prima condizione di vittoria: ', pariOdispari);

// chiedo all'utente un numero da 1 a 5
const numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log('numero scelto da utente: ', numeroUtente);

// genero un numero random da 1 a 5 per il computer
const numeroComputer = parseInt(Math.floor(Math.random() * 5) + 1);
console.log('numero random del computer: ', numeroComputer);

// sommiamo i due numeri
let sommaNumeri = numeroComputer + numeroUtente;
console.log('somma numero utente e computer: ', sommaNumeri);

// collego la mia funzione
// returnControll è come == a sommaNumeri, per questo lego la funzione controllo a sommaNumeri
let returnControllo = controllo(sommaNumeri);

// se ho scelto pari e la somma è pari e viceversa allora ho vinto
// per la variabile boleana post funzione devo usare returnControll che il valore su cui sto verificando se è pari o dispari
if (returnControllo == true && pariOdispari == 'pari') {
  console.log('hai vinto');
  alert('HAI VINTO');
} else if (returnControllo == false && pariOdispari == 'dispari') {
  console.log('hai vinto');
  alert('HAI VINTO');
} else {
  console.log('hai perso');
  alert('HAI PERSO');
}