//function

function hello(){
    console.log("Hello");
}
hello();


function sub(sub1,sub2){
    console.log(sub1-sub2);
}
sub(10,5);


function discount(purchase){
    if (purchase>=1500){
        purchase*=0.85;
    }
    console.log(purchase);
}
discount(1900);
discount(1200);


