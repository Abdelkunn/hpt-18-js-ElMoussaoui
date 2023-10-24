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
let num1 = prompt("scegli numero");
let num2 = prompt("scegli numero");


var somma = parseInt(num1)+parseInt(num2);
var molt = parseInt(num1)*parseInt(num2);
var div = parseInt(num1)/parseInt(num2);
var sot = parseInt(num1)-parseInt(num2);
var pot = Math.pow(parseInt(num1),(num2));

var operazioni= (`${somma}"tot" ${div} ${molt} ${sot} ${pot} `);

console.log(operazioni);


//Traccia 4:

    let array_1 = [ 
    0['un', 'per', 'incatenarli.'],
    1['Anello', 'trovarli,'],
    2['ghermirli', 'e'],
    3['gondor', 'mark']];

    let array_2 = [ 
    [['trovarli,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio']];

    console.log(`${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_2[4][0][0]} ${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_2[0][0][0]} ${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_1[2][0]} ${array_1[2][1]} ${array_2[3][0]} ${array_2[4][1]} ${array_1[0][2]}`);












