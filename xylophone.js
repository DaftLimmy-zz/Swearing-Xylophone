let wordNumber = 1;
const soundsPath = 'sounds/';
const extension = '.mp3';

function playSound(target) {
  new Audio(`${soundsPath + wordNumber}_${target.id + extension}`).play();

  if (wordNumber < 5) {
    wordNumber += 1;
  } else {
    wordNumber = 1;
  }
}
