// Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// dichiarazione variabili
var array, mailUtente, ammessione;

//variabile d'appoggio
ammissione=false;

array=["booleanCorso@gmail.com",
       "booleanCorso@virgilio.it",
       "booleanCorso@alice.it",
       "corsoBoolean@gmail.com",
       "corsoBoolean@outlook.com",
       "studenteBoolean@gmail.com",
       "studenteBoolean@gmail.com"]

mailUtente = prompt('Inserisci la tua mail, e scopri se sei membro esclusivo Boolean');

// Cerco negli elementi dell'array per controllare che la mail dell'utente sia presente
//se è presente la variabile ammissione diventa true
for(i=0; i<array.length; i++){
  if (array[i]==mailUtente){
    ammissione=true;
  }
}

// se la variabile ammissione è vera allora
if (ammissione){
  // per fare l'apostrofo bisogna mettergli prima una \ altrimenti lo interpreta come fine stringa
  document.getElementById('corsoBoolean').innerHTML = 'Complimenti puoi accedere all\'esclusivo corso Boolean';
} else {
  document.getElementById('corsoBoolean').innerHTML = 'Mi dispiace, ma senza invito non si entra!';
}

console.log(array);
console.log(mailUtente);
