// Day 21 of #100DaysOfCode

//let and const
const name="Per";
let age=35;
const country="Norway";
console.log(name,age,country);


//create a function that takes a single parameter, an array 
//logs all the items in the array to the console
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
function logArrayElements(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
logArrayElements(largeCountries);



//save value to local storage
let lname = localStorage.setItem("lname");
console.log(lname);


