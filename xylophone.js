var wordNumber = 0;
var soundsPath = "sounds/";
var extension = ".mp3"

function playSound(target) {
    new Audio(soundsPath + (wordNumber + 1) + "_" + (target.id + 1) + extension).play();

    if (wordNumber < 4) {
        wordNumber++;
    } else {
        wordNumber = 0;
    }
}
