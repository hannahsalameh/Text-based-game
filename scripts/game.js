//prevents form from refreshing on submit
let form = document.getElementsByClassName("gameForm")[0];
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);

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
  if (editedInput == "help"){
      let helpContent = "> help? help yourself!";
      createEvent(helpContent,textHolder);
  }
  else{
    let confusedText = "> I didn't get that,  could you try something else?";
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
