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
      let text = document.createElement('p');
      text.setAttribute('class','gameTextGame');
      text.textContent = helpContent;
      textHolder.appendChild(text);
  }
}

let form = document.getElementsByClassName("gameForm")[0];
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener('submit', handleForm);
