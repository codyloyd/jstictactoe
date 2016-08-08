$(document).ready(function(){
  gameLoop()
})


function gameLoop(){
  renderGameBoard(gameArray,"#game1")
  checkGameWin()
  $(".square").click(function(){
    var i = $(this).attr("name")
    gameArray[i] = currentPlayer
    switchCurrentPlayer()
    gameLoop()
  })
}

var currentPlayer = "X"

var gameArray = ["","","","","","","","",""]
var solutionArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]


function checkGameWin() {
  for (var i = 0; i < solutionArray.length; i++) {
    var x = solutionArray[i][0]
    var y = solutionArray[i][1]
    var z = solutionArray[i][2]
    if(gameArray[x] == gameArray[y] && gameArray[y] == gameArray[z] && (gameArray[x] == "X" || gameArray[x] == "O" )) {
      alert("tacos!")
    }
  }
}

function switchCurrentPlayer(){
  if (currentPlayer == "X") {
    currentPlayer = "O"
  } else {
    currentPlayer = "X"
  }
}

function renderGameBoard(array, container){
  $(container).empty()
  for (var i = 0; i < array.length; i++) {
    $(container).append('<div class="square" name="'+i+'">'+array[i]+'</div>')
  }
}
