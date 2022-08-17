

var Gameboard = (function(){
    //declare empty piece array
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    function clearArray(){
        for (i = 0; i < gameboard.length; i++){
            gameboard[i] = "";
        }
    }

    //decalre row once
    const row = document.getElementById(`row`);

    //build gameboard
    function createTable(){

        for (i = 0; i < (gameboard.length); i++){

            //create the cells
            let cell = document.createElement("td");
            cell.classList.add("cell");
            cell.setAttribute('id', i);

            //append
            row.appendChild(cell);
        }
    }

    function deleteTable(){

        for (i = 0 ; i < 9; i++){
            let cell = document.getElementById(i);
            cell.remove();            
        }

        clearArray();
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
    return {render, gameboard, writeNewValues, deleteTable};

    }

)()

const Player = (name, piece) => {
    return { name , piece };
}

const Human = Player("Glib", "X");
const AI = Player("AI", "O");

var Game = (function(){

    round = 1;
    winnerX = false;
    winnerO = false;

    function winCheck(){
            //Xs
        if (    Gameboard.gameboard[0] == "X"&&
                Gameboard.gameboard[1] == "X"&&
                Gameboard.gameboard[2] == "X"){
                    winnerX = true;

            } else if (
                Gameboard.gameboard[3] == "X"&&
                Gameboard.gameboard[4] == "X"&&
                Gameboard.gameboard[5] == "X"){
                    winnerX = true; 
            } else if (
                Gameboard.gameboard[6] == "X"&&
                Gameboard.gameboard[7] == "X"&&
                Gameboard.gameboard[8] == "X"){
                    winnerX = true; 
            } else if (
                Gameboard.gameboard[0] == "X"&&
                Gameboard.gameboard[3] == "X"&&
                Gameboard.gameboard[6] == "X"){
                    winnerX = true; 
            } else if (
                Gameboard.gameboard[1] == "X"&&
                Gameboard.gameboard[4] == "X"&&
                Gameboard.gameboard[7] == "X"){
                    winnerX = true; 
            } else if (
                Gameboard.gameboard[2] == "X"&&
                Gameboard.gameboard[5] == "X"&&
                Gameboard.gameboard[8] == "X"){
                    winnerX = true; 
            } else if (
                Gameboard.gameboard[0] == "X"&&
                Gameboard.gameboard[4] == "X"&&
                Gameboard.gameboard[8] == "X"){
                    winnerX = true; 
            } else if (
                Gameboard.gameboard[2] == "X"&&
                Gameboard.gameboard[4] == "X"&&
                Gameboard.gameboard[6] == "X"){    
                    winnerX = true;
            } 
            //Os
            else if (
            Gameboard.gameboard[0] == "O"&&
            Gameboard.gameboard[1] == "O"&&
            Gameboard.gameboard[2] == "O"){
                winnerO = true;

            } else if (
            Gameboard.gameboard[3] == "O"&&
            Gameboard.gameboard[4] == "O"&&
            Gameboard.gameboard[5] == "O"){
                winnerO = true; 
            } else if (
            Gameboard.gameboard[6] == "O"&&
            Gameboard.gameboard[7] == "O"&&
            Gameboard.gameboard[8] == "O"){
                winnerO = true; 
            } else if (
            Gameboard.gameboard[0] == "O"&&
            Gameboard.gameboard[3] == "O"&&
            Gameboard.gameboard[6] == "O"){
                winnerO = true; 
            } else if (
            Gameboard.gameboard[1] == "O"&&
            Gameboard.gameboard[4] == "O"&&
            Gameboard.gameboard[7] == "O"){
                winnerO = true; 
            } else if (
            Gameboard.gameboard[2] == "O"&&
            Gameboard.gameboard[5] == "O"&&
            Gameboard.gameboard[8] == "O"){
                winnerO = true; 
            } else if (
            Gameboard.gameboard[0] == "O"&&
            Gameboard.gameboard[4] == "O"&&
            Gameboard.gameboard[8] == "O"){
                winnerO = true; 
            } else if (
            Gameboard.gameboard[2] == "O"&&
            Gameboard.gameboard[4] == "O"&&
            Gameboard.gameboard[6] == "O"){    
                winnerO = true;
            } else {
                winnerX = false;
                winnerO = false;
            }
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

                    console.log(round);
                    round++

                }
            }
        }, {once:true})
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

                    winCheck();
                    console.log(winnerO);

                    console.log(Gameboard.gameboard);

                    /*
                    if (winnerX = true){
                        console.log("X wins!");
                    } else if (winnerO = true){
                        console.log("O wins!");
                    } else {
                        console.log("no winners yet")
                    }
                    */

                    console.log(round);
                    round++

                } else {
                    playRoundOdd();
                    //console.log(round);
                }
            }
        }, {once:true})
    }

    function playRoundEven(){

        //assign X or O
            
            document.addEventListener(`click`, function(e) {
                if (e.target.classList == "cell"){

                    if (Gameboard.gameboard[e.target.id] != "X" &&
                    Gameboard.gameboard[e.target.id] != "O"){
                        Gameboard.gameboard[e.target.id] = "O";
                        e.target.textContent = "O";

                        //check for winner
                        winCheck();
                        //console.log(winnerX);
                        console.log(winnerO);

                        /*
                        if (winnerX = true){
                            console.log("X wins!");
                        } else if (winnerO = true){
                            console.log("O wins!");
                        } else {
                            console.log("no winners yet")
                        }
                        */

                        console.log(round);
                        round++

                    } else {

                        playRoundEven();

                    }
                }
            }, {once:true})
    }
    
    function gameLoop(){
    
        //1
        playFirstRound();
        Gameboard.writeNewValues();

        //2
        playRoundEven();
        Gameboard.writeNewValues();

        //3
        playRoundOdd();
        Gameboard.writeNewValues();

        //4
        playRoundEven();
        Gameboard.writeNewValues();

        //5
        playRoundOdd();
        Gameboard.writeNewValues();

        //6
        playRoundEven();
        Gameboard.writeNewValues();

        //7
        playRoundOdd();
        Gameboard.writeNewValues();

        //8
        playRoundEven();
        Gameboard.writeNewValues();

        //9
        playRoundOdd();
        Gameboard.writeNewValues();   
        
    }
    

    //declare round




    function render(){
        
        gameLoop();

    }

    return {render, playRoundEven, playRoundOdd, playFirstRound,
        gameLoop, round};

})()

//make board
Gameboard.render();

//play first round
Game.render();





