// comparison operators

let x=10;
let y=20;
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log(x==y);
console.log(x!=y);


//if else statement

let a=10;
let b=20;
if(a>b){
    console.log("a is greater than b");
}
else{
    console.log("b is greater than a");
}

// if else if statement

let c=10;
let d=20;
if(c>d){
    console.log("c is greater than d");
}
else if(c==d){
    console.log("c is equal to d");
}
else{
    console.log("d is greater than c");
}


//switch statement

let day=3;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
        break;
}

//ternary operator

let age=20;
let type=(age>=18)?"adult":"child";
console.log(type);


//for loop

let sum=0;
for(let i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);

//while loop

let sum1=0;
let i=1;
while(i<=10){
    sum1+=i;
    i++;
}
console.log(sum1);

//do while loop

let sum2=0;
let j=1;
do{
    sum2+=j;
    j++;
}
while(j<=10);
console.log(sum2);

//break and continue

let sum3=0;
for(let i=1;i<=10;i++){
    if(i==5){
        break;
    }
    sum3+=i;
}
console.log(sum3);


let sum4=0;
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    sum4+=i;
}
console.log(sum4);

