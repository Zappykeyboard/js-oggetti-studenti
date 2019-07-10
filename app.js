//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
/* var student = {
  "nome": "Edoardo",
  "cognome": "D'Ambrosio",
  "età": 29
};

for (key in student){
  console.log(student[key]);
}

 */


//- Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
/* var studenti = [
  {
    "nome": "Edoardo",
    "cognome": "D'Ambrosio"
  },
  {
    "nome": "Marco",
    "cognome": "Rossi" 
  },
  {
    "nome": "Giovanni",
    "cognome": "Verdi" 
  }
];

for (var i=0; i < studenti.length; i++){
  for (key in studenti[i]){
    console.log(studenti[i][key]);
  }
} */

/* - Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

var myStudent = {}

var myName = prompt("inserisci il nome dello studente");
var mySurname = prompt("inserisci il cognome dello studente");
var myAge = prompt("inserisci l'età dello studente");

myStudent.nome = myName;
myStudent.cognome = mySurname;
myStudent.eta = myAge;

console.log(myStudent);