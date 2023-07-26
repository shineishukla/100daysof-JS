//Day 19 of #100DaysOfCode 

let hands={rock,paper,scissors};
let player1={name:"Per",hand:rock};
let player2={name:"Kari",hand:paper};

function playRound(player1,player2){
    if(player1.hand===player2.hand){
        console.log("It's a tie!");
    }else if(player1.hand==="rock" && player2.hand==="scissors"){
        console.log("Rock wins!");
    }else if(player1.hand==="paper" && player2.hand==="rock"){
        console.log("Paper wins!");
    }else if(player1.hand==="scissors" && player2.hand==="paper"){
        console.log("Scissors wins!");
    }else{
        console.log("Player 2 wins!");
    }
}
