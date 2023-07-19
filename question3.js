/* Day 12 of #100DaysOfCode */

//print obj={Ram:95, Shyam:77, Sam:89} using for loop

let marks={
    Ram:95, Shyam:77, Sam:89
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("Marks of"+ Object.keys(marks)[i]+ "are" + marks[Object.keys(marks)[i]]);
}


//above question using for in loop

for(let keys in marks){
    console.log("Marks of"+ keys+ "are" +marks[keys]);
}


//print try again until the user enters the correct number

let num= 100;
let x;
while (num!=x){
    console.log("Try again");
    num= prompt("Enter a number");
}
console.log("You have entered a correct number");


//find mean of 5 numbers

const mean= (a, b, c, d)=>{
    return(a+b+c+d)/4;
}
console.log(mean(12,3,4,3));


