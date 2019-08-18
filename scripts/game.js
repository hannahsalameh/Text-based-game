function check(){
  let userInput = document.getElementById('gameInput').value;
  let textHolder = document.getElementsByClassName('gameScroll')[0];
  let userText = document.createElement('p');
  userText.setAttribute('class','gameTextU');
  userText.textContent = "> "+ userInput;
  textHolder.appendChild(userText);
  if (userInput == "help"){
      let helpContent = "> help? help yourself!";
      console.log(helpContent);
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

function typeWriter(txt,element){
  let i = 0;
  console.log(txt);
  if (i < txt.length){
    element.textContent += txt.charAt(i);
    i++;
  }
  setTimeout(typeWriter, 50);
}
// function typeWriter(helpContent,element){
//   let i = 0;
//   let speed = 50;
//   if (i < helpContent.length){
//     element.textContent += helpContent.charAt(i);
//     i++;
//     setTimeout(typeWriter,speed);
//   }
// }
