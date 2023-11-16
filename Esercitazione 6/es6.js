
// Esercitazione 6 - Javascript

// Traccia 1:
// Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.

// Traccia 2:
// Scrivi un programma che stampi dei numeri da 1 a 20 ma solo quelli pari. 
// Di tutti i numeri dispari, invece, calcola anche la media e stampala a schermo

// Traccia 3:
// Scrivi un programma che simuli un distributore di bevande e che rispetti i seguenti passaggi:

// - l’utente deve poter inserire un numero
// - in console dev’essere stampato il messaggio del distributore
//     - se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
//     - se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
//     - se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
//     - se inserisce qualcosa di diverso, il programma dovra’ riproporre automaticamente la domanda di partenza


//Traccia 1:
console.log("------TRACCIA 1--------");
console.log("------TABELLINA--------");
    for (i = 1; i <= 10; i++) {    
    console.log(i*2)
}
console.log("------TRACCIA 2--------");
console.log("------NUMERI PARI--------");
    for (i = 0; i <= 10; i++)  { 
	console.log(2*i); 
} 

console.log("------NUMERI DISPARI--------");
    for (i = 0; i < 10; i++){ 
	console.log(somma=1+2*i);}
 
console.log("------MEDIA NUMERI DISPARI--------");
console.log(somma)


//let chiedi;
    do{
       chiedi =prompt("Scegliere Bevanda");
        if  (chiedi == "1"){
            console.log("E’ stata selezionata l'acqua");}         
        else if  
            (chiedi == "2") {
            console.log("E’ stata selezionata la coca");}
        else if  
            (chiedi == "3") { 
            console.log("E’ stata selezionata la birra");}
    }while (chiedi< 1 || chiedi > 3)   
       








// var n = 20
// sommaDispari = 0;
// var nn;
// for (var i = 0; i < n; i++){
//     if(n % 2== 0){
//         sommann += n;
    
//     }
// }

// console.log(sommaDispari);
<<<<<<< HEAD:Esercitazione 6/es6.js


const numbers = [1,2,3,4,5];
const sottoinsieme = numbers.slice(1,4)


console.log(sottoinsieme);
console.log(numbers);



// Per ordinare un Array di numeri
const caso = [1,-20,300,45,52];
caso.sort(function ordine (a, b){
    return a - b // (fare b-a per decrescente)
})
console.log(caso)



function ordine(params){
   const salam = [1,5,4,3,10]; 
   return ordine
   console.log(salam);   
}
=======
>>>>>>> 1c822b0f69f60852b3c7fcca7de08ba67c568237:Esercitazione3/es6.js
