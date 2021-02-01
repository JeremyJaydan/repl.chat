
const iframe = document.querySelector("iframe");
if(iframe){
  iframe.width = window.innerWidth;
  iframe.height = iframe.parentNode.offsetHeight;
}

const form = document.querySelector("form");
const username = form.querySelector("#username");
const message = form.querySelector("#message");

let sending = false;

function sendMessage(username, message){
  console.log({username, message});
  if(!sending){
    sending = true;
  	fetch(`https://blog.repl.it/@${username}: ${message}`)
      .then(() => (sending = false))
      .catch(() => (sending = false))
  }
}

form.addEventListener("submit", event => {
  event.preventDefault();
  sendMessage(username.value, message.value);
  message.value = "";
});