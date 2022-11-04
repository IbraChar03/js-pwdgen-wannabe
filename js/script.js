// inserisci il tuo nome
let nome= prompt("Inserisci il tuo nome");
console.log(nome);

// inserisci il tuo cognome
let cognome= prompt("Inserisci il tuo cognome");
console.log(cognome);

// inserisci il tuo colore preferito
let colore= prompt("Inserisci il tuo colore");
console.log(colore);

// password
document.getElementById("psw-generator").innerHTML= `La tua password è ${nome}${cognome}${colore}21`