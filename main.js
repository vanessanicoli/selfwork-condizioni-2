//Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:
//se temperatura è minore di 20, stampare “non ci sono più le mezze stagioni”
//se temperatura è maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
//se temperatura è minore di 30, stampare “mi dia una peroni sudata”
//se temperatura è minore di 0, stampare “non è tanto il freddo quanto l’umidità’”
//se temperatura è minore di -10, stampare “copriti…ancora ti raffreddi”
//Cerca di risolvere questo esercizio utilizzando prima if else e poi con switch case.

// ------- IF / ELSE -------

// let temperature = Number(prompt('Inserisci la temperatura: '));-50

// if(temperature < -10){
//     console.log('Copriti…ancora ti raffreddi');   
// }
// else if(temperature < 0){
//     console.log(`Non è tanto il freddo quanto l'umidità`);   
// }
// else if(temperature < 20){
//     console.log('Non ci sono più le mezze stagioni');   
// }
// else if(temperature < 30){
//     console.log('Mi dia una peroni sudata');   
// }
// else if(temperature >= 30){
//     console.log('Lu mare, lu sole, lu ientu');   
// }
// else {
//     console.log('Valore non valido');
// }

// ------- SWITCH -------

let temperature = Number(prompt('Inserisci la temperatura: '));

switch(true) {
    case temperature < -10:
        console.log('Copriti…ancora ti raffreddi'); 
        break;
    case temperature < 0:
        console.log(`Non è tanto il freddo quanto l'umidità`);   
        break;
    case temperature < 20:
        console.log('Non ci sono più le mezze stagioni');   
        break;
    case temperature < 30:
        console.log('Mi dia una peroni sudata');   
        break;
    case temperature >= 30:
        console.log('Lu mare, lu sole, lu ientu');   
        break;
    default:
        console.log('Valore non valido');
        break;
}