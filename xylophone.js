var wordNumber = 0;
var pitchID = 0;
var soundsPath = "sounds/";
var extension = ".mp3"

var manifest = [
    [ // You
        "1_1",
        "1_2",
        "1_3",
        "1_4",
        "1_5",
    ],
    [ // Are
        "2_1",
        "2_2",
        "2_3",
        "2_4",
        "2_5",
    ],
    [ // A
        "3_1",
        "3_2",
        "3_3",
        "3_4",
        "3_5",
    ],
    [ // Fucking
        "4_1",
        "4_2",
        "4_3",
        "4_4",
        "4_5",
    ],
    [ // Cunt
        "5_1",
        "5_2",
        "5_3",
        "5_4",
        "5_5",
    ]];

function player(pitchID) {
    new Audio(soundsPath + manifest[wordNumber][pitchID] + extension).play();

    if (wordNumber < 4) {
        wordNumber++;
    } else {
        wordNumber = 0;
    }
}

function playSound(target) {
    player(target.id);
}

window.onload = function() {
    document.addEventListener('keydown', function (event) {
        player(event.keyCode - 49);
    });
}