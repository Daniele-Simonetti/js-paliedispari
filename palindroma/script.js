// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)


// creo una funzione che racchiuda split, reverse e join per accorciare il codice
function rileggiParola(rileggiParola) {  
  let controlloParola = rileggiParola.split('').reverse().join('');
  return controlloParola;
}
// inserisco una parola
let parolaOriginale = prompt('inserisci una parola');
console.log(parolaOriginale);

// creo una variabile per attivare la fuznione
let parolaInvertita = rileggiParola(parolaOriginale);
console.log(parolaInvertita);

// creo un'altra variabile che sarà uguale a "nome originale" .split per suddividere il testo in sottostringhe e se uso gli apici nella parentesi le lettere formeranno un array
// let parolaDivisa = parolaOriginale.split('');
// console.log(parolaDivisa);

// utilizzo il comando reverse sull'array appne acreato con la var nomeDiviso per leggere il nome al contrario
// let arrayInverso = parolaDivisa.reverse();
// console.log(arrayInverso);

// attraverso il comando join riunisco le lettere della parola che avevo precedentemente scomposto con il comando split 
// let parolaInvertita = arrayInverso.join('');
// console.log(parolaInvertita);

// creo la condizione per cui se le due parole sono uguali la parola è palindroma, altrimenti non lo è
if (parolaOriginale == parolaInvertita ) {
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}

