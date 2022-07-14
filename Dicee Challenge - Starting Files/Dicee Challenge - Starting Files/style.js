var randomNumber1 = Math.floor(Math.random()*6)+1;  //1-6
var randomDiceImages = "dice" + randomNumber1 + ".png" ;  //dice1.png - dice6.png
var randomImagesSource = "images/" + randomDiceImages ;  //images/dice1.png - images/dice6.png
var images1 = document.querySelectorAll("img")[0];
images1.setAttribute("src", randomImagesSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;  //1-6
var randomImagesSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);

//if player 1 win

if (randomNumber1 > randomNumber2)  {
    document.querySelector("h1").innerHTML = " &#128513 Player 1 Wins! Yeahhhh";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML= " &#128513 Player 2 Wins! Yeahhhh";
}
    else {
        document.querySelector("h1").innerHTML= " 	&#128514 Draw";
    }


    // refresh button

  