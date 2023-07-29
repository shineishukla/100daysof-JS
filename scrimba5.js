// Day 20 of #100DaysOfCode

//add a click event listener to the button

let button= document.getElementById("play-button");
button.addEventListener("click",function(){
    console.log("button clicked");
});




//innerHTML 
const container=document.getElementById("container");
container.innerHTML="<button> BUY </button>";


//truthy and falsy values
const credits=0;
if(credits){
    console.log("Let's play!");
}else{
    console.log("Sorry, not enough credits!");
}
