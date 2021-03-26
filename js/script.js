
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



// Esercizio 2 - Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare,
// le altre saranno tutte settate a 0.

function es2(){

    let teams = [
        {
            'name': 'team_1',
            'score': 0,
            'fouls': 0
        },
        {
            'name': 'team_2',
            'score': 0,
            'fouls': 0
        },
        {
            'name': 'team_3',
            'score': 0,
            'fouls': 0
        },
        {
            'name': 'team_4',
            'score': 0,
            'fouls': 0
        }
    ];

    // Generare numeri random al posto degli 0 nelle proprietà:
    // punti fatti e falli subiti.

    for (let i=0; i<teams.length; i++){
        const team = teams[i];

        team['score'] = getRnd(0, 50); // 2°modo: team.score = ...
        team['fouls'] = getRnd(0, 50); // 2°modo: team.fouls = ...
    }

    // Usando la destrutturazione creiamo un nuovo array
    // i cui elementi contengono solo nomi e falli subiti
    // e stampiamo tutto in console.

    const resArr = [];

    for (let i=0; i<teams.length; i++) {

        const team = teams[i];

        let { score, fouls } = team;
        let resObj = { score, fouls };
        resArr.push(resObj);
    }
    console.log(teams, resArr);
} // fine es2()


function init() {
    //console.log('testo di prova');

    //es1();
    es2();

}
$(document).ready(init);



// Funzione - genera numeri RND
function getRnd(min, max) {
    var minRnd = min;
    var maxRnd= max - minRnd + 1;
    var rnd = Math.floor(Math.random() * maxRnd) + minRnd;

    return rnd;
}
