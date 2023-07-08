//string methods

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length;
console.log(sln);

let str = "Please go from here!";
let pos = str.indexOf("go");
console.log(pos);

let str1 = "Please locate where 'locate' occurs!";
let pos1 = str1.lastIndexOf("locate");
console.log(pos1);

let str2 = "Please locate where 'locate' occurs!";
let pos2 = str2.split(" ");
console.log(pos2);

let str3 = "Please locate where 'locate' occurs!";
let pos3 = str3.slice(7, 13);
console.log(pos3);

let str4 = "Please locate it from here!";
let pos4 = str4.substring(7, 13);
console.log(pos4);

let str5 = "Please locate it!";
let pos5 = str5.charAt(0);
console.log(pos5);

let str6 = "Please locate where 'locate' occurs!";
let pos6 = str6.charCodeAt(0);
console.log(pos6);

let str7 = "locate it on other place";
let pos7 = str7.replace("locate", "find");
console.log(pos7);

let str8 = "DO IT now";
let pos8 = str8.toUpperCase();
console.log(pos8);

let str9 = "Write your name in CAPITAL LETTERS!";
let pos9 = str9.toLowerCase();
console.log(pos9);



