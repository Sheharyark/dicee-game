var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+randomNumber1+".png";
var randomDiceSource ="images/"+randomDiceImage;

var image1 = document.querySelector(".img1");
image1.setAttribute("src",randomDiceSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+randomNumber2+".png";
var randomDiceSource ="images/"+randomDiceImage;

var image2 = document.querySelector(".img2");
image2.setAttribute("src",randomDiceSource);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "player 2 wins";
}
else {
document.querySelector("h1").innerHTML = "Draw!"
}
