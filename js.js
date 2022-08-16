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

    //record turns

    function playRoundOdd(turn){

        console.log("round "+turn+":");

        //assign X or O
            
            document.addEventListener(`click`, function(e) {

                //check if something is already there

                
                if (e.target.classList == "cell"){

                    if (Gameboard.gameboard[e.target.id] != "X" &&
                    Gameboard.gameboard[e.target.id] != "O"){
                        Gameboard.gameboard[e.target.id] = "X";
                        e.target.textContent = "X";
                    }

                    console.log(Gameboard.gameboard);
                }
            }, {once:true})


    }

    function playRoundEven(turn){
        console.log("round "+turn+":");

        //assign X or O
            
            document.addEventListener(`click`, function(e) {
                if (e.target.classList == "cell"){

                    if (Gameboard.gameboard[e.target.id] != "X" &&
                    Gameboard.gameboard[e.target.id] != "O"){
                        Gameboard.gameboard[e.target.id] = "O";
                        e.target.textContent = "O";
                    } 
                }
            }, {once:true})


    }
    

    //winCheck

    function winCheck(){
    }




    function render(){
        //clear first board
        //Gameboard.deleteTable();

        //update Array
        //writeToArray();

        //play round one
        //playRound();


        //update board
        //Gameboard.render();

        //check for winners
       // winCheck();
    }

    return {render, playRoundEven, playRoundOdd};

})()

Gameboard.render();
Game.playRoundOdd(1);
Gameboard.writeNewValues();
Game.playRoundEven(2);
Gameboard.writeNewValues();
Game.playRoundOdd(3);


