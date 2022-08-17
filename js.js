

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
    
    function winCheck(){
        if (Gameboard.gameboard[0] === "X" &&
            Gameboard.gameboard[1] === "X" &&
            Gameboard.gameboard[2] === "X"){
    
                winner = true;
                console.log("Winner!");
    
            } else {
                winner = false;
                console.log("false");
            }
    }
    
    function evenRound(){
        Gameboard.writeNewValues();
        Game.playRoundEven();
        }
        
    function oddRound(){
        Gameboard.writeNewValues();
        Game.playRoundOdd();
    }

    //declare round
    round = 7;
    winner = false;

    function checkPlay(){

        if (round == 1||3||5||7||9){
            console.log("odd round");
            oddRound();
            round++;
        } else {
            console.log("even round");
            evenRound();
            round++;
        }

    }



    function render(){
        
        playFirstRound();
    }

    return {render, playRoundEven, playRoundOdd, playFirstRound, checkPlay,
    evenRound, oddRound};

})()

//make board
Gameboard.render();

//play first round
Game.render();
Game.checkPlay();


