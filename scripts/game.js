//prevents form from refreshing on submit
let form = document.getElementsByClassName("gameForm")[0];
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);

//immediate text that happens
window.onload = function() {
  let userInput = document.getElementById('gameInput').value;
  let textHolder = document.getElementsByClassName('gameScroll')[0];
  let firstP = "> Hello? Is anybody there?";
  createEvent(firstP,textHolder);
  let secondP = "> My name is Russel Kirk. Im 27. I don't know where I am, but I think I'm trapped."
  setTimeout(function(){createEvent(secondP, textHolder)},3000);
  let thirdP = "> Can you help me?"
  setTimeout(function(){createEvent(thirdP, textHolder)},10000);
}

//handles all inputted text
function check(){
  let userInput = document.getElementById('gameInput').value;
  let textHolder = document.getElementsByClassName('gameScroll')[0];
  //displays the user input
  let userText = document.createElement('p');
  userText.setAttribute('class','gameTextU');
  userText.textContent = "> "+ userInput;
  //checks if what the user inputted does anything
  textHolder.appendChild(userText);
  editedInput = userInput.toLowerCase();
  document.getElementById('gameInput').value = "";
  if (editedInput == "help"){
      let helpContent = "> help? help yourself!";
      createEvent(helpContent,textHolder);
  }
  else{
    let confusedText = "> Sorry, I didn't get that.";
    createEvent(confusedText, textHolder);
  }
}

//adds all event text from above into p tags
function createEvent(txt,holder){
  let text = document.createElement('p');
  text.setAttribute('class','gameTextGame');
  text.innerHTML = txt;
  holder.appendChild(text);
  typewriter = setupTypewriter(text);
  typewriter.type();
}

//entire typewriter effect function
function setupTypewriter(t) {
  var HTML = t.textContent;
  t.textContent = "";
  var cursorPosition = 0,
    tag = "",
    writingTag = false,
    tagOpen = false,
    typeSpeed = 100,
    tempTypeSpeed = 0;
  var type = function() {
    if (HTML[cursorPosition] === " ") {
      tempTypeSpeed = 0;
    } else {
      tempTypeSpeed = Math.random() * typeSpeed + 50;
    }
    t.innerHTML += HTML[cursorPosition];
    cursorPosition += 1;
    if (cursorPosition < HTML.length) {
      setTimeout(type, tempTypeSpeed);
    }
  };
  return {
    type: type
  };
}
