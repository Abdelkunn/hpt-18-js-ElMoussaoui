// // //Traccia 1:
// // Crea un oggetto persona con le seguenti proprietà:

// // - nome
// // - cognome
// // - età
// // - un metodo che permetta di salutare

// const abdel = {
//     nome: "abdel",
//     cognome: "El Moussaoui",
//     età: 27,
// }
// const saluta = `ciao sono ${abdel.nome}, ed ho ${abdel.età} anni`
// console.log(saluta);




// // let agenda = {
// //     nome : 'Paola', 'telefono': '113',
// //     nome : 'Fra', 'telefono': '118',
// //     nome : 'Giusy', 'telefono': '112',
// //     nome : 'Maria', 'telefono': '051',
// //   }

// //   console.log(agenda.nome[0]);
  
// // //Traccia 2:

// // Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:

// // - mostrare tutti i contatti dell’agenda
// // - mostrare un singolo contatto
// // - eliminare un contatto dall’agenda
// // - aggiungere un nuovo contatto
// // - modificare un contatto esistente

// let rubrica = { 
//     'contatti': [
//     {'nome1':'Nicola', 'telefono1': 250},
//     {'nome2':'Lorenzo', 'telefono2': 112},
//     {'nome3':'Paola',  'telefono3': 118 },
//     {'nome4':'Jenny', 'telefono4': 113},
// ],
//     primo: function () {
//         return this.nome1 + this.telefono1
//     }

//   }
  
// console.log(rubrica.contatti[1]);

// // console.log(rubrica.nome1);

// console.log(Object.values(rubrica));

// console.log(Object.keys(rubrica));

// //Aggiungere
// rubrica.nome6 = 'nome6';
// console.log(rubrica.nome6);

// //Modificare
// rubrica.nome6 = "cambiato"
// console.log(rubrica.nome6);

// //Eliminare
// delete rubrica.nome1;
// delete rubrica.telefono1;
// console.log(rubrica);

// // let { nome1, telefono1, ...ciao } = rubrica;
// // let boh = boh.stringify(ciao);



// //Traccia3

// let bowling = {

//         'giocatori':
//         [{'player1': 'abdel'},
//         {'player2':'cristina'},
//         {'player3': 'nicola'},],
    
//         'punti':[
//         {'player1': 0},
//         {'player2': 0},
//         {'player3': 0}]
 
// }
// console.log(bowling);
// console.log(Object.values("punti"));


// console.log('punti' in bowling);




// for (let player1 = 0; player1<5 ; player1++) {
//     let punti1 = Math.floor((Math.random() *10) +1)
//     console.log(punti1);
// }

    
let miao = document.querySelector("#ciao")
console.log(miao);