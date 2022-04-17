// genetrating a random number
var randomNum1=Math.floor(Math.random()*6)+1;
var randomNum2=Math.floor(Math.random()*6)+1;


// chnaging the pictures
document.querySelector(".img1").setAttribute("src","images/dice"+randomNum1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNum2+".png");

// choosing a winner
if(randomNum1>randomNum2){
  document.querySelector("h1").innerHTML="  🚩 Player 1 wins";
}
else if (randomNum2>randomNum1){
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}
