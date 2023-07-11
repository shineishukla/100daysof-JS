// array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(3, 1);
console.log(arr);

arr.concat([10, 11, 12]);
console.log(arr);

arr.slice(3, 0, 10, 11, 12);
console.log(arr);

arr.join('-');
console.log(arr);

arr.reverse();
console.log(arr);

arr.sort();
console.log(arr);

// sort by number
var arr1= [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr1.sort(function(a, b) {
    return a - b;
}
);
console.log(arr1);



//associative array
var arr2 = [];
arr2['name'] = 'John';
arr2['age'] = 20;   
console.log(arr2);

//object
var obj = {
    name: 'John',
    age: 20};
console.log(obj);


