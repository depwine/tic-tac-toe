var Game = (function(){



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

        round = 1;
        winnerX = false;
        winnerO = false;

        console.log("first round started");  


        document.addEventListener(`click`, function(e) {  

            if (e.target.classList == "cell"){

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
            
            winCheck();

            //check if the game is over

            if (winnerX === true || winnerO === true){

                //show correct winner
                if (winnerX === true){
                    console.log("X Wins");
                    winnerO = false;
                    winnerX = false;
                    round = 0;
                }

            } else {

                if (e.target.classList == "cell"){

                    if (Gameboard.gameboard[e.target.id] != "X" &&
                    Gameboard.gameboard[e.target.id] != "O"){
    
                        //if nothing exists, write
                        Gameboard.gameboard[e.target.id] = "X";
                        e.target.textContent = "X";
    
                        console.log(round);
                        round++
    
                    } else {
                        playRoundOdd();
                    }
                }
            }

        }, {once:true})
    }

    function playRoundEven(){
          
        document.addEventListener(`click`, function(e) {   
            
            winCheck();

            //check if the game is over

            if (winnerX === true || winnerO === true){

                //show correct winner
                if (winnerO === true){
                    console.log("O Wins")
                    winnerO = false;
                    winnerX = false;
                    round = 0;
                }


            } else {

                if (e.target.classList == "cell"){

                    if (Gameboard.gameboard[e.target.id] != "X" &&
                    Gameboard.gameboard[e.target.id] != "O"){
    
                        //if nothing exists, write
                        Gameboard.gameboard[e.target.id] = "O";
                        e.target.textContent = "O";
    
                        console.log(round);
                        round++
    
                    } else {
                        playRoundEven();
                    }
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
    
    function render(){
        
        gameLoop();

    }

    return {render};

})()

var Gameboard = (function(){
    //declare empty piece array
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    function clearArray(){
        for (i = 0; i < gameboard.length; i++){
            gameboard[i] = "";
        }
    }

    //declare row once
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

        function startGame(){
            createTable();
            Game.render();
        }

        function clearBoard(){
            deleteTable();
        }

        function resetGame(){
            console.log("button pressed");

        }

        var startButton = document.getElementById("startButton");
        startButton.addEventListener(`click`, function(){
            startGame();
        }, {once:true});


        var resetButton = document.getElementById("resetButton");
        resetButton.addEventListener(`click`, function(){
            resetGame();
        });



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



//make board
//Gameboard.render();

//play game until winner
//Game.render();





