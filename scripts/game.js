//prevents form from refreshing on submit
let form = document.getElementsByClassName("gameForm")[0];
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);
let wait = false;
let foundEndings = 0;
let helpResponse = false;
let feelAround = true;

//immediate text that happens
window.onload = onloadText();

function onloadText(){
  if (wait == false) {
    let userInput = document.getElementById('gameInput').value;
    let textHolder = document.getElementsByClassName('gameScroll')[0];
    let firstP = "> Hello? Is anybody there?";
    createEvent(firstP,textHolder);
    setTimeout(function(){
      if (wait ==false){
        let secondP = "> My name is Carol Davis. Im 23. I don't know where I am or how I got here, but I think I've been kidnapped."
        createEvent(secondP, textHolder);
      }},4500);
    setTimeout(function(){
      if (wait==false){
        let thirdP = "> I'm so scared, its so dark..."
        createEvent(thirdP, textHolder);
      }},13000);
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
    //main story line is written first
    if (editedInput == "hello" || editedInput == "hello!" || editedInput == "hey" || editedInput == "hello?"){
      let greeting = "> Oh thank god someone's here! Can you help me out?";
      let greeting2 = "> You have the same number as my mom used to. Thats the only number I can remember, so I'm sorry for bothering you";
      createEvent(greeting,textHolder);
      setTimeout(function(){createEvent(greeting2,textHolder),wait = true},5000);
    }
    else if (editedInput == "yes"||editedInput == "yeah" || editedInput == "yea" || editedInput == "sure"){
      let yesText = "> Thank god! I was so worried you wouldn't respond";
      let yesText2 = "> Any advice on what to do rn?";
      helpResponse = true;
      createEvent(yesText,textHolder);
      setTimeout(function(){createEvent(yesText2,textHolder),wait = true},5000);
    }
    // below this is what happens if they say no to first question
    else if (editedInput == "no"|| editedInput == "nah" || editedInput == "nope"){
      let allGameText = document.getElementsByClassName('gameTextGame');
      let i;
      if (helpResponse == false){
        let noText = "> No? Really? Ok...";
        let noText2 = "> I guess you have more important things to do...";
        let noText3 ="> I guess this is goodbye :(";
        let endingText = "> Type restart to start this story again or type back to go back to the title screen.";
        createEvent(noText,textHolder);
        setTimeout(function(){createEvent(noText2,textHolder)},3000);
        setTimeout(function(){createEvent(noText3,textHolder)},7000);
        setTimeout(function(){displayEnding(foundEndings,textHolder)},10000);
        if (foundEndings <= 5) {
          foundEndings += 1;
        }
        setTimeout(function(){createEventMotion(endingText,textHolder)},11000);
      }
      else{
        let noTextAlt = "> too late! you already agreed!"
        createEvent(noTextAlt,textHolder);
      }
    }
    else if(helpResponse == true && editedInput == "feel around"){
      let feelText = "> Ok, give me a second..."
      let feelText2 = "> Oh, so I think there is some stuff on the floor down here..."
      let feelText3 = "> There's a can, some water, umm.. wait, I think this is my wallet!"
      let foundText = " Found: Can of Beans, Water, Wallet"
      feelAround = true;
      createEvent(feelText,textHolder);
      setTimeout(function(){createEvent(feelText2,textHolder)},3000);
      setTimeout(function(){createEvent(feelText3,textHolder)},8500);
      setTimeout(function(){createEventMotion(foundText,textHolder)},14000);
    }
    else if(feelAround == true && editedInput == "search wallet" || feelAround == true && editedInput == "open wallet"|| feelAround == true && editedInput == "look through wallet"){
      let phoneText = "> Alright, I'll feel it out";
      let phoneText2 = "> Oh! I think I left my phone in here!"
      let acquiredText = "Aquired: Phone";
      createEvent(phoneText,textHolder);
      setTimeout(function(){createEvent(phoneText2,textHolder)},3000);
      setTimeout(function(){createEventMotion(acquiredText,textHolder)},7000);
    }
    else if (feelAround == true && editedInput == "eat beans"|| feelAround == true && editedInput == "beans"){
      let beanText = "> I don't have a can opener...";
      let beanText2 = "> Well, I hope I'm not in here long enough that that matters";
      createEvent(beanText,textHolder);
      setTimeout(function(){createEvent(beanText2,textHolder)},3000);
    }
    else if(feelAround == true && editedInput == "drink water" || editedInput =="water"){
      let waterText = "> Ok, if you really think so...";
      let drinking = "> glug glug glug"
      let waterText2 = "> I'm not feeling so good..."
      let waterText3 = "> ...mom?"
      let endingText = "> Type restart to start this story again or type back to go back to the title screen.";
      createEvent(waterText,textHolder);
      setTimeout(function(){createEventMotion(drinking,textHolder)},3000);
      setTimeout(function(){createEvent(waterText2,textHolder)},7000);
      setTimeout(function(){createEvent(waterText3,textHolder)},10000);
      setTimeout(function(){displayEnding(foundEndings,textHolder)},13000);
      if (foundEndings <= 5) {
        foundEndings += 1;
      }
        setTimeout(function(){createEventMotion(endingText,textHolder)},15000);
    }
    //flavor responses below
    else if(editedInput == "look around" || editedInput == "look"){
      let text = "> I can't see anything! The room is literally pitch black";
      createEvent(text,textHolder);
    }
    else if(editedInput == "help"){
        let helpContent = "> Help? Um, I'm not sure what I can do, but good luck I guess!";
        createEvent(helpContent,textHolder);
    }
    else if(editedInput == "how are you?"|| editedInput == "how are you"|| editedInput == "how r u" || editedInput == "how r u?"){
      let flavor = "> I'm good!";
      let flavor2 = "> Well, actually I'm not, but I guess I'm fine for the circumstances";
      createEvent(flavor,textHolder);
      setTimeout(function(){createEvent(flavor2,textHolder)},2000);
    }
    else if (editedInput == "cry"|| editedInput == "scream" || editedInput == "breakdown"|| editedInput == "freak out"){
      let unhelpfulText = "> Um, I'm not sure if that would help"
      createEvent(unhelpfulText,textHolder);
    }
    //functionality responses below
    else if(editedInput == "back"){
      window.location.href = "../";
      //this is essentially the back button lol
    }
    else if(editedInput == "restart"){
      textHolder.innerHTML = "";
      wait = false;
      helpResponse = false;
      onloadText();
      //restarts the game, but shouldn't restart the ending counter (untested)
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
      tempTypeSpeed = 50 + 50;
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
