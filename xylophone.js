let wordNumber = 1;

function playSound(target) {
  new Audio(`sounds/${wordNumber}_${target.id}.mp3`).play();

  if (wordNumber < 5) {
    wordNumber += 1;
  } else {
    wordNumber = 1;
  }
}
