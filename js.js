

var Gameboard = (function(){
    //piece array
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    //row
    const row = document.getElementById(`row`);


    //build gameboard
    function createTable(){


    //declare turn and piece
    //var turn = 1;
    //var playPiece = "X";


    //create 9 cells
        for (i = 0; i < (gameboard.length); i++){

            //create the cells
            let cell = document.createElement("td");
            cell.classList.add("cell");
            cell.setAttribute('id', i);

            

            //console.log(i);
            //allow user to add X and O
            //cell.addEventListener(`click`, function(){


                /*
                if (turn % 2 != 0){
                    cell.textContent = "X";
                    gameboard[i] = "X";
                    console.log("array item "+i+" is equal to "+gameboard[i])
                } else {
                    cell.textContent = "O";
                    gameboard[i] = "O";
                    console.log("array item "+i+" is equal to "+gameboard[i])
                }*/
            //    turn++;

           // }, {once:true});


            
            

            //append
            row.appendChild(cell);
        }
    

    }
    function writeNewValues(){

        for (i = 0 ; i < 9; i++){

            let cell = document.getElementById(i);
            cell.textContent = gameboard[i];
        }
     


    }


    //render
    function render(){
        createTable();
    }

    //return
    return {render, gameboard, writeNewValues};

    }

)()

const Player = (name, piece) => {
    return { name , piece };
}

const Human = Player("Glib", "X");
const AI = Player("AI", "O");

var Game = (function(){

    function winCheck(){

        winner = false;

        /*
        if (Gameboard.gameboard[0] == "X"&&
            Gameboard.gameboard[1] == "X"&&
            Gameboard.gameboard[2] == "X"){
                winner = "true";
            } else {
                winner = "false";
            }

            if (winner = "true"){
                alert("You Win!");

                //delete everything

                for (i = 0 ; i < 9; i++){

                    let cell = document.getElementById(i);
                    cell.textContent = gameboard[i];
                }
            }
    */
    }


    function playFirstRound(){


          
        document.addEventListener(`click`, function(e) {


            
            if (e.target.classList == "cell"){


                //check if something is already there

                if (Gameboard.gameboard[e.target.id] != "X" &&
                Gameboard.gameboard[e.target.id] != "O"){

                    //if nothing exists, write
                    Gameboard.gameboard[e.target.id] = "X";
                    e.target.textContent = "X";
                }

               //console.log(Gameboard.gameboard);
            }
        }, {once:true})

        winCheck();
    }


    function playRoundOdd(){


          
            document.addEventListener(`click`, function(e) {


                
                if (e.target.classList == "cell"){


                    //check if something is already there

                    if (Gameboard.gameboard[e.target.id] != "X" &&
                    Gameboard.gameboard[e.target.id] != "O"){

                        //if nothing exists, write
                        Gameboard.gameboard[e.target.id] = "X";
                        e.target.textContent = "X";
                    } else {
                        playRoundOdd();
                    }

                    //console.log(Gameboard.gameboard);
                }
            }, {once:true})
            winCheck();
            }

    function playRoundEven(){

        //assign X or O
            
            document.addEventListener(`click`, function(e) {
                if (e.target.classList == "cell"){

                    if (Gameboard.gameboard[e.target.id] != "X" &&
                    Gameboard.gameboard[e.target.id] != "O"){
                        Gameboard.gameboard[e.target.id] = "O";
                        e.target.textContent = "O";
                    } else {
                        playRoundEven();
                    }
                }
            }, {once:true})


    }
    

    function render(){


    }

    return {render, playRoundEven, playRoundOdd, playFirstRound, winCheck};

})()



Gameboard.render();
Game.render();

//round one
Game.playFirstRound();


//check winner or launch round 2
if (Game.winCheck.winner === true){
    alert("You Win");
} else {
    Gameboard.writeNewValues();
    Game.playRoundEven();
}

//check winner or launch round 3
if (Game.winCheck.winner  === true){
    alert("You Win");
} else {
    Gameboard.writeNewValues();
    Game.playRoundOdd();
}

//check winner or launch round 4
if (Game.winCheck.winner  === true){
    alert("You Win");
} else {
    Gameboard.writeNewValues();
    Game.playRoundEven();
}

//check winner or launch round 5
if (Game.winCheck.winner  === true){
    alert("You Win");
} else {
    Gameboard.writeNewValues();
    Game.playRoundOdd();
}

//check winner or launch round 6
if (Game.winCheck.winner  === true){
    alert("You Win");
} else {
    Gameboard.writeNewValues();
    Game.playRoundEven();
}


Gameboard.writeNewValues();
Game.playRoundOdd();

Gameboard.writeNewValues();
Game.playRoundEven();

Gameboard.writeNewValues();
Game.playRoundOdd();

Gameboard.writeNewValues();
Game.playRoundOdd();

Gameboard.writeNewValues();
Game.playRoundEven();

Gameboard.writeNewValues();
Game.playRoundOdd();

Gameboard.writeNewValues();
Game.playRoundEven();

Gameboard.writeNewValues();
Game.playRoundOdd();




