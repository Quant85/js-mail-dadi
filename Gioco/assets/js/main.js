
/* Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

var numeroRandomGiocatore;
var numeroRandomPc;

var risultatoGiocatore;
var risultatoPc;

numeroRandomGiocatore = Math.round(Math.random() * (6 - 1) + 1);
console.log(numeroRandomGiocatore);

numeroRandomPc = Math.round(Math.random() * (6 - 1) + 1);
console.log(numeroRandomPc);

if (numeroRandomGiocatore > numeroRandomPc) {

  risultatoGiocatore = "Il tuo lancio ti ha dato un bel " + numeroRandomGiocatore + ". Complimenti hai Vinto!!";
  console.log(risultatoGiocatore);

  risultatoPc = "Che sfotuna un " + numeroRandomPc + ". Per poco mi bastavano solo " + (numeroRandomGiocatore - numeroRandomPc) + " in più e non avresti vinto!! La prossima volta ti batterò.";
  console.log(risultatoPc);

} else if (numeroRandomGiocatore == numeroRandomPc) {

  risultatoGiocatore = "Il tuo risultato è " + numeroRandomGiocatore + ". Non basta mi dispiace!!";
  console.log(risultatoGiocatore);

  risultatoPc = "Bella giocata, ma anche io ho un " + numeroRandomPc + ", direi di farne un'altra.";
  console.log(risultatoPc);
} else {
  risultatoGiocatore = "Hai un " + numeroRandomGiocatore + ". Mi dispiace ma questa volta non basta!!";
  console.log(risultatoGiocatore);

  risultatoPc = "Bella giocata, ma il mio " + numeroRandomPc + " non lascia scampo!!";
  console.log(risultatoPc); 
}