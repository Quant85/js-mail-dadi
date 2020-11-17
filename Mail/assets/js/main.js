//Chiedi all’utente la sua email
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.






function validatoreEmail() {   

    //1. Mediante un Arrey creo una lista di utenti - autorizzati  
    var utentiAutorizzati = ["ciao@boolean.careers", "fabiopacifici@boolean.careers", "raffaelegiammarino@boolean.careers", "fabiolagardin@boolean.careers"];
    console.log(utentiAutorizzati);
    console.log(utentiAutorizzati.length);

    var utentiAutorizzatiLen = utentiAutorizzati.length;

    var inputEmail = document.getElementById("input_email");
    var emailValue = inputEmail.value;
    console.log(emailValue);

    var esitoValidazione = document.getElementById("esito_validazione");
    var messaggioUtente;

    for(var i = 0; i < utentiAutorizzatiLen; ++i) {

        var iesimoUtenteAutorizzato = utentiAutorizzati[i];

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

