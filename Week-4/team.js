 function startGame() {

     clearBox("col border-r");
     clearBox("col");

     if (Math.random() < 0.5) {
         document.turn = "X";
     } else {
         document.turn = "O";
     }
 }