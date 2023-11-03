// //ESERCITAZIONE 5:
// function gioco(params) {
    

// var tentativi=prompt(5);
// var tiri;
// var tot1;
// var tot2;
// var player1=0
// var player2=0
// for(var tiri=1; tiri<=tentativi; tiri++){
//     tot1 = Math.floor((Math.random() * 6) + 1)}
// for(var tiri=1; tiri<=tentativi; tiri++){
//     tot2 = Math.floor((Math.random() * 6) + 1)}
//     player1 + tot1;
//     player2 + tot2;  
// }

// console.log(gioco)
// // console.log(tot1,tot2);
// // console.log(player1,player2);


// function whoWin(lanci) {
//     const player1 = [];
//     for (let i = 1; i <= lanci; i++) {
//         player1.push(Math.floor((Math.random() * 6) + 1))
//     }
//     console.log('-------------Giocatore1-------------')
//     console.log(player1)
//     let sommaP1 = 0;
//     for (let index = 0; index < player1.length; index++) {
//         sommaP1 += player1[index]
//     }
//     console.log('Il punteggio totalizzato dal giocatore1 è', sommaP1);

//     const player2 = [];
//     for (let i = 1; i <= lanci; i++) {
//         player2.push(Math.floor((Math.random() * 6) + 1))
//     }
//     console.log('-------------Giocatore2-------------')
//     console.log(player2)
//     let sommaP2 = 0;
//     for (let index = 0; index < player2.length; index++) {
//         sommaP2 += player2[index]
//     }
//     console.log('Il punteggio totalizzato dal giocatore2 è',sommaP2);
    
//     console.log('Chi ha vinto?')
//     if (sommaP1 > sommaP2) {
//         return console.log('Vince Giocatore 1')
//     } else if (sommaP1 < sommaP2) {
//         return console.log('Vince Giocatore 2')
//     } else return console.log('Parità')
// }
// whoWin(parseInt(prompt('Quante volte lancerete il dado')));




// function randomNumber(interval) {
//     return Math.floor(Math.random() * interval + 1);
//   }
  
//   function diceGame(round) {
//     let totScore1 = 0;
//     let totScore2 = 0;
  
//     for (let i = 0; i < round; i++) {
//       const roundScore1 = randomNumber(6);
//       const roundScore2 = randomNumber(6);
  
//       totScore1 += roundScore1;
//       totScore2 += roundScore2;
//       console.log(
//         `ROUND ${
//           i + 1
//         }: giocatore uno segna ${roundScore1}, giocatore due segna ${roundScore2}`
//       );
//     }
  
//     console.log(
//       totScore1 > totScore2
//         ? `VINCE GIOCATORE UNO CON UN PUNTEGGIO DI ${totScore1}`
//         : `VINCE GIOCATORE DUE CON UN PUNTEGGIO DI ${totScore2}`
//     );
//   }
  
//   diceGame(3);






// Traccia 3:

// Scrivi una funzione che dato un numero intero(massimo 9999) conti da quante cifre è formato.
// Esempio:

// - Input: 9 => output: 1 cifra
// - Input: 99 => output: 2 cifre
// - Input: 12000 => output: Numero troppo grande

function contanumeri(numeri) {
    
    
}






