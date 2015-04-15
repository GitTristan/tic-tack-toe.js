$(document).ready(function () {

	var playerTurn = "player1";

  var winningCombo = [["box_1", "box_2", "box_3"],
      					 ["box_4", "box_5", "box_6"],
      			 		 ["box_7", "box_8", "box_9"],
      				 	 ["box_1", "box_4", "box_7"],
      				 	 ["box_2", "box_5", "box_8"],
      				   ["box_3", "box_6", "box_9"],
      				   ["box_1", "box_5", "box_9"],
      				   ["box_3", "box_5", "box_7"]];

  var game = winningCombo;

	$(".box").on("click", function() {
   if (playerTurn === "player1") {
  	$(this).text("X");
    playerTurn = "player2";
   } else {
    $(this).text("O");
    playerTurn = "player1";
    }
  });
  
