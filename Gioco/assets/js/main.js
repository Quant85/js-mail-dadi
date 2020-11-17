
/* Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto. */
var numeroRandomGiocatore, numeroRandomBanco, risultatoGiocatore, risultatoBanco, btnLanciaDadi, valoreGiocatore, immagineDadoGiocatore, valoreBanco, immagineDadoBanco, messaggioBanco;

btnLanciaDadi = document.getElementById("btn_lancia");


btnLanciaDadi.addEventListener("click", function () {

  numeroRandomGiocatore = Math.round(Math.random() * (6 - 1) + 1);
  //console.log(numeroRandomGiocatore);
  
  numeroRandomBanco = Math.round(Math.random() * (6 - 1) + 1);
  //console.log(numeroRandomBanco);
  
  if (numeroRandomGiocatore > numeroRandomBanco) {
  
    risultatoGiocatore = "Complimenti hai Vinto!! Il tuo  " + numeroRandomGiocatore;
    //console.log(risultatoGiocatore);
  
    risultatoBanco = " non ha lasciato scampo al mio  " + numeroRandomBanco + ". Se solo avessi avuto un  " + (numeroRandomGiocatore + 1) + "  non avresti vinto!! La prossima volta ti batterò.";
    //console.log(risultatoBanco);
  
  } else if (numeroRandomGiocatore == numeroRandomBanco) {
  
    risultatoGiocatore = "Bella giocata, hai un " + numeroRandomGiocatore + ". Peccato man non basta, mi dispiace!!";
    //console.log(risultatoGiocatore);
  
    risultatoBanco = " Ho un " + numeroRandomBanco + ". Direi di farne un'altra.";
    //console.log(risultatoBanco);
  } else {
    risultatoGiocatore = "Bella giocata, hai un " + numeroRandomGiocatore + ".  Mi dispiace ma questa volta non basta!!";
    //console.log(risultatoGiocatore);
  
    risultatoBanco = " Il mio " + numeroRandomBanco + " non lascia scampo!!";
    //console.log(risultatoBanco); 
  }

  valoreGiocatore = document.getElementById("valore_giocatore");
  immagineDadoGiocatore = document.getElementById("immagine_dado_giocatore");
  valoreBanco = document.getElementById("valore_banco");
  immagineDadoBanco = document.getElementById("immagine_dado_banco");
  messaggioBanco = document.getElementById("messaggio_banco");

  valoreGiocatore.innerHTML = numeroRandomGiocatore;
  //console.log(valoreGiocatore);
  immagineDadoGiocatore.src = "assets/img/giocatore/" + numeroRandomGiocatore + ".png";
  //console.log(immagineDadoBanco.src);
  valoreBanco.innerHTML = numeroRandomBanco;
  //console.log(valoreBanco);
  immagineDadoBanco.src = "assets/img/banco/" + numeroRandomBanco + "banco.png";
  messaggioBanco.innerHTML = risultatoGiocatore + "" + risultatoBanco;
  //console.log(messaggioBanco);
});





