/* Day 11 #100DaysOfCode */

//check whether the user is eligible to vote or not
let age = prompt("Enter your age");
if (age >= 18) {
    console.log("Eligible")
}
else{
    console.log("Not eligible")
}


//demonstrate switch case 
let age1=prompt("Enter your age");
switch(age1){
    case 18:
        console.log("You are eligible to vote");

    case 20:
        console.log("You are eligible");
    case 17:
        console.log("You are not eligible");

    default:
        console.log("Try");
}


//using break statement in switch case
let age2=prompt("Enter your age");
switch(age2){
    case 18:
        console.log("You are eligible to vote");
    break
    case 20:
        console.log("You are eligible");
    break    
    case 17:
        console.log("You are not eligible");
    break
    default:
        console.log("Try");
}


//check whether number is even or odd
let num=prompt("Enter a number");
if (num%2==0){
    console.log("Even number");
}
else{
    console.log("Odd number");
}

