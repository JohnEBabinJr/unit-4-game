var crystalnumbers = [3, 5, 7, 10];
var targetnumber =0;
var currenttotal;
var wins = 0;
var losses = 0;

function shuffle (array) {
    var i = 0
      , j = 0
      , temp = null
  
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  };

function resetgame() {
    targetnumber = Math.floor(Math.random() * (51)) + 50;
    $(".rand").text(targetnumber);
    currenttotal = 0;
    $(".total").text(currenttotal);
    $(".wins").text(wins);
    $(".losses").text(losses);
    shuffle(crystalnumbers);
    $(".blue").attr("data-crystalvalue", crystalnumbers[0]);
    $(".green").attr("data-crystalvalue", crystalnumbers[1]);
    $(".purple").attr("data-crystalvalue", crystalnumbers[2]);
    $(".red").attr("data-crystalvalue", crystalnumbers[3]);
};

function checkwin() {
    if (currenttotal === targetnumber) {
        alert("You win!");
        wins++;
        resetgame();
    }

    else if (currenttotal >= targetnumber) {
        alert("You lose!!");
        losses++;
        resetgame();
    }
};

resetgame();

$(".crystal").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    currenttotal += crystalValue;
    $(".total").text(currenttotal);
    checkwin();
});

