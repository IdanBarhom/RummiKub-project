let n; /*number of player*/
let cardsArray=["/pics/1-01.svg","/pics/1-02.svg","/pics/1-03.svg","/pics/1-04.svg","/pics/1-05.svg","/pics/1-06.svg","/pics/1-07.svg","/pics/1-08.svg","/pics/1-09.svg","/pics/1-0a.svg","/pics/1-0b.svg","/pics/1-0c.svg","/pics/1-0d.svg",
"/pics/2-01.svg","/pics/2-02.svg","/pics/2-03.svg","/pics/2-04.svg","/pics/2-05.svg","/pics/2-06.svg","/pics/2-07.svg","/pics/2-08.svg","/pics/2-09.svg","/pics/2-0a.svg","/pics/2-0b.svg","/pics/2-0c.svg","/pics/2-0d.svg",
"/pics/3-01.svg","/pics/3-02.svg","/pics/3-03.svg","/pics/3-04.svg","/pics/3-05.svg","/pics/3-06.svg","/pics/3-07.svg","/pics/3-08.svg","/pics/3-09.svg","/pics/3-0a.svg","/pics/3-0b.svg","/pics/3-0c.svg","/pics/3-0d.svg",
"/pics/4-01.svg","/pics/4-02.svg","/pics/4-03.svg","/pics/4-04.svg","/pics/4-05.svg","/pics/4-06.svg","/pics/4-07.svg","/pics/4-08.svg","/pics/4-09.svg","/pics/4-0a.svg","/pics/4-0b.svg","/pics/4-0c.svg","/pics/4-0d.svg",
"/pics/tileBack.png","/pics/1-01.svg","/pics/1-02.svg","/pics/1-03.svg","/pics/1-04.svg","/pics/1-05.svg","/pics/1-06.svg","/pics/1-07.svg","/pics/1-08.svg","/pics/1-09.svg","/pics/1-0a.svg","/pics/1-0b.svg","/pics/1-0c.svg","/pics/1-0d.svg",
"/pics/2-01.svg","/pics/2-02.svg","/pics/2-03.svg","/pics/2-04.svg","/pics/2-05.svg","/pics/2-06.svg","/pics/2-07.svg","/pics/2-08.svg","/pics/2-09.svg","/pics/2-0a.svg","/pics/2-0b.svg","/pics/2-0c.svg","/pics/2-0d.svg",
"/pics/3-01.svg","/pics/3-02.svg","/pics/3-03.svg","/pics/3-04.svg","/pics/3-05.svg","/pics/3-06.svg","/pics/3-07.svg","/pics/3-08.svg","/pics/3-09.svg","/pics/3-0a.svg","/pics/3-0b.svg","/pics/3-0c.svg","/pics/3-0d.svg",
"/pics/4-01.svg","/pics/4-02.svg","/pics/4-03.svg","/pics/4-04.svg","/pics/4-05.svg","/pics/4-06.svg","/pics/4-07.svg","/pics/4-08.svg","/pics/4-09.svg","/pics/4-0a.svg","/pics/4-0b.svg","/pics/4-0c.svg","/pics/4-0d.svg",
"/pics/tileBack.png"];
let deck=[];
let handPlayer0=[];
let handPlayer1=[];
let handPlayer2=[];
let handPlayer3=[];
let message=$("#message");


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

};



function Shuffle(cardsArray){
    deck=cardsArray
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
                $("#player-0").append(`<span id="card" draggable="true"><img src="${temp}"></span>`)
                handPlayer0.push(temp);
            }
            else if(i==1)
            {
                $("#player-1").append(`<span id="card" draggable="true"><img src="${temp}"></span>`)
                handPlayer1.push(temp);

            }
            else if (i==2)
            {
                $("#player-2").append(`<span id="card" draggable="true"><img src="${temp}"></span>`)
                handPlayer2.push(temp);

            }
            else
            {
                $("#player-3").append(`<span id="card" draggable="true"><img src="${temp}"></span>`)
                handPlayer3.push(temp);

            }
        }
    }
    

}





function exit(){
    
    $("#game").css("visibility","hidden")
    $("#main").css("visibility","visible")
}