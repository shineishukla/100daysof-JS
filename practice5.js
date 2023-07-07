// objectName: key

var person = {
    name: "John", age: 31, 
    favColor: "green", height: 183
};
var x = person.age;
var y = person['age'];


document.write(x);
document.write(y);

//built in length property

var course = {name: "JS", lessons: 41};
document.write(course.name.length);


//object constructor

function person1(name, age, color){
    this.name = name;
    this.age = age;
    this.favColor = color;
}
document.write(person1.age);


//new keyword

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");
document.write(p1.age);
document.write(p2.name);