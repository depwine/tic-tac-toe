var Gameboard = (function(){
    //piece arrar
    let gameboard = ["X", "X", "X", "O", "O", "O", "X", "X", "X"];

    //build gameboard
    function createTable(){

        const row = document.getElementById(`row`);

        //create 9 cells
        for (i = 0; i < (gameboard.length); i++){
            let cell = document.createElement("td");
            cell.classList.add("cell");
            cell.classList.add(i);
            cell.textContent = gameboard[i];
    
            //append
            row.appendChild(cell);
        }
    }

    //

    //render
    function render(){
        createTable();
    }

    //return
    return{render};

})()

var Game = (function(){

})()


const Player = {

    

};

Gameboard.render();