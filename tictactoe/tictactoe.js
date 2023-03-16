function P1vsP2(){
    
    var nope = document.getElementById('grid_main');
    var element = document.getElementById('grid_normal');
    nope.style.display = "none";
    element.style.display = "grid";
  
    var name1 = "Player1";
    var name2 = "Player2";
    name1 = prompt("Enter first player's name: ");
    name2 = prompt("Enter second player's name: ");
    document.getElementById('player1').innerHTML = name1;
    document.getElementById('player2').innerHTML = name2;
    startGame();
  }
  
  
  
  function back(){
      
    var nope = document.getElementById('grid_main');
    var element = document.getElementById('grid_normal');
    nope.style.display = "grid";
    element.style.display = "none";
  }
  
  
  
  function startGame(){
    for(var i = 1; i <= 9; i++){
        document.getElementById("tile" + i).innerText = "";
        document.getElementById("tile" + i).style.color = "black";
    }
    document.turn = "X";
    document.winner = null;
    document.countTiles = 0;
    setMessage(document.turn + " gets to start");
  }
  
  
  
  function update(square){
    if(document.winner === true){
        setMessage(document.turn + " already won");
    }
    else if(document.countTiles == 9){
        setMessage("It's a draw");
    }
    else if(square.innerText == "X" || square.innerText == "O"){
        setMessage("Pick an empty tile");
    }else{
    square.innerText = document.turn;
    switchTurn(document.turn);
    }
  }
  
  
  
  function switchTurn(turn){
  
      
      document.countTiles++;
      if(checkForWinner(document.turn)){
        setMessage("Congrats " + document.turn + " you won!");
      }
      else if (turn == "X"){
          document.turn = "O";
  
          if(document.countTiles == 9){
              setMessage("It's a draw");
          }
          else{
              setMessage(document.turn + "'s turn");
          }
      }
      else{
          document.turn = "X";
  
          if(document.countTiles == 9){
              setMessage("It's a draw");
          }
          else{
              setMessage(document.turn + "'s turn");
          }
      }
  }
  
  
  
  function setMessage(msg){
      
      document.getElementById('message').innerHTML = msg;
  }
  
  
  
  function returnBox(index){
      
      return document.getElementById("tile" + index).innerText;
  }
  
  
  
  function isRowFilled(tile1, tile2, tile3, move){
    
    var isFilled = false;
    if(returnBox(tile1) == move && returnBox(tile2) == move && returnBox(tile3) == move){
        isFilled = true;
        document.getElementById("tile" + tile1).style.color = "red";
        document.getElementById("tile" + tile2).style.color = "red";
        document.getElementById("tile" + tile3).style.color = "red";
    }
  
    return isFilled;
  }
  
  
  
  function checkForWinner(move){
   
    var isThereAWinner = false;
    if(isRowFilled (1, 2, 3, move) ||
       isRowFilled (4, 5, 6, move) ||
       isRowFilled (7, 8, 9, move) ||
       isRowFilled (1, 4, 7, move) ||
       isRowFilled (2, 5, 8, move) ||
       isRowFilled (3, 6, 9, move) ||
       isRowFilled (1, 5, 9, move) ||
       isRowFilled (3, 5, 7, move)
       ){
           isThereAWinner = true;
           document.winner = true;
       }
  
     return isThereAWinner;
  }
  
  
  
  
  
  

  
  function selectDifficulty() {
      
      var nope = document.getElementById('grid_main');
      var element = document.getElementById('grid_AI_setup');
      nope.style.display = "none";
      element.style.display = "grid";
  }
  
  
  document.difficulty; 
  
  
  
  
  
  function vsAI(){
      
      alert("Whoever goes first is selected randomly \n\nMaster level AI is impossible to beat \n\nIMPORTANT NOTE: If computers gets to start, give him some time to work out the move");
      var nope = document.getElementById('grid_AI_setup');
      var element = document.getElementById('grid_AI');
      nope.style.display = "none";
      element.style.display = "grid";
  
      document.playerName = "Player1";
      document.playerName = prompt("Enter your name: ");
      document.getElementById('player_name').innerHTML = document.playerName;
      document.difficulty = 3;
      startGameAI();
  }
  
  function vsAInoob(){
      
      alert("Whoever goes first is selected randomly \n\nBeginner level AI is really simple, so it is pretty easy to win\n\nIMPORTANT NOTE: If computers gets to start, give him some time to work out the move");
      var nope = document.getElementById('grid_AI_setup');
      var element = document.getElementById('grid_AI');
      nope.style.display = "none";
      element.style.display = "grid";
  
      document.playerName = "Player1";
      document.playerName = prompt("Enter your name: ");
      document.getElementById('player_name').innerHTML = document.playerName;
      document.difficulty = 1;
      startGameAI();
  }
  
  function vsAImiddle(){
      
      alert("Whoever goes first is selected randomly \n\nAmateur level AI plays different each turn, it might play very good or like a complete beginner \n\nIMPORTANT NOTE: If computers gets to start, give him some time to work out the move");
      var nope = document.getElementById('grid_AI_setup');
      var element = document.getElementById('grid_AI');
      nope.style.display = "none";
      element.style.display = "grid";
  
      document.playerName = "Player1";
      document.playerName = prompt("Enter your name: ");
      document.getElementById('player_name').innerHTML = document.playerName;
      document.difficulty = 2;
      startGameAI();
  }
  
  function backAI(){
      
    var nope = document.getElementById('grid_main');
    var element = document.getElementById('grid_AI');
    nope.style.display = "grid";
    element.style.display = "none";
  }
  
  function setMessageAI(msg){
      
      document.getElementById('messageAI').innerHTML = msg;
  }
  
  
    document.boardState  = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
  
    const HUMANVALUE = 1;
    const COMPUTERVALUE = -1;
  
    document.player;
    document.countTilesAI;
  
  
  
  
  
  
  function startGameAI(){
    for (var a = 0; a < 3; a++){
      for(var b = 0; b < 3; b++){
        document.getElementById("tileAI" + a + "-" + b).innerText = "";
        document.getElementById("tileAI" + a + "-" + b).style.color = "black";
      }
    }
  
    for (var j = 0; j < 3; j++){
      for(var k = 0; k < 3; k++){
        document.boardState[j][k] = 0;
      }
    }
  
    document.AIturn = "X";
    document.countTilesAI = 0;
  
  
    if (Math.floor(Math.random() * 2) === 0){
        document.player = "HUMAN";
    }
    else{
        document.player = "COMPUTER";
    }
  
    if(document.player === "HUMAN"){
        setMessageAI(document.playerName + ", you get to start");
    }
    else{
        setMessageAI("Computer gets to start");
  
        
        setTimeout(moveAI, 500);
    }
  }
  
  
  
  
  
  function checkForWinnerAI(board){
    //Function to check if there is a winner
  
    //Check horizontal
    for (var i = 0; i < 3; i++){
      if (board[i][0] !== 0 &&
        board[i][0] === board [i][1] &&
        board[i][0] === board [i][2]){
          return board[i][0];
        }
    }
  
    //Check vertical
    for (var j = 0; j < 3; j++){
      if (board[0][j] !== 0 &&
        board[0][j] === board [1][j] &&
        board[0][j] === board [2][j]){
          return board[0][j];
        }
    }
  
    //Check diagonal: Top left - bottom right;
    if (board[0][0] !== 0 &&
      board[0][0] === board [1][1] &&
      board[0][0] === board [2][2]){
        return board[0][0];
    }
  
    //Check diagonal: Top left - bottom right;
    if (board[2][0] !== 0 &&
      board[2][0] === board [1][1] &&
      board[2][0] === board [0][2]){
        return board[2][0];
    }
  
    for (var i = 0; i < 3; i++){
      for (var j = 0; j < 3; j++){
        if (board[i][j] === 0){
          return false;
        }
      }
    }
    return null;
  }
  
  function checkFull(board){
    for(var x = 0; x < 3; x++){
      for(var y = 0; y < 3; y++)
      if(board[x][y] === 0) return false;
    }
  
    return true;
  }
  
  
  
  
  
  function updateAI(square, row, column){
    let gameState = checkForWinnerAI(document.boardState);
  
    if(document.player != "HUMAN"){
      return;
    }
    if(gameState !== null && gameState !== false){
      if(gameState === HUMANVALUE){
        setMessageAI(document.playerName + ", you already won!");
      }
      else{
        setMessageAI("Computer already won");
      }
    }
    else if(checkFull(document.boardState)){
      setMessageAI("It's a draw. Start over!");
    }
    else if(document.boardState[row][column] !== 0){
        setMessageAI("Pick an empty tile");
    }
    else{
        square.innerText = document.AIturn;
        document.boardState[row][column] = HUMANVALUE;
        switchTurnAI(document.AIturn, document.player);
  
        //Uncomment the line below if you want the AI to be called with a timer
        //But don't forget to comment the other line!
        // No timer --> moveAI();
        // With timer --> BELOW
        setTimeout(moveAI, 500);
    }
  }
  
  //Function to switch the turn
  function switchTurnAI(turn, currentPlayer){
  
    document.countTilesAI++;
    let gameState = checkForWinnerAI(document.boardState);
  
    if(gameState !== null && gameState !== false){
      if(gameState === HUMANVALUE){
  
        //Check horizontal
        for (var i = 0; i < 3; i++){
          if (document.boardState[i][0] !== 0 &&
            document.boardState[i][0] === document.boardState [i][1] &&
            document.boardState[i][0] === document.boardState [i][2]){
              document.getElementById("tileAI" + i + "-" + 0).style.color = "red";
              document.getElementById("tileAI" + i + "-" + 1).style.color = "red";
              document.getElementById("tileAI" + i + "-" + 2).style.color = "red";
            }
        }
  
        //Check vertical
        for (var j = 0; j < 3; j++){
          if (document.boardState[0][j] !== 0 &&
            document.boardState[0][j] === document.boardState [1][j] &&
            document.boardState[0][j] === document.boardState [2][j]){
              document.getElementById("tileAI" + 0 + "-" + j).style.color = "red";
              document.getElementById("tileAI" + 1 + "-" + j).style.color = "red";
              document.getElementById("tileAI" + 2 + "-" + j).style.color = "red";
            }
        }
  
        //Check diagonal: Top left - bottom right;
        if (document.boardState[0][0] !== 0 &&
          document.boardState[0][0] === document.boardState [1][1] &&
          document.boardState[0][0] === document.boardState [2][2]){
            document.getElementById("tileAI" + 0 + "-" + 0).style.color = "red";
            document.getElementById("tileAI" + 1 + "-" + 1).style.color = "red";
            document.getElementById("tileAI" + 2 + "-" + 2).style.color = "red";
        }
  
        //Check diagonal: Top left - bottom right;
        if (document.boardState[2][0] !== 0 &&
          document.boardState[2][0] === document.boardState [1][1] &&
          document.boardState[2][0] === document.boardState [0][2]){
            document.getElementById("tileAI" + 2 + "-" + 0).style.color = "red";
            document.getElementById("tileAI" + 1 + "-" + 1).style.color = "red";
            document.getElementById("tileAI" + 0 + "-" + 2).style.color = "red";
        }
  
        setMessageAI("Congrats " + document.playerName +  " you won!");
        return;
      } else{
  
        //Check horizontal
        for (var i = 0; i < 3; i++){
          if (document.boardState[i][0] !== 0 &&
            document.boardState[i][0] === document.boardState [i][1] &&
            document.boardState[i][0] === document.boardState [i][2]){
              document.getElementById("tileAI" + i + "-" + 0).style.color = "red";
              document.getElementById("tileAI" + i + "-" + 1).style.color = "red";
              document.getElementById("tileAI" + i + "-" + 2).style.color = "red";
            }
        }
  
        //Check vertical
        for (var j = 0; j < 3; j++){
          if (document.boardState[0][j] !== 0 &&
            document.boardState[0][j] === document.boardState [1][j] &&
            document.boardState[0][j] === document.boardState [2][j]){
              document.getElementById("tileAI" + 0 + "-" + j).style.color = "red";
              document.getElementById("tileAI" + 1 + "-" + j).style.color = "red";
              document.getElementById("tileAI" + 2 + "-" + j).style.color = "red";
            }
        }
  
        //Check diagonal: Top left - bottom right;
        if (document.boardState[0][0] !== 0 &&
          document.boardState[0][0] === document.boardState [1][1] &&
          document.boardState[0][0] === document.boardState [2][2]){
            document.getElementById("tileAI" + 0 + "-" + 0).style.color = "red";
            document.getElementById("tileAI" + 1 + "-" + 1).style.color = "red";
            document.getElementById("tileAI" + 2 + "-" + 2).style.color = "red";
        }
  
        //Check diagonal: Top left - bottom right;
        if (document.boardState[2][0] !== 0 &&
          document.boardState[2][0] === document.boardState [1][1] &&
          document.boardState[2][0] === document.boardState [0][2]){
            document.getElementById("tileAI" + 2 + "-" + 0).style.color = "red";
            document.getElementById("tileAI" + 1 + "-" + 1).style.color = "red";
            document.getElementById("tileAI" + 0 + "-" + 2).style.color = "red";
        }
  
  
        setMessageAI("You were defeated. Start over!");
        return;
      }
    }
    else if(turn == "X"){
      document.AIturn = "O";
  
      if(checkFull(document.boardState)){ //Check if it is a draw
          setMessageAI("It's a draw. Start over!");
      }
      else{
        if(currentPlayer === "HUMAN"){
          document.player = "COMPUTER";
          setMessageAI("It's computer's turn");
        }
        else{
          document.player = "HUMAN";
          setMessageAI("It's your turn, " + document.playerName + "!");
        }
      }
    }
    else if (turn == "O"){
      document.AIturn = "X";
  
      if(checkFull(document.boardState)){ //Check if it is a draw
          setMessageAI("It's a draw. Start over!");
      }
      else{
        if(currentPlayer === "HUMAN"){
          document.player = "COMPUTER";
          setMessageAI("It's computer's turn");
        }
        else{
          document.player = "HUMAN";
          setMessageAI("It's your turn, " + document.playerName + "!");
        }
      }
    }
  }
  
  
  function minmax(newGrid, depth, player){
  
    const gameState = checkForWinnerAI(newGrid);
  
    if(gameState === false){
      const values = [];
  
      for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
          const gridCopy = _.cloneDeep(newGrid);
          if (gridCopy[i][j] !== 0) continue;
          gridCopy[i][j] = player;
          const value = minmax(gridCopy, depth + 1, (player === HUMANVALUE) ? COMPUTERVALUE : HUMANVALUE);
          values.push({
            cost: value,
            cell: {
              i: i,
              j: j
            }
          });
        }
      }
  
      if (player === COMPUTERVALUE){
        const max = _.maxBy(values, (v) => {
          return v.cost;
        });
        if (depth === 0) {
          return max.cell;
        } else {
          return max.cost;
        }
      } else {
        const min = _.minBy(values, (v) => {
          return v.cost;
        });
        if (depth === 0) {
          return min.cell;
        } else {
          return min.cost;
        }
      }
  
    } else if (gameState === null) {
      return 0;
    } else if (gameState === HUMANVALUE) {
      return depth - 10;
    } else {
      return 10 - depth;
    }
  }
  
  
  
  function minmaxnoob(newGrid, depth, player){
  
    const gameState = checkForWinnerAI(newGrid);
  
    if(gameState === false){
      const values = [];
  
      for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
          const gridCopy = _.cloneDeep(newGrid);
          if (gridCopy[i][j] !== 0) continue;
          gridCopy[i][j] = player;
          const value = minmaxnoob(gridCopy, depth + 1, (player === HUMANVALUE) ? COMPUTERVALUE : HUMANVALUE);
          values.push({
            cost: value,
            cell: {
              i: i,
              j: j
            }
          });
        }
      }
  
      if (player === HUMANVALUE){
        const max = _.maxBy(values, (v) => {
          return v.cost;
        });
        if (depth === 0) {
          return max.cell;
        } else {
          return max.cost;
        }
      } else {
        const min = _.minBy(values, (v) => {
          return v.cost;
        });
        if (depth === 0) {
          return min.cell;
        } else {
          return min.cost;
        }
      }
  
    } else if (gameState === null) {
      return 0;
    } else if (gameState === HUMANVALUE) {
      return depth - 10;
    } else {
      return 10 - depth;
    }
  }
  
  
  
  function callAI(){
    return minmax(document.boardState, 0, COMPUTERVALUE);
  }
  
  function callAInoob(){
    return minmaxnoob(document.boardState, 0, COMPUTERVALUE);
  }
  
  //Function for the AI move;
  function moveAI(){
    let gameState = checkForWinnerAI(document.boardState);
  
    if(document.player != "COMPUTER"){
      return;
    } else if (gameState !== null && gameState !== false){
      if(gameState === HUMANVALUE){
        setMessageAI(document.playerName + ", you already won!");
      } else{
        setMessageAI("Computer already won");
      }
    } else{
        
        if (document.difficulty === 1) {
        
            if (document.countTilesAI === 0){
                
                let startMove1 = Math.floor((Math.random() * 4) + 1);
                if (startMove1 === 1) {
                    document.boardState[0][0] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 0 + "-" + 0).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                } else if (startMove1 === 2) {
                    document.boardState[0][2] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 0 + "-" + 2).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                } else if (startMove1 === 3) {
                    document.boardState[2][0] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 2 + "-" + 0).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                } else if (startMove1 === 4) {
                    document.boardState[2][2] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 2 + "-" + 2).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                }
            } else {
                const noob = callAInoob();
                document.boardState[noob.i][noob.j] = COMPUTERVALUE;
                document.getElementById("tileAI" + noob.i + "-" + noob.j).innerText = document.AIturn;
                switchTurnAI(document.AIturn, document.player);
            }
        } else if (document.difficulty === 2) {
            
            if (document.countTilesAI === 0){
                
                let startMove2 = Math.floor((Math.random() * 4) + 1);
                if (startMove2 === 1) {
                    document.boardState[0][0] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 0 + "-" + 0).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                } else if (startMove2 === 2) {
                    document.boardState[0][2] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 0 + "-" + 2).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                } else if (startMove2 === 3) {
                    document.boardState[2][0] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 2 + "-" + 0).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                } else if (startMove2 === 4) {
                    document.boardState[2][2] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 2 + "-" + 2).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                }
            } else {
                let whatMove = Math.floor((Math.random() * 100) + 1);
                if (whatMove > 40) {
                    const move2 = callAI();
                    document.boardState[move2.i][move2.j] = COMPUTERVALUE;
                    document.getElementById("tileAI" + move2.i + "-" + move2.j).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                } else {
                    const movenoob2 = callAInoob();
                    document.boardState[movenoob2.i][movenoob2.j] = COMPUTERVALUE;
                    document.getElementById("tileAI" + movenoob2.i + "-" + movenoob2.j).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                }
            }
        } else if (document.difficulty === 3) {
            
            if (document.countTilesAI === 0){
                
                let startMove3 = Math.floor((Math.random() * 4) + 1);
                if (startMove3 === 1) {
                    document.boardState[0][0] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 0 + "-" + 0).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                } else if (startMove3 === 2) {
                    document.boardState[0][2] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 0 + "-" + 2).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                } else if (startMove3 === 3) {
                    document.boardState[2][0] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 2 + "-" + 0).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                } else if (startMove3 === 4) {
                    document.boardState[2][2] = COMPUTERVALUE;
                    document.getElementById("tileAI" + 2 + "-" + 2).innerText = document.AIturn;
                    switchTurnAI(document.AIturn, document.player);
                }
            } else {
                const move = callAI();
                document.boardState[move.i][move.j] = COMPUTERVALUE;
                document.getElementById("tileAI" + move.i + "-" + move.j).innerText = document.AIturn;
                switchTurnAI(document.AIturn, document.player);
            }
        }
    }
  }
  
  
  
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //Javascript for magic board game
  function magicBoard(){
    //Function to set up the game for Player1 vs Player2 mode
    var nope = document.getElementById('grid_main');
    var element = document.getElementById('grid_magic');
    nope.style.display = "none";
    element.style.display = "grid";
  
    var name1 = "Player1";
    var name2 = "Player2";
    var name3 = "Player3";
    name1 = prompt("Enter first player's name: ");
    name2 = prompt("Enter second player's name: ");
    name3 = prompt("Enter third player's name: ");
    document.getElementById('magic1').innerHTML = name1;
    document.getElementById('magic2').innerHTML = name2;
    document.getElementById('magic3').innerHTML = name3;
    magicStartGame();
  }
  
  
  
  function backMagic(){
      //Function to go back to the main screen when playing P1 vs P2 mode
    var nope = document.getElementById('grid_main');
    var element = document.getElementById('grid_magic');
    nope.style.display = "grid";
    element.style.display = "none";
  }
  
  
  
  function magicStartGame(){
    for(var i = 1; i <= 16; i++){
        document.getElementById("magictile" + i).innerText = "";
        document.getElementById("magictile" + i).style.color = "black";
    }
    document.turn = "X";
    document.winner = null;
    document.countTiles = 0;
    setMessageMagic(document.turn + " gets to start");
  }
  
  
  
  function updateMagic(square){
    if(document.winner === true){
        setMessageMagic(document.turn + " already won");
    }
    else if(document.countTiles == 16){
        setMessageMagic("It's a draw");
    }
    else if(square.innerText === "X" || square.innerText === "O" || square.innerText === "M"){
        setMessageMagic("Pick an empty tile");
    }else{
    square.innerText = document.turn;
    switchTurnMagic(document.turn);
    }
  }
  
  
  
  function switchTurnMagic(turn){
  
      //Function that switches turns
      document.countTiles++;
      if(checkForWinnerMagic(document.turn)){
        setMessageMagic("Congrats " + document.turn + " you won!");
      }
      else if (turn == "X"){
          document.turn = "O";
  
          if(document.countTiles == 16){
              setMessageMagic("It's a draw");
          }
          else{
              setMessageMagic(document.turn + "'s turn");
          }
      }
      else if (turn == "O"){
          document.turn = "M";
  
          if(document.countTiles == 16){
              setMessageMagic("It's a draw");
          }
          else{
              setMessageMagic(document.turn + "'s turn");
          }
      }
      else{
          document.turn = "X";
  
          if(document.countTiles == 16){
              setMessageMagic("It's a draw");
          }
          else{
              setMessageMagic(document.turn + "'s turn");
          }
      }
  }
  
  
  function setMessageMagic(msg){
      //Function to set the message
      document.getElementById('magicMessage').innerHTML = msg;
  }
  
  
  
  function returnBoxMagic(index){
      //Function to return a selected tile
      return document.getElementById("magictile" + index).innerText;
  }
  
  
  
  function isRowFilledMagic(tile1, tile2, tile3, move){
    //Function to check if any row is filled
    //At first, the value is false
    var isFilled = false;
    if(returnBoxMagic(tile1) == move && returnBoxMagic(tile2) == move && returnBoxMagic(tile3) == move){
        isFilled = true;
        document.getElementById("magictile" + tile1).style.color = "red";
        document.getElementById("magictile" + tile2).style.color = "red";
        document.getElementById("magictile" + tile3).style.color = "red";
    }
  
    return isFilled;
  }
  
  
  
  function checkForWinnerMagic(move){
    //Function to check if there is a winner
    var isThereAWinner = false;
    if(isRowFilledMagic (1, 2, 3, move) ||
       isRowFilledMagic (5, 6, 7, move) ||
       isRowFilledMagic (9, 10, 11, move) ||
       isRowFilledMagic (13, 14, 15, move) ||
       isRowFilledMagic (2, 3, 4, move) ||
       isRowFilledMagic (6, 7, 8, move) ||
       isRowFilledMagic (10, 11, 12, move) ||
       isRowFilledMagic (14, 15, 16, move) ||
       isRowFilledMagic (1, 5, 9, move) ||
       isRowFilledMagic (2, 6, 10, move) ||
       isRowFilledMagic (3, 7, 11, move) ||
       isRowFilledMagic (4, 8, 12, move) ||
       isRowFilledMagic (5, 9, 13, move) ||
       isRowFilledMagic (6, 10, 14, move) ||
       isRowFilledMagic (7, 11, 15, move) ||
       isRowFilledMagic (8, 12, 16, move) ||
       isRowFilledMagic (5, 10, 15, move) ||
       isRowFilledMagic (1, 6, 11, move) ||
       isRowFilledMagic (6, 11, 16, move) ||
       isRowFilledMagic (2, 7, 12, move) ||
       isRowFilledMagic (3, 6, 9, move) ||
       isRowFilledMagic (4, 7, 10, move) ||
       isRowFilledMagic (7, 10, 13, move) ||
       isRowFilledMagic (8, 11, 14, move)
       ){
           isThereAWinner = true;
           document.winner = true;
       }
  
     return isThereAWinner;
  }
  