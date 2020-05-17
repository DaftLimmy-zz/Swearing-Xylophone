var wordNumber = 1;
var soundsPath = "sounds/";
var extension = ".mp3"

function playSound(event) {
    new Audio(soundsPath + wordNumber + '_' + event.target.id + extension).play();

    if (wordNumber < 5) {
        wordNumber++;
    } else {
        wordNumber = 1;
    }
}
