

let n; /*number of player*/
let cardsArray=["1-01","1-02","1-03","1-04","1-05","1-06","1-07","1-08","1-09","1-10","1-11","1-12","1-13",
"2-01","2-02","2-03","2-04","2-05","2-06","2-07","2-08","2-09","2-10","2-11","2-12","2-13",
"3-01","3-02","3-03","3-04","3-05","3-06","3-07","3-08","3-09","3-10","3-11","3-12","3-13",
"4-01","4-02","4-03","4-04","4-05","4-06","4-07","4-08","4-09","4-10","4-11","4-12","4-13",
"0","1-01","1-02","1-03","1-04","1-05","1-06","1-07","1-08","1-09","1-10","1-11","1-12","1-13",
"2-01","2-02","2-03","2-04","2-05","2-06","2-07","2-08","2-09","2-10","2-11","2-12","2-13",
"3-01","3-02","3-03","3-04","3-05","3-06","3-07","3-08","3-09","3-10","3-11","3-12","3-13",
"4-01","4-02","4-03","4-04","4-05","4-06","4-07","4-08","4-09","4-10","4-11","4-12","4-13",
"0"];
let deck=[];
let handPlayer0=[];
let handPlayer1=[];
let handPlayer2=[];
let handPlayer3=[];
let message=$("#message");
let tableArray=[];



function verify(){
    n=$('input[name="num_of_players"]:checked').val();
    if(n==undefined){
        $("#message").html("please choose number of players!");
        return;
    }
    console.log(n);
    $("#main").css("visibility","hidden")
    $("#game").css("visibility","visible")
    Start();
};


function Start(){
    console.log(n);
   for (i=2;i<=n;i++){
        $("#game").append(`<div id="player-${i-1}" class="board"></div>`);
        
   }
   Shuffle(cardsArray);
   deal_cards(n,deck);
   makeTable();

};
function makeTable(){
    for (i=0;i<78;i++)
    {
        $("#floor").append(`<span id="card" draggable="true"></span>`);
    }

}
function Shuffle(cardsArray){
    for(i=0;i<cardsArray.length;i++)
    {
        deck.push(cardsArray[i]);
    }
    for (var i = cardsArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
}

function deal_cards(numberOfPlayers,Deck){
    for(i=0;i<numberOfPlayers;i++)
    {
        for(j=0;j<14;j++){
                temp=Deck.pop();
            if (i==0)
            {
                $("#player-0").append(`<span id="card" draggable="true"><img src="/pics/${temp}.svg"></span>`)
                handPlayer0.push(temp);
            }
            else if(i==1)
            {
                $("#player-1").append(`<span id="card" draggable="true"><img src="/pics/${temp}.svg"></span>`)
                handPlayer1.push(temp);
            }
            else if (i==2)
            {
                $("#player-2").append(`<span id="card" draggable="true"><img src="/pics/${temp}.svg"></span>`)
                handPlayer2.push(temp);
            }
            else
            {
                $("#player-3").append(`<span id="card" draggable="true"><img src="/pics/${temp}.svg"></span>`)
                handPlayer3.push(temp);
            }
        }
    }
}
function draw(Deck){
    let temp
    if(deck.length==0){
        console.log("the deck is empty");   
    }
    else
    {
        temp=deck.pop();
        $("#player-0").append(`<span id="card" draggable="true"><img src="/pics/${temp}.svg"></span>`)
        handPlayer0.push(temp);
    }
}


function sort789()
{
    handPlayer0.sort();
    $(`#player-0`).empty();
    for(let card of handPlayer0){
        $("#player-0").append(`<span id="card" draggable="true"><img src="/pics/${card}.svg"></span>`)
    }
}

// function sort777()
// {
   
// }
// document.addEventListener('DOMContentLoaded', function() {
//     const card=document.getElementById('card');
//     let table=document.getElementById('floor');
    
//     card.addEventListener('dragstart', function(event) {
//         console.log(event);
//     });

//     table.addEventListener('dragover',function(event){
//         event.preventDefault()

//     })
//     table.addEventListener('drop',function(event){
//         table.prepend(card);
//     })


// });

// function drag(card){
//     let card=

// }

function exit(){
    $("#game").css("visibility","hidden")
    $("#main").css("visibility","visible")
    $("#player-1").remove();
    $("#player-2").remove();
    $("#player-3").remove();
    fc = document.getElementById('player-0');
    while (fc.firstChild) {
        fc.removeChild(fc.firstChild);
    }
    deck=[];
}
