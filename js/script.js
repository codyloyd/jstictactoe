$(document).ready(function(){
  gameLoop()
})

function gameLoop(){
  renderGameBoard(gameArray,"#game1")
  $(".square").click(function(){
    var i = $(this).attr("name")
    gameArray[i] = "X"
    gameLoop()
  })
}

var gameArray = ["","","","","","","","",""]

function renderGameBoard(array, container){
  $(container).empty()
  for (var i = 0; i < array.length; i++) {
    $(container).append('<div class="square" name="'+i+'">'+array[i]+'</div>')
  }
}
