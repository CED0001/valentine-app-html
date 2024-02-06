console.log("hello world!");
var yesbutton = document.getElementById("yesBtn");
var noBtn = document.getElementById("noBtn");
var willyoubeText = document.getElementById("willyoube");
var pictureDiv = document.getElementById("pic");
var count = 0;

const phrases = [
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "Maybe you'll feel different tomorrow",
];

yesbutton.addEventListener("click", modifyPicture, false);
noBtn.addEventListener("click", noBtnEvent, false);

function modifyPicture() {
  willyoubeText.innerText = "Ok yay!!";
  pictureDiv.innerHTML =
    '<img class="h-[200px]"src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"/>';
}

function noBtnEvent() {
  noBtn.innerText = phrases[count];

  if (phrases.length - 1 > count) {
    count++;
  }
}
