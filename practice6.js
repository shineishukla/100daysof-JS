//logical operators

let x=10;
let y=20;
console.log(x>5 && y<30);
console.log(x>5 || y>30);
console.log(!(x>5 && y<30));



//for-in loop

let person = {fname:"John", lname:"Cena", age:55};
let text = "";
let z;
for (z in person) {
    text += person[z] + " ";
    }

//for-of loop

let cars = ['BMW', 'Volvo', 'Mini'];
let x1;
for (x1 of cars) {
    document.write(x1 + "<br >");
    }



//methods

let person1 = {
    firstName: "John",
    lastName : "Cena",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};