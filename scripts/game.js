//prevents form from refreshing on submit
let form = document.getElementsByClassName("gameForm")[0];
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);
let wait = false;
let foundEndings = 0;

//immediate text that happens
window.onload = function() {
  if (wait == false) {
    let userInput = document.getElementById('gameInput').value;
    let textHolder = document.getElementsByClassName('gameScroll')[0];
    let firstP = "> Hello? Is anybody there?";
    createEvent(firstP,textHolder);
    setTimeout(function(){
      if (wait ==false){
        let secondP = "> My name is Carol Davis. Im 23. I don't know where I am or how I got here, but I think I've been kidnapped."
        createEvent(secondP, textHolder);
      }},3000);
    setTimeout(function(){
      if (wait==false){
        let thirdP = "> I'm so scared, its so dark..."
        createEvent(thirdP, textHolder);
      }},12000);
    setTimeout(function(){
      if(wait==false){
        let fourthP = "> Can you help me? Please?"
        createEvent(fourthP, textHolder)
        wait = true;
      }},15000);
  }
}

//handles all inputted text
function check(){
  if (wait == true){
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
    if (editedInput == "hello" || editedInput == "hello!" || editedInput == "hey" || editedInput == "hello?"){
      let greeting = "> Oh thank god someone's here! can you help me out?";
      let greeting2 = "> You have the same number as my mom used to. Thats the only number I can remember, so I'm sorry for bothering you";
      createEvent(greeting,textHolder);
      setTimeout(function(){createEvent(greeting2,textHolder),wait = true},5000);
    }
    else if (editedInput == "yes"||editedInput == "yeah" || editedInput == "yea" || editedInput == "sure" && helpResponse == false){
      let yesText = "> Thank god! I was so worried you wouldn't respond";
      let yesText2 = "> Any advice on what to do rn?"
      createEvent(yesText,textHolder);
      setTimeout(function(){createEvent(yesText2,textHolder),wait = true},4000);
    }
    else if (editedInput == "no"|| editedInput == "nah" || editedInput == "nope"){
      let allGameText = document.getElementsByClassName('gameTextGame');
      let i;
      let helpResponse = false;
      for (i = 0; i < allGameText.length; i++){
        if (allGameText[i].textContent == "> Any advice on what to do rn?"){
          helpResponse = true;
        }
      }
      if (helpResponse == false){
        let noText = "> No? Really? Ok..."
        let noText2 = "> I guess you have more important things to do..."
        let noText3 ="> I guess this is goodbye :("
        let endingText = "> Type restart to start this story again or type back to go back to the title screen."
        createEvent(noText,textHolder);
        setTimeout(function(){createEvent(noText2,textHolder),wait = true},3000);
        setTimeout(function(){createEvent(noText3,textHolder),wait = true},7000);
        setTimeout(function(){displayEnding(foundEndings,textHolder),wait = true},9000);
        setTimeout(function(){createEventMotion(endingText,textHolder),wait = true},11000);
      }
      else{
        let noTextAlt = "too late! you already agreed!"
        createEvent(noTextAlt,textHolder);
      }
    }
    else if(editedInput == "help"){
        let helpContent = "> help? help yourself!";
        createEvent(helpContent,textHolder);
    }
    else if(editedInput == "back"){
      window.location.href = "../";
      //this is essentially the back button lol
    }
    else if(editedInput == "restart"){
      // reset();
      //make this do something
    }
    else{
      let confusedText = "> Sorry, I didn't get that.";
      createEvent(confusedText, textHolder);
    }
  }
  else{
    let userInput = document.getElementById('gameInput').value;
    let textHolder = document.getElementsByClassName('gameScroll')[0];
    let editedInput = userInput.toLowerCase();
    if (editedInput == "skip"){
      //displays the skip
      let userText = document.createElement('p');
      userText.setAttribute('class','gameTextU');
      userText.textContent = "> "+ userInput;
      textHolder.appendChild(userText);
      document.getElementById('gameInput').value = "";
      wait = true;
    }
    else{
      document.getElementById('gameInput').value = "";
    }
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

//displays motion text/ implied text
function createEventMotion(txt,holder){
  let text = document.createElement('p');
  text.setAttribute('class','gameTextMotion');
  text.innerHTML = txt;
  holder.appendChild(text);
  typewriter = setupTypewriter(text);
  typewriter.type();
}

//displays when ending is found
function displayEnding(endings,holder){
  endings++;
  let text = document.createElement('p');
  text.setAttribute('class','gameTextEnding');
  text.textContent = "<Ending " + endings.toString() + " of 5>";
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
