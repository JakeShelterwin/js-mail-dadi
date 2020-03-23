// Gioco dei dadi, chi fa di più vince.

// dichiarazione variabili
var dado1A, dado2A, dado1B, dado2B, coppiaA, coppiaB;

// calcolo il valore dei dadi
dado1A = Math.floor(Math.random() * 6 + 1);
dado2A = Math.floor(Math.random() * 6 + 1);
dado1B = Math.floor(Math.random() * 6 + 1);
dado2B = Math.floor(Math.random() * 6 + 1);

coppiaA=dado1A + dado2A;
coppiaB=dado1B + dado2B;

// inserisco le condizioni per la coppia di dati vincente
if (coppiaA>coppiaB){
  document.getElementById('sorte').innerHTML = 'Vince la PRIMA COPPIA di dadi! col valore di: ' + coppiaA;
} else if (coppiaA==coppiaB){
  document.getElementById('sorte').innerHTML = 'Le giocate hanno uguale valore: ' + coppiaA +" "+ coppiaB;
} else {
  document.getElementById('sorte').innerHTML = 'Vince la SECONDA COPPIA di dadi! col valore di: ' + coppiaB;
}

console.log("Primo dado prima coppia: " + dado1A);
console.log("Secondo dado prima coppia: " + dado2A);
console.log("Primo dado seconda coppia: " +dado1B);
console.log("Secondo dado seconda coppia: " + dado2B);
console.log("Somma prima coppia di dadi: " + coppiaA);
console.log("Somma seconda coppia di dadi: " +coppiaB);
