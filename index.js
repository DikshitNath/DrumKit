for (let i = 0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)  
}


function handleClick() {
  let buttonInnerHTML = this.innerHTML;
  
  makeSound(buttonInnerHTML); 

  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let drum1 = new Audio("sounds/tom-1.mp3");
      drum1.play();
      break;

    case "a":
      let drum2 = new Audio('sounds/tom-2.mp3');
      drum2.play();
      break;
    
    case "s":
      let drum3 = new Audio("sounds/tom-3.mp3");
      drum3.play();
      break;
      
    case "d":
      let drum4 = new Audio("sounds/tom-4.mp3");
      drum4.play();
       break;

    case "j":
      let drum5 = new Audio("sounds/crash.mp3");
      drum5.play();
      break;
      
    case "k":
      let drum6 = new Audio("sounds/kick-bass.mp3");
      drum6.play();
      break;
      
    case "l":
      let drum7 = new Audio("sounds/snare.mp3");
      drum7.play();
      break;
      
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation (currentKey) {
  let activeButton =  document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}