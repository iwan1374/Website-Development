/*
// Create DOM for the  button got clicked and it action
document.querySelector(".drum")[1].addEventListener("click", handleClick);

// function that will do the action when button got clicked
function handleClick(){
  alert("I got Clicked!");
}
*/

// -- Detecting Button Pressed --

//Declare all the button .drum into the variable
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Do for loop so that the button will loop from 1 to 7 button.
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // Instatiate object this.innerHTML into variable buttonInnerHTML
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}


// --- Detecting Keyboard Pressed ---
document.addEventListener("keydown",function(event){
    console.log(event.key); // when keyboard press it will show on console which keyboard is pressed
    makeSound(event.key); // when keyboard press it will make sound
    buttonAnimation(event.key);
});


function makeSound(key){

  // Create IF/Else/Switch for each button and with their sound
  switch (key) {
    case "w":
      var tom1Sound = new Audio("sounds/tom-1.mp3");
      tom1Sound.play();
      break;
    case "a":
      var tom2Sound = new Audio("sounds/tom-2.mp3");
      tom2Sound.play();
      break;
    case "s":
      var tom3Sound = new Audio("sounds/tom-3.mp3");
      tom3Sound.play();
      break;
    case "d":
      var tom4Sound = new Audio("sounds/tom-4.mp3");
      tom4Sound.play();
      break;
    case "j":
      var snareSound = new Audio("sounds/snare.mp3");
      snareSound.play();
      break;
    case "k":
      var crashSound = new Audio("sounds/crash.mp3");
      crashSound.play();
      break;
    case "l":
      var kickSound = new Audio("sounds/kick-bass.mp3");
      kickSound.play();
      break;

    default:
      console.log();
  }
}

// Function when to do button animation when it was pressed
function buttonAnimation(currentKey){
  //assign the querySelector to variable active button
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed"); // pressed is from the styles.css class .pressed

  setTimeout(function(){ // after 100ms the button will be back to normal
    activeButton.classList.remove("pressed");
  },100);

}
