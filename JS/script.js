
'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','1');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','1');
    } 
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?','');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!!');
        } else {
            console.log ('Error!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if(personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов:(');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка..');
    }   
}
detectPersonalLevel();

function showMyDb () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDb();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
       const genre = prompt(`Ваш любимый жанр по номером ${i}`);
       personalMovieDB.genres[i - 1] = genre;
    }

}
writeYourGenres();

// if (6 == 9) {
//     console.log('ok!');
// } else {
//     console.log('eror!');
// }

// const num = 50;
// if (num < 49) {
//     console.log('eror');
// } else if (num > 100) {
//     console.log('too much');
// }else {
//     console.log('ok');
// }

// // num === 50 ? console.log('yesss') : console.log('nooo'); //тернарный оператор, если один то унарный

// const num = 1;
// switch (num) {
//     case 49:
//         console.log('false');
//         break;
//     case 100:
//         console.log('false');
//         break;
//     case 50:
//         console.log('true');
//         break;
//     default:
//         console.log('sorry, not today');
// }
// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

// for (let i = 1; i < 8; i++) {  //итерратор, условие, шаг итерраций
//     if (i === 6) {
//        // break
//        continue;
//     }
//     console.log(i);

// }
//континие пропускает ненужный шаг и продолжает после него цикл до завершиеня
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','1');

// let a= prompt('Один из последних просмотренных фильмов?','');
//     b = prompt('На сколько оцените его?','');
//     c = prompt('Один из последних просмотренных фильмов?','');
//     d = prompt('На сколько оцените его?','');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','1');

// let a= prompt('Один из последних просмотренных фильмов?','');
//     b = prompt('На сколько оцените его?','');
//     c = prompt('Один из последних просмотренных фильмов?','');
//     d = prompt('На сколько оцените его?','');
