
/* Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

var numeroRandomGiocatore;
var numeroRandomBanco;

var risultatoGiocatore;
var risultatoBanco;

var btnLanciaDadi = document.getElementById("btn_lancia");

var valoreGiocatore;
var valoreBanco;
var messaggioBanco;


btnLanciaDadi.addEventListener("click", function () {

  numeroRandomGiocatore = Math.round(Math.random() * (6 - 1) + 1);
  console.log(numeroRandomGiocatore);
  
  numeroRandomBanco = Math.round(Math.random() * (6 - 1) + 1);
  console.log(numeroRandomBanco);
  
  if (numeroRandomGiocatore > numeroRandomBanco) {
  
    risultatoGiocatore = "Il tuo lancio ti ha dato un bel " + numeroRandomGiocatore + ". Complimenti hai Vinto!!";
    console.log(risultatoGiocatore);
  
    risultatoPc = "Che sfotuna un " + numeroRandomBanco + ". Per poco mi bastavano solo " + (numeroRandomGiocatore - numeroRandomBanco) + " in più e non avresti vinto!! La prossima volta ti batterò.";
    console.log(risultatoBanco);
  
  } else if (numeroRandomGiocatore == numeroRandomBanco) {
  
    risultatoGiocatore = "Il tuo risultato è " + numeroRandomGiocatore + ". Non basta mi dispiace!!";
    console.log(risultatoGiocatore);
  
    risultatoBanco = "Bella giocata, ma anche io ho un " + numeroRandomBanco + ", direi di farne un'altra.";
    console.log(risultatoBanco);
  } else {
    risultatoGiocatore = "Hai un " + numeroRandomGiocatore + ". Mi dispiace ma questa volta non basta!!";
    console.log(risultatoGiocatore);
  
    risultatoBanco = "Bella giocata, ma il mio " + numeroRandomBanco + " non lascia scampo!!";
    console.log(risultatoBanco); 
  }

valoreGiocatore = document.getElementById("valore_banco");
valoreBanco = document.getElementById("valore_giocatore");
messaggioBanco = document.getElementById("messaggio_banco");

valoreGiocatore.innerHTML = numeroRandomGiocatore;
console.log(valoreGiocatore);
valoreBanco.innerHTML = numeroRandomBanco;
console.log(valoreBanco);
messaggioBanco.innerHTML = risultatoGiocatore + "" + risultatoBanco;
console.log(messaggioBanco);

});





