"use strict";

/*
// LECTURE: Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descrGreece = describeCountry("Greece", 10, "Athens");
const descrPortugal = describeCountry("Portugal", 10, "Lisboa");
const descrFinland = describeCountry("Finland", 6, "Helsinki");

console.log(descrGreece);
console.log(descrPortugal);
console.log(descrFinland);

// LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const percGreece1 = percentageOfWorld1(10);
const percPortugal1 = percentageOfWorld1(10);
const percFinland1 = percentageOfWorld1(6);

const percGreece2 = percentageOfWorld2(10);
const percPortugal2 = percentageOfWorld2(10);
const percFinland2 = percentageOfWorld2(6);

console.log(percGreece1, percPortugal1, percFinland1);
console.log(percGreece2, percPortugal2, percFinland2);

// LECTURE: Arrow Functions
const percentageOfWorld3 = population => population / 7900 * 100;

const percGreece3 = percentageOfWorld3(10);
const percPortugal3 = percentageOfWorld3(10);
const percFinland3 = percentageOfWorld3(6);

console.log(percGreece3, percPortugal3, percFinland3);

// LECTURE: Functions Calling Other Functions
const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

console.log(describePopulation("Greece", 10));
console.log(describePopulation("Finland", 6));
console.log(describePopulation("China", 1441));

// LECTURE: Introduction to Arrays
const populations = [10, 6, 332, 1441];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
const neighbours = ["Albania", "North Macedonia", "Bulgaria", "Turkey"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

neighbours[1] = "Republic Of Macedonia";
console.log(neighbours);

// LECTURE: Introduction to Objects
const myCountry = {
    country: "Greece",
    capital: "Athens",
    language: "greek",
    population: 10,
    neighbours: ["Albania", "North Macedonia", "Bulgaria", "Turkey"],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

// LECTURE: Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry);
myCountry["population"] -= 2;
console.log(myCountry);

// LECTURE: Object Methods
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// LECTURE: Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

// LECTURE: Looping Arrays, Breaking and Continuing
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
console.log(percentages);

// LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"]
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log("Neighbour: " + listOfNeighbours[i][j]);
    }
}

// LECTURE: The while Loop
const percentages3 = [];

let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentages3);
*/