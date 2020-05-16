var wordNumber = 0;
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


function playSound(target) {
  new Audio(soundsPath + manifest[wordNumber][target.id] + extension).play();
}

function chorus() {
  wordNumber = 0;
  playSound({id: 1});
  playSound({id: 2});
  playSound({id: 3});
  
  setTimeout(one, 1000);
}

function one() {
  wordNumber = 1;
  playSound({id: 0});
  playSound({id: 4});
  
  setTimeout(two, 500);
}

function two() {
  wordNumber = 2;
  playSound({id: 1});
  playSound({id: 4});
  
  setTimeout(three, 500);
}

function three() {
  wordNumber = 3;
  playSound({id: 1});
  playSound({id: 3});
  
  setTimeout(four, 500);
}

function four() {
  wordNumber = 3;
  playSound({id: 2});
  playSound({id: 4});
  
  setTimeout(five, 500);
}

function five() {
  wordNumber = 3;
  playSound({id: 1});
  playSound({id: 3});
  
  setTimeout(six, 500);
}

function six() {
  wordNumber = 3;
  playSound({id: 2});
  playSound({id: 4});
  
  setTimeout(seven, 500);
}

function seven() {
  wordNumber = 4;
  playSound({id: 0});
  playSound({id: 1});
  playSound({id: 4});

}

