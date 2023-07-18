/* Day 11 #100DaysOfCode */

//create a variable of type string and add to number to it

let a="Practice 1";
let b= 1;
console.log(a+ b);


//use typeof operator to find the datatype of the string in the above question

console.log(typeof (a+b));


//create a const object in javascript

const x = {
    name:"Joe", section:1, class:"XII"
};
x= 78; /*this 78 does not assign to contant x because the values of constant connot be changed*/


//add new key to the above const object

x['city']="Mumbai";
console.log(x);


//create a word meaning dictionary
let dictionary = {
    glitter:"shine with a bright, shimmering, reflected light",
    appreciate:"recognize the full worth of",
    sympathy:"feelings of pity and sorrow for someone else's misfortune",
    empathy:"the ability to understand and share the feelings of another",
    eccentric:"unconventional and slightly strange",
    melancholy:"a feeling of pensive sadness, typically with no obvious cause",
};
console.log(dictionary);
console.log(dictionary.empathy); //accessing the value of a key
console.log(dictionary['eccentric']); //accessing the value of a key
