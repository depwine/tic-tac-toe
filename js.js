

var Gameboard = (function(){
    //declare empty piece array
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    function clearArray(){
        gameboard = ["", "", "", "", "", "", "", "", ""];
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

    function writeNewValues(){

        for (i = 0 ; i < 9; i++){

            let cell = document.getElementById(i);
            cell.textContent = gameboard[i];
        }
    }

    function deleteTable(){

        clearArray();
        console.log(gameboard);
        writeNewValues();
    }

    //render
    function render(){
        createTable();
    }

    //return
    return {render, gameboard, writeNewValues, deleteTable};

    }
)()

var Game = (function(){

    let round = 1;
    let winnerX = false;
    let winnerO = false;
    

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

        function firstRound(e){
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
        }
        
        document.addEventListener(`click`, function(e) {  
            
            firstRound(e);

        }, {once:true})
    }

    function playRoundOdd(){
          
        function oddRound(e){
            winCheck();

            //check if the game is over

            if (winnerX === true || winnerO === true){

                //show correct winner
                if (winnerX === true){
                    console.log("X Wins");
                    console.log(Gameboard.gameboard);

                    document.removeEventListener(`click`, function(e) {   
                        firstRound(e);                        
                    }, {once:true})

                    document.removeEventListener(`click`, function(e) {   
                        oddRound(e);                        
                    }, {once:true})

                    document.removeEventListener(`click`, function(e) {   
                        evenRound(e);                        
                    }, {once:true})

                    winnerO = false;
                    winnerX = false;
                    round = 1;
                    
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

        }

        document.addEventListener(`click`, function(e) {   
            
            oddRound(e);
            
        }, {once:true})
    }

    function playRoundEven(){

        function evenRound(e){
                        
            winCheck();

            //check if the game is over

            if (winnerX === true || winnerO === true){

                //show correct winner
                if (winnerO === true){
                    console.log("O Wins")

                    document.removeEventListener(`click`, function(e){});

                    winnerO = false;
                    winnerX = false;
                    round = 1;
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

        }
          
        document.addEventListener(`click`, function(e) {   
            evenRound(e);
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

        Gameboard.gameboard = ["", "", "", "", "", "", "", "", ""];

        for (i = 0 ; i < 9; i++){
    
            let cell = document.getElementById(i);
            cell.textContent = Gameboard.gameboard[i];
        }

        console.log(Gameboard.gameboard);

        round = 1;
        winnerX = false;
        winnerO = false;
        gameLoop();

    }

    return {render, winnerX, winnerO, round};

})()


var GameTest = (function(){

    function playGame(){
         Gameboard.gameboard = ["X", "X", "X", "", "", "", "", "", ""];

         console.log(Gameboard.gameboard);
        
         for(i = 0; i < 9 ; i++){ 
             let cell = document.getElementById(i);
             cell.textContent = Gameboard.gameboard[i]; 
         }

    }

    document.addEventListener(`click`, function (){
        playGame();
    }, {once:true});






    function one(){
        document.removeEventListener(`click`, function(){playGame()}, {once:true})
    }

    function render(){
        one};
       
    return {render};    

})()


const Player = (name, piece) => {
    return { name , piece };
}

const Human = Player("Glib", "X");
const AI = Player("AI", "O");

//make board
Gameboard.render();



//play game until winner
//Game.render();

const reset = document.getElementById("resetButton")
GameTest.render();
    
    const start = document.getElementById("startButton")
    
    start.addEventListener(`click`, (e) => {
        Game.render();
    })
    














