/*var Player = (function(){

    function playerName {

    }

    return {playerName};

})()
*/

var Game = (function(){

    round = 0;
    playerScore = 0;
    aiScore = 0;
    winnerX = false;
    winnerO = false;
    player = "Human"

    //declare player and round divs
    var playerDisplay = document.getElementsByClassName("player")[0];
    var roundDisplay = document.getElementsByClassName("round")[0];

    playerDisplay.textContent = "TIC-TAC-TOE";
    roundDisplay.textContent = "TURN: "+round;

    //declare scores 
    var playerScoreDisplay = document.getElementsByClassName("playerScore")[0];
    var aiScoreDisplay = document.getElementsByClassName("aiScore")[0];

    playerScoreDisplay.textContent = "PLAYER SCORE: " + playerScore;
    aiScoreDisplay.textContent = "AI SCORE: " + aiScore;

    gameboard = ["", "", "", "", "", "", "", "", ""];

    //declare all cells
    var cell1 = document.getElementsByClassName("1")[0];
    var cell2 = document.getElementsByClassName("2")[0];
    var cell3 = document.getElementsByClassName("3")[0];
    var cell4 = document.getElementsByClassName("4")[0];
    var cell5 = document.getElementsByClassName("5")[0];
    var cell6 = document.getElementsByClassName("6")[0];
    var cell7 = document.getElementsByClassName("7")[0];
    var cell8 = document.getElementsByClassName("8")[0];
    var cell9 = document.getElementsByClassName("9")[0];

    //add event listeners to each cell
    cell1.addEventListener("click", function(e){addLetter(e)}, {once:true});
    cell2.addEventListener("click", function(e){addLetter(e)}, {once:true});
    cell3.addEventListener("click", function(e){addLetter(e)}, {once:true});
    cell4.addEventListener("click", function(e){addLetter(e)}, {once:true});
    cell5.addEventListener("click", function(e){addLetter(e)}, {once:true});
    cell6.addEventListener("click", function(e){addLetter(e)}, {once:true});
    cell7.addEventListener("click", function(e){addLetter(e)}, {once:true});
    cell8.addEventListener("click", function(e){addLetter(e)}, {once:true});
    cell9.addEventListener("click", function(e){addLetter(e)}, {once:true});

    function aiPlay(){

        //create random int 0-8
        function getRandomInt(){
            return Math.floor(Math.random() * 9);
        }

        //assign
        var aiSelection =  getRandomInt();
        console.log("***ROUND*****: "+round);
        console.log(aiSelection);

        //do not run on round 9
        if (round < 5){
      
        //check if exists
        if (gameboard[aiSelection] === ""){
            //map it to board
            gameboard[aiSelection] = "O";
            console.log(gameboard);

            //map to array
            var str = "cell"+ (aiSelection+1)+".textContent = 'O';";
            //test
            //console.log(str);
            eval (str);


        } else {
            //re-run
            aiPlay();
        }
        } else {
            playerDisplay.textContent = "TIE, PLAY AGAIN!";
            roundDisplay.textContent = "";
        }


    }

    function addLetter(e){

        //check for win - if it's over, dont start gameloop
        winCheck();

        if (winnerX === false && winnerO === false){
                
    
        //
        //make sure it's empty
        if (gameboard[e.target.id] === "" ){
        
            //if empty, run the game
            //X turn
            player = "AI";
            playerDisplay.textContent = "Next Player: "+player;

            gameboard[e.target.id] = "X";
            e.target.textContent = "X";
            


            //check for win after X's turn
            winCheck();

            if (winnerX === true){
                console.log("X Wins!");
                round = "YOU WIN!";
                playerDisplay.textContent = "PLAY AGAIN :)";
                roundDisplay.textContent = "YOU WIN!";
                playerScore++;
                playerScoreDisplay.textContent = "PLAYER SCORE: " + playerScore;

            } else {
            //
            //console.log(gameboard);
            round++;
            console.log("turn: "+round);
            roundDisplay.textContent = "TURN: "+round;
            }

            // O turn
            player = "Player";
            playerDisplay.textContent = "TIC-TAC-TOE";

            if (round < 9){

                aiPlay();

                /*_MANUAL CLICKING LOGIC
                
                //add an O to the board and write that value to the back array
                gameboard[e.target.id] = "O";
                e.target.textContent = "O";
                */
    
                //check for win on O's turn
                winCheck();
    
                 if (winnerO === true){
                    console.log("O Wins!");
                    round = "AI WINS!";
                    playerDisplay.textContent = "PLAY AGAIN :)";
                    roundDisplay.textContent = "AI WINS!";
                    aiScore++;
                    aiScoreDisplay.textContent = "AI SCORE: " + aiScore;
    
                } else {
                //
                //console.log(gameboard);
                //round++;
                roundDisplay.textContent = "TURN: "+round;
                }     

            } else if (winnerO === false && winnerX === false) {
                //if tie game
                roundDisplay.textContent = "Tie Game";
                playerDisplay.textContent = "PLAY AGAIN :)";
                console.log("Turn 9")       
            } else if (winnerO === true){
                //throw error for testing
                console.log('O wins')
            } else if (winnerX === true){
                //throw error for testing
                console.log("x wins");
            } else {
                //for testing
                console.log("what?!")
            }
    
            } else {
                
            }
        }
}




    var resetButton = document.getElementsByClassName("reset")[0];
    resetButton.addEventListener("click", function(){reset()})

    function reset(){
        for (i = 1; i < 10 ; i++){
            var str = "cell"+ i+".textContent = '';";
            eval (str);
        }
        //remove existing event listeners to reset once:true
        cell1.removeEventListener("click", function(e){addLetter(e)}, {once:true});
        cell2.removeEventListener("click", function(e){addLetter(e)}, {once:true});
        cell3.removeEventListener("click", function(e){addLetter(e)}, {once:true});
        cell4.removeEventListener("click", function(e){addLetter(e)}, {once:true});
        cell5.removeEventListener("click", function(e){addLetter(e)}, {once:true});
        cell6.removeEventListener("click", function(e){addLetter(e)}, {once:true});
        cell7.removeEventListener("click", function(e){addLetter(e)}, {once:true});
        cell8.removeEventListener("click", function(e){addLetter(e)}, {once:true});
        cell9.removeEventListener("click", function(e){addLetter(e)}, {once:true});


        //re-add so that once:true is refreshed
        cell1.addEventListener("click", function(e){addLetter(e)}, {once:true});
        cell2.addEventListener("click", function(e){addLetter(e)}, {once:true});
        cell3.addEventListener("click", function(e){addLetter(e)}, {once:true});
        cell4.addEventListener("click", function(e){addLetter(e)}, {once:true});
        cell5.addEventListener("click", function(e){addLetter(e)}, {once:true});
        cell6.addEventListener("click", function(e){addLetter(e)}, {once:true});
        cell7.addEventListener("click", function(e){addLetter(e)}, {once:true});
        cell8.addEventListener("click", function(e){addLetter(e)}, {once:true});
        cell9.addEventListener("click", function(e){addLetter(e)}, {once:true});

        //reset round
        gameboard = ["", "", "", "", "", "", "", "", ""];

        winnerX = false;
        winnerO = false;
        round = 0;
        player = "Player";
        playerDisplay.textContent = "NEXT ROUND!";
        roundDisplay.textContent = "TURN: "+round;
    }

    var newGameButton = document.getElementsByClassName("newGame")[0];
    newGameButton.addEventListener("click", function(){newGame()})

    function newGame(){
        reset();
        playerDisplay.textContent = "NEW GAME!";
        gameboard = ["", "", "", "", "", "", "", "", ""];

        playerScore = 0;
        aiScore = 0;
        player = "Player"

        playerScoreDisplay.textContent = "PLAYER SCORE: " + playerScore;
        aiScoreDisplay.textContent = "AI SCORE: " + aiScore;

    }

    function winCheck(){
        //Xs
    if (    gameboard[0] == "X"&&
            gameboard[1] == "X"&&
            gameboard[2] == "X"){
                winnerX = true;

        } else if (
            gameboard[3] == "X"&&
            gameboard[4] == "X"&&
            gameboard[5] == "X"){
                winnerX = true; 
        } else if (
            gameboard[6] == "X"&&
            gameboard[7] == "X"&&
            gameboard[8] == "X"){
                winnerX = true; 
        } else if (
            gameboard[0] == "X"&&
            gameboard[3] == "X"&&
            gameboard[6] == "X"){
                winnerX = true; 
        } else if (
            gameboard[1] == "X"&&
            gameboard[4] == "X"&&
            gameboard[7] == "X"){
                winnerX = true; 
        } else if (
            gameboard[2] == "X"&&
            gameboard[5] == "X"&&
            gameboard[8] == "X"){
                winnerX = true; 
        } else if (
            gameboard[0] == "X"&&
            gameboard[4] == "X"&&
            gameboard[8] == "X"){
                winnerX = true; 
        } else if (
            gameboard[2] == "X"&&
            gameboard[4] == "X"&&
            gameboard[6] == "X"){    
                winnerX = true;
        } 
        //Os
        else if (
        gameboard[0] == "O"&&
        gameboard[1] == "O"&&
        gameboard[2] == "O"){
            winnerO = true;

        } else if (
        gameboard[3] == "O"&&
        gameboard[4] == "O"&&
        gameboard[5] == "O"){
            winnerO = true; 
        } else if (
        gameboard[6] == "O"&&
        gameboard[7] == "O"&&
        gameboard[8] == "O"){
            winnerO = true; 
        } else if (
        gameboard[0] == "O"&&
        gameboard[3] == "O"&&
        gameboard[6] == "O"){
            winnerO = true; 
        } else if (
        gameboard[1] == "O"&&
        gameboard[4] == "O"&&
        gameboard[7] == "O"){
            winnerO = true; 
        } else if (
        gameboard[2] == "O"&&
        gameboard[5] == "O"&&
        gameboard[8] == "O"){
            winnerO = true; 
        } else if (
        gameboard[0] == "O"&&
        gameboard[4] == "O"&&
        gameboard[8] == "O"){
            winnerO = true; 
        } else if (
        gameboard[2] == "O"&&
        gameboard[4] == "O"&&
        gameboard[6] == "O"){    
            winnerO = true;
        } else {
            winnerX = false;
            winnerO = false;
        }
}

    return {};

})()

