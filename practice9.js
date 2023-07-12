//setInterval()

setInterval(function(){
    console.log('Hello World');
}
, 1000);


//date object

var date = new Date();
console.log(date);

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var millisecond = date.getMilliseconds();
var time = date.getTime();
