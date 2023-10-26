//Esercitacione 3

//Traccia 1:
let uno = 1;
let due = 2;
let tre = 3;
let quattro = 4;
let cinque = 5;
//Somma
console.log("La somma trai numeri equivale a X e la media equivale a Y");
function somma(uno,due,tre,quattro,cinque){
var x = uno + due + tre + quattro + cinque;
return x;
}
var totale= somma(1,2,3,4,5);
console.log(`X  ${totale}`);

//*Media
function media(x){
 var media = x/5;
return media;
}
let med = media(totale);
console.log(`Y  ${med}`);



//Traccia 2:
let anno = 2023;
let nascita = 1996; 
let attuale = anno - nascita;
let vecchiaia = 100 - attuale;
console.log("hai"+attuale+"anni e ti mancano anni "+ vecchiaia +" per compierne 100")

//Traccia 3:
//let num1 = prompt("scegli numero");
//let num2 = prompt("scegli numero");


//var somma = parseInt(num1)+parseInt(num2);
//var molt = parseInt(num1)*parseInt(num2);
//var div = parseInt(num1)/parseInt(num2);
//var sot = parseInt(num1)-parseInt(num2);
//var pot = Math.pow(parseInt(num1),(num2));

//var operazioni= (`${somma}"tot" ${div} ${molt} ${sot} ${pot} `);

//console.log(operazioni);


//Traccia 4:

    let array_1 = [ 
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark']];

    let array_2 = [ 
    [['trovarli,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio']];

    console.log(`${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_2[4][0][0]} ${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_2[0][0][0]} ${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_1[2][0]} ${array_1[2][1]} ${array_2[3][0]} ${array_2[4][1]} ${array_1[0][2]}`);




//Esercitazione 4

//NUMERO FILE X
let gatti = 16;
let fila = 5;
let risultato = gatti/fila;
let resto = gatti%fila;
let mancanti = fila-resto;
console.log(`Ci sono ${fila} file di gatti e ne mancano ${mancanti} per una nuova fila, con un avanzo di ${resto}, dove ${fila} e ${mancanti} sono i valori calcolati in precedenza.`);


let v = 30;

if(v < 18){
    console.log("insufficiente");
} else if(v >= 18 && v<21){
    console.log("sufficiente");
} else if(v >= 21 && v < 24){
    console.log("buono");
} else if(v >=24 && v < 27){
    console.log("distinto");
} else if(v >=27 && v <= 29){
    console.log("ottimo")
} else if(v == 30){
    console.log("eccellente")
}


//Esercizio con Switch

let c = 30 ;

switch(true)
    {
    case c < 18: 
        console.log("insufficiente");
        break;
    case c > 18 && c < 21: 
        console.log('sufficiente');
        break;
    case c >= 21 && c < 24:
        console.log("buono");
        break;
    case c >= 24 && c < 27:
        console.log("distinto");
        break;
    case c >= 27 && c <= 29:
        console.log("ottimo");
        break;
    case c == 30:
        console.log("eccellente"); 
        break;  
    }




//Traccia 3:
//Scrivi un programma che converta una temperatura inserita 
//dall’utente con una delle seguenti descrizioni, stampate in console:

//- se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
//- se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
//- se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
//- se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
//- se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”

//Cercate di risolvere questo esercizio utilizzando prima if-else e poi con switch.























