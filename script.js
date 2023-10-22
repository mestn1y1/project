"use strict";

// const str = "teSt";
// console.log(str.toLowerCase());
// const str = "test";
// console.log(str.length);


// const logg = ("Hello my name is Mazafaker")
// console.log(logg.slice(0, 13));
// function sayHello(name) {
//     return `Привет ${name}`
// }
// const result = sayHello("Антон");
// console.log(result);



// function returnNeighboringNumbers(number) {
//     const previoslyNumber = number - 1;
//     const nextNumber = number + 1 ;
//     return [previoslyNumber, number, nextNumber];
// }
// const result = returnNeighboringNumbers(5);
// console.log(result);

// for (let i = 0; i < 3; i++) {
//     alert(i); // 0, 1, 2

//   alert(i);
// }

// let result = "";
// const length = 7;

// for (let i =1; i < length; i++) {
// 	for (let j = 0; j < i; j++) {
// 		result += "*";
// 	}
// 	result += "\n";
// }
// console.log(result);

// for (let i = 20; i <=20; i--){
// 	if (i <= 9)
// 		break;
     
// 	console.log(i);

// }
// for (let i = 2; i <= 10; i+=2){
//         console.log(i);
	
// }
// for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }

//         let i = 2 ;
//         while (i <= 16){
//             if (i % 2 === 0) {
//                 i++;
//                 continue;
//             console.log(i)
//             i++;
//         }
//     }
//     let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } 
//     console.log(i);
//     i++; // Вынесем инкремент за пределы if
// }
// while(num <= 55) {
//     console.log(num);
//     num++;
// }
 
// do {
//     console.log(num);
//     num++;
// }

//  for (let i = 1; i < 10; i++){
//     if(i === 6){
//        // break;
//     continue;
//     }
//     console.log(i);
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log("Я сыт!");

// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log("Все сыты!");

// }else {
//     console.log("We leave");

// }


// let johnReport, alexReeport, samReport, mariaReport = "done";

// console.log(johnReport || alexReeport || samReport || mariaReport);
// if (4 == 9) {
//     console.log("ok!");
// } else {
//     console.log("Error");
// }



// if (num < 49) {
//     console.log("error"); 
// } else if (num > 100) {
//     console.log("Mutch")
// } else {
//     console.log("ok!");
// }

// (num === 50) ? console.log("ok!") : console.log("Error");

// const num = 50;
// switch (num) {
//     case 49:
//         console.log("Neverno");
//         break;
//     case 100: 
//         console.log("Neverno");    
//         break;
//     case 50:
//         console.log("V tochku");
//         break;
//     default:
//         console.log("Ne v etot raz");
//         break;        

// let result = "  ";
// const length = 12;

// for(let i = 1; i<length; i++){
//     for (let j = 0 ;  j <= rows - i; j++){
//         if (i % 2 == 0) continue;
//         result+= "*";   
//     }

//     result+= "\n";
// }

// console.log(result);
// const length = 6;

// for (let i = 1; i <= length; i++) {
//     let spaces = ' '.repeat(length - i); // Создаем отступы
//     let stars = '*'.repeat(2 * i - 1); // Создаем строки с символами '*'
//     console.log(spaces + stars);
// }
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }


let numberOfFilms ;

function start() {
	numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "" );
	
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) ) {
		numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "" );
	}

}

start();

const personalMovieDB = {
	count : numberOfFilms,
	movies: {}, 
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt ("Один из последних просмотренных фильмов?",  ""),
			  b = prompt ("На сколько оцените его?", "");
	
		if (a != null && b != null && a != "" && b != "" && a.length< 50) {
			personalMovieDB.movies[a] = b;
			console.log("Done");	
		} else {
			console.log("error");
			i--;
		}
	}
}
rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count <10){
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
		console.log("Вы класический зритель");
	} else if (personalMovieDB.count >=30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}

detectPersonalLevel();

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
	}
}
writeYourGenres();