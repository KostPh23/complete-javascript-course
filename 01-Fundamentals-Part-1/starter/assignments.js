// // LECTURE: Values and Variables
// const country = "Greece";
// const continent = "Europe";
// let population = 10;

// console.log(country);
// console.log(continent);
// console.log(population);

// // LECTURE: Data Types
// const isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // LECTURE: let, const and var
// language = "greek";

// // LECTURE: Basic Operators
// const firstHalf = population / 2;
// const secondHalf = population - firstHalf;

// console.log(firstHalf, secondHalf);

// population++;

// console.log(population);

// const populationFinland = 6;

// console.log(population > populationFinland);

// const populationAvg = 33;

// console.log(population < populationAvg);

// // const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;

// // console.log(description);

// // LECTURE: Strings and Template Literals
// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log(description);

// // LECTURE: Taking Decisions: if / else Statements
// if (population > populationAvg) {
//     console.log(country + "'s population is above average");
// } else {
//     console.log(`${country}'s population is ${populationAvg - population} million below average`);
// }

// // LECTURE: Type Conversion and Coercion
// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// // LECTURE: Equality Operators: == vs. ===
// // const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// // if (numNeighbours === 1)
// //     console.log('Only 1 border!');
// // else if (numNeighbours > 1)
// //     console.log('More than 1 border');
// // else
// //     console.log('No borders');

// // LECTURE: Logical Operators
// if (language === "english" && population < 50 && !isIsland)
//     console.log(`You should live in ${country} :)`);
// else
//     console.log(`${country} does not meet your criteria :(`);

// // LECTURE: The switch Statement
// switch (language) {
//     case "chinese":
//     case "mandarin":
//         console.log("MOST number of native speakers!");
//         break;
//     case "spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "english":
//         console.log("3rd place");
//         break;
//     case "hindi":
//         console.log("Number 4");
//         break;
//     case "arabic":
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language too :D");
// }

// // LECTURE: The Conditional (Ternary) Operator
// console.log(`${country}'s population is ${population > populationAvg ? "above" : "below"} average`);