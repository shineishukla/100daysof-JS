//Day 19 of #100DaysOfCode

//objects and functions
let person = {
    name: "Per",
    age: 35,
    country: "Norway"
};
function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}
logData();


//conditional statement
let age1 = 17;
if (age1 < 6) {
    console.log("free")
} else if (age1 < 18) {
    console.log("child discount")
} else if (age1 < 27) {
    console.log("student discount")    
} else if (age1 < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

//loops and arrays
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
console.log("The 5 largest countries in the world:");
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}


//push, pop, shift, unshift
let largeCountries1 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries1.pop();
largeCountries1.push("Pakistan");
largeCountries1.shift();
largeCountries1.unshift("China");
console.log(largeCountries1);


//logical operators
let dayOfMonth = 27;
let weekday = "Thursday";
if (dayOfMonth === 27 && weekday === "Thursday") {
    console.log("😱")
}



