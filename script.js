

let n; /*number of player*/
let cardsArray=[];
const cTI={
    '1':1,
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '10':10,
    '11':11,
    '12':12,
    '13':13
}
const rTC={
    "1":1,
    "2":1,
    "3":2,
    "4":2,
    "5":3,
    "6":3,
    "7":4,
    "8":4,  
}


let deck=[];
let handPlayer0=[];
let handPlayer1=[];
let handPlayer2=[];
let handPlayer3=[];
let message=$("#message");
let tableArray=[];
const playerBoard= document.querySelectorAll('.board');
var floor;
//////////////////////verify//////////////////////////
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

function updateDeck(){
    $("#draw").empty();
    let len= deck.length;
    $("#draw").append("➕" +`<br>` +len);
}

/////////////////start//////////////////////////
function Start(){
    console.log(n);
   for (i=2;i<=n;i++){
        $("#game").append(`<div id="player-${i-1}" class="board"></div>`);
        
   }
   setDeck();
   Shuffle(cardsArray);
   deal_cards(n,deck);
   turn();
    //makeTable();
};
function makeTable(){
    for (i=0;i<78;i++)
    {
        $("#floor").append(`<span id="card" class="card" draggable="true"></span>`);
    }

}
function setDeck(){
    let counter=0;
 for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= 13; j++) {
            if (i%2 === 1) {
               cardsArray.push({
                    "id": `${i}${cTI[j]}`,
                    "card": `<span id="${i}${cTI[j]}" class="card" style="background-image:url('/pics/${rTC[i]}-0${cTI[j]}.svg')" color="${rTC[i]}" number="${cTI[j]}"></span>`,
                    "color": rTC[i],
                    "number": `${cTI[j]}`
                    
                });
               
                
            } else {
                cardsArray.push({
                    "id": `${i}${cTI[j]}`,
                    "card": `<span id="${i}${cTI[j]}" class="card" draggable="true" style="background-image:url('/pics/${rTC[i]}-0${cTI[j]}.svg')" color="${rTC[i]}" number="${cTI[j]}"></span>`,
                    "color": rTC[i],
                    "number": `${cTI[j]}`
                });
                
            }

        }
    }
    cardsArray.push({
        "id": 0,
        "card": `<span id="0" class="card" style="background-image:url('/pics/0.svg')" color="0" number="0"></span>`,
        "color": 0,
        "number": `0`
    });
    cardsArray.push({
        "id": 0,
        "card": `<span id="0" class="card" style="background-image:url('/pics/0.svg')" color="0" number="0"></span>`,
        "color": 0,
        "number": `0`
    });
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
                let tileElement=$(temp.card)
            if (i==0)
            {
                $("#player-0").append(tileElement)
                handPlayer0.push(temp);
            }
            else if(i==1)
            {
                $("#player-1").append(tileElement)
                handPlayer1.push(temp);
            }
            else if (i==2)
            {
                $("#player-2").append(tileElement)
                handPlayer2.push(temp);
            }
            else
            {
                $("#player-3").append(tileElement)
                handPlayer3.push(temp);
            }
        }
    }
   //dragNDrop();
    //$(".board").sortable();
    updateDeck();
}




////////////////////////////////in game//////////////////////////

function draw(Deck){
    let temp
    if(deck.length==0){
        console.log("the deck is empty");   
    }
    else
    {
        temp=deck.pop();
        let tileElement=$(temp.card)
        $("#player-0").append(tileElement);
        handPlayer0.push(temp);
    }
   //dragNDrop();
   updateDeck();
}

function sort789()
{
    
    handPlayer0.sort(function(a,b){return parseInt(a.color)-parseInt(b.color)});

    $(`#player-0`).empty();
    for(i=0;i<handPlayer0.length;i++){
        temp=handPlayer0[i].card;
        
        $("#player-0").append(temp);
    }
    turn();
}
 function sort777(){

    handPlayer0.sort(function(a,b){return parseInt(a.number) -parseInt(b.number)});

    $(`#player-0`).empty();
    for(i=0;i<handPlayer0.length;i++){
        temp=handPlayer0[i].card;
       
        $("#player-0").append(temp);
    }
    turn();
}

const screenShot={
    //"computerHand":[],//cards in array (stirngs)
    "playerHand":[],//cards in array (stirngs)
    "board":[],//cards in array (stirngs)
    "remainDeck":[]//cards in array (stirngs)
}

//deep copy each array from screenShot
const deepClone=(target,arr)=>{
    for(let i=0;i<arr.length;i++){
        target.push(arr[i]);
    }
}
   
const snap=()=>{
    deepClone(screenShot.playerHand,playerHand);
    deepClone(screenShot.board,board);
    deepClone(screenShot.remainDeck,remainDeck);
}

 $(function(){
     $(".floor").sortable();

 });
//  $(function(){
//     $(".board").sortable();

// });

function turn(){


    //  $( ".board" ).sortable({
    //      revert: true
    //    });
    $( ".board" ).draggable({
        //helper:"clone",
        //  connectToSortable: ".board",
         drag:function(){
            console.log('drag');
         }
    });
      $( "div, span" ).disableSelection();
}
    // $(".floor").droppable({
    //      drop:function(event,ui){
    //          var position=ui.position;
    //          var cellX=calculaceCellX(position.left);
    //          var cellY=calculaceCellY(position.top);

    //          moveCardToCell(ui.draggable, cellX, cellY);
    //           tableArray.push($(this));
    //           moveCard(ui.draggable,$(this))

    //          moveCard(tableArray)
    //      }
        
    //});

//     function calculateCellX(positionLeft) {
//         var relativeX = positionLeft - floorOffsetLeft; 
//         return Math.floor(relativeX / cellSize); 
//     }
    
//     function calculateCellY(positionTop) {
//         var relativeY = positionTop - floorOffsetTop; 
//         return Math.floor(relativeY / cellSize); 
//     }
    
//     function moveCardToCell(cardDiv, cellX, cellY) {
//         cardDiv.detach();
//         cardDiv.css({ 
//             position: 'absolute', 
//             left: (cellX * cellSize) + 'px',  
//             top: (cellY * cellSize) + 'px' 
//         });
//         cardDiv.appendTo('#floor'); 
//     }

// }

// function moveCard(cardDiv, destinationDiv) {
//     // Detach the cardDiv (removes it but preserves data)
//     cardDiv.detach(); 

//     // Append the cardDiv to the destination
//     destinationDiv.appendTo(destinationDiv);  
// }






// function renderFloor(Array){
//     console.log(Array);
//     $(".floor").empty();
//     for(var i in Array){
//         var node = Array [i]
//         console.log(Array);
//         $(".floor").append("<span>somthing</span>");
//     }

// }










//////handeling dragging//////










// const makeCardDragable=()=>{
//     console.log('makeCardDragable!');
//     $('#card').on('drag',function(){
//         console.log("#card is in");
//         console.log(this);
//         draggingDiv=$(this);
//         console.log("draggingDiv",DraggingDiv);

//     })
    
// }





// playerBoard.forEach(board=>{
//     board.addEventListener('dragstart',handleDragStart);
//     board.addEventListener('dragend',handleDragEnd);
// })

// function handleDragStart(event){
//     event.dataTransfer.setData('text',event.target.id);
//     console.log('tileId:', event.target.id);
//     event.target.style.opacity='0.5';
// }


// function handleDragEnd(event){
//    event.target.style.opacity='1';
// }

// floor= document.getElementById('floor')
//     floor.addEventListener('dragover',handleDragOver);
//     floor.addEventListener('drop',handleDrop);

// function handleDragOver(event)
// {
//     event.preventDefault();
// }

// function handleDrop(event){
//     event.preventDefault();
//     const tileId=event.dataTransfer.getData('text/plain');
//     const tile=document.getElementById(tileId);
//     console.log('tileId: ', tileId);
//     console.log('tile: ', tile);

//     if (event.target.id === 'floor') { // Check if the drop target is the "floor"
//         event.target.appendChild(tile); 
//     }
// }



/////////////exit///////////////
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
    fb=document.getElementById('floor')
    while(fb.firstChild){
        fb.removeChild(fb.firstChild)
    }
    cardsArray=[];
    handPlayer0=[];
    
    
}



















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


//  });

// function drag(card){
//     let card=

// }