function check(){
  let userInput = document.getElementById('gameInput').value;
  let textHolder = document.getElementsByClassName('gameScroll')[0];
  let userText = document.createElement('p');
  userText.setAttribute('class','gameTextU');
  userText.textContent = "> "+ userInput;
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

let form = document.getElementsByClassName("gameForm")[0];
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);

function createEvent(txt,holder){
  let text = document.createElement('p');
  text.setAttribute('class','gameTextGame');
  text.innerHTML = txt;
  holder.appendChild(text);
  typewriter = setupTypewriter(text);
  typewriter.type();
}


function setupTypewriter(t) {
  var HTML = t.textContent;
  t.textContent = "";
  var cursorPosition = 0,
    tag = "",
    writingTag = false,
    tagOpen = false,
    typeSpeed = 100,
    tempTypeSpeed = 0;
    //end of setting up typewriter

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
