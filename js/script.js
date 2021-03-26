

// Esercizio 1 - Creare un array di oggetti: ogni oggetto descriverà
// una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

function es1() {

    const bikes = [
        {
            'nome': 'bike_1',
            'peso': 9
        },
        {
            'nome': 'bike_2',
            'peso': 17
        },
        {
            'nome': 'bike_3',
            'peso': 3
        },
    ];

    let smallBike = {
        nome: '',
        peso: Number.MAX_SAFE_INTEGER   // max num rappresentabile
    };
    for (let i=0; i<bikes.length; i++) {

        const bike = bikes[i];
        let {nome, peso} = bike;

        if (peso < smallBike.peso) {

            smallBike = bike;
        }
    }
    console.log(smallBike);
} // fine es1()

function init() {
    //console.log('testo di prova');

    es1();
}
$(document).ready(init);