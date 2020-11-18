//Chiedi all’utente la sua email
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

//inizializzazione delle variabili
var utentiAutorizzati, utentiAutorizzatiLen, inputEmail, emailValue, esitoValidazione, messaggioUtente, messaggioUtente, i, iesimoUtenteAutorizzato;

function validatoreEmail() {   

    //1. Mediante un Arrey creo una lista di utenti - autorizzati  
    utentiAutorizzati = ["ciao@boolean.careers", "fabiopacifici@boolean.careers", "raffaelegiammarino@boolean.careers", "fabiolagardin@boolean.careers"];
    //console.log(utentiAutorizzati);
    //console.log(utentiAutorizzati.length);

    utentiAutorizzatiLen = utentiAutorizzati.length;

    inputEmail = document.getElementById("input_email");
    emailValue = inputEmail.value;
    //console.log(emailValue);

    esitoValidazione = document.getElementById("esito_validazione");

    for(var i = 0; i < utentiAutorizzatiLen; ++i) {

        iesimoUtenteAutorizzato = utentiAutorizzati[i];

        if (iesimoUtenteAutorizzato === emailValue) {
            messaggioUtente = "Utente Autorizzato";
            esitoValidazione.innerHTML = messaggioUtente;
            console.log(messaggioUtente);
            break;
        } else {
            messaggioUtente = "Utente Non Autorizzato";
            esitoValidazione.innerHTML = messaggioUtente;
            console.log(esitoValidazione);
        }
        
    }
}

