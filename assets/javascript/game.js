
var rand = 0;
var word = "";
var numWrong = 0;
var numRight = 0;
var wordLength = 0;
var numChar = 0;
var sports = ["baseball, football, soccer, cricket, polo"];
var places = ["Texas, England, Japan"];
var foods = ["corn, carrots, chicken"];



function sp() {
    document.getElementById('introPage').style.display = "none";
    document.getElementById('singlePage').style.display = "block";
}

function sport() {
    rand = Math.floor(Math.random() * sports.length);
    word = sports[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Sports";
    hangman();
}

function place() {
    rand = Math.floor(Math.random() * places.length);
    word = places[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Places";
    hangman();
}

function food() {
    rand = Math.floor(Math.random() * foods.length);
    word = foods[rand];
    document.getElementById('singlePage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "Foods";
    hangman();
}

// learn more about canvas
// platform
function countChars(countfrom, displayto) {
    var len = document.getElementById(countfrom).value.length;
    document.getElementById(displayto).innerHTML = len;
}

function draw() {
    var ctx = document.getElementById("hangman").getContext('2d');
    ctx.fillStyle = "white";
    ctx.lineWidth = 3;
    ctx.fillRect(0, 0, 300, 300);
    ctx.beginPath(); //vertical bar
    ctx.moveTo(50, 270);
    ctx.lineTo(50, 25);
    ctx.stroke();
    ctx.beginPath(); //vertical bar long piece
    ctx.moveTo(65, 270);
    ctx.lineTo(65, 85);
    ctx.stroke();
    ctx.beginPath(); //vertical bar short piece
    ctx.moveTo(65, 64);
    ctx.lineTo(65, 40);
    ctx.stroke();
    ctx.beginPath(); //horizontal bar
    ctx.moveTo(49, 25);
    ctx.lineTo(175, 25);
    ctx.stroke();
    ctx.beginPath(); //horizontal bar short piece
    ctx.moveTo(49, 40);
    ctx.lineTo(86, 40);
    ctx.stroke();
    ctx.beginPath(); //horizontal bar long piece
    ctx.moveTo(106, 40);
    ctx.lineTo(175, 40);
    ctx.stroke();
    ctx.beginPath(); //small vertical bar
    ctx.moveTo(173, 25);
    ctx.lineTo(173, 40);
    ctx.stroke();
    ctx.beginPath(); //cross bar
    ctx.moveTo(50, 80);
    ctx.lineTo(100, 25);
    ctx.stroke();
    ctx.beginPath(); //cross bar
    ctx.moveTo(60, 90);
    ctx.lineTo(111, 35);
    ctx.stroke();
    ctx.beginPath(); //cross bar
    ctx.moveTo(50, 80);
    ctx.lineTo(60, 90);
    ctx.stroke();
    ctx.beginPath(); //cross bar
    ctx.moveTo(100, 25);
    ctx.lineTo(111, 35);
    ctx.stroke();
    ctx.beginPath(); //ground
    ctx.moveTo(35, 270);
    ctx.lineTo(265, 270);
    ctx.stroke();
    ctx.beginPath(); //noose
    ctx.moveTo(150, 40);
    ctx.lineTo(150, 80);
    ctx.stroke();
    var cntx = document.getElementById("homeHangman").getContext('2d');
    cntx.fillStyle = "white";
    cntx.lineWidth = 3;
    cntx.fillRect(0, 0, 300, 300);
    cntx.beginPath(); //vertical bar
    cntx.moveTo(50, 270);
    cntx.lineTo(50, 25);
    cntx.stroke();
    cntx.beginPath(); //vertical bar long piece
    cntx.moveTo(65, 270);
    cntx.lineTo(65, 85);
    cntx.stroke();
    cntx.beginPath(); //vertical bar short piece
    cntx.moveTo(65, 64);
    cntx.lineTo(65, 40);
    cntx.stroke();
    cntx.beginPath(); //horizontal bar
    cntx.moveTo(49, 25);
    cntx.lineTo(175, 25);
    cntx.stroke();
    cntx.beginPath(); //horizontal bar short piece
    cntx.moveTo(49, 40);
    cntx.lineTo(86, 40);
    cntx.stroke();
    cntx.beginPath(); //horizontal bar long piece
    cntx.moveTo(106, 40);
    cntx.lineTo(175, 40);
    cntx.stroke();
    cntx.beginPath(); //small vertical bar
    cntx.moveTo(173, 25);
    cntx.lineTo(173, 40);
    cntx.stroke();
    cntx.beginPath(); //cross bar
    cntx.moveTo(50, 80);
    cntx.lineTo(100, 25);
    cntx.stroke();
    cntx.beginPath(); //cross bar
    cntx.moveTo(60, 90);
    cntx.lineTo(111, 35);
    cntx.stroke();
    cntx.beginPath(); //cross bar
    cntx.moveTo(50, 80);
    cntx.lineTo(60, 90);
    cntx.stroke();
    cntx.beginPath(); //cross bar
    cntx.moveTo(100, 25);
    cntx.lineTo(111, 35);
    cntx.stroke();
    cntx.beginPath(); //ground
    cntx.moveTo(35, 270);
    cntx.lineTo(265, 270);
    cntx.stroke();
    cntx.beginPath(); //noose
    cntx.moveTo(150, 40);
    cntx.lineTo(150, 80);
    cntx.stroke();
}

// rework to make animation single player relevant
function hang() {
    var ctx = document.getElementById("hangman").getContext('2d');
    if (numWrong == 1) {
        ctx.beginPath(); //head
        ctx.arc(150, 100, 20, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath(); //left eye
        ctx.arc(143, 95, 3.5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath(); //right eye
        ctx.arc(157, 95, 3.5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath(); //mouth
        ctx.arc(150, 103, 9, 0, Math.PI);
        ctx.stroke();
    }
    if (numWrong == 2) {
        ctx.beginPath(); //body
        ctx.moveTo(150, 120);
        ctx.lineTo(150, 190);
        ctx.stroke();
    }
    if (numWrong == 3) {
        ctx.fillStyle = "white";
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //straight mouth
        ctx.moveTo(140, 108);
        ctx.lineTo(160, 108);
        ctx.stroke();
        ctx.beginPath(); //right arm
        ctx.moveTo(150, 135);
        ctx.lineTo(180, 160);
        ctx.stroke();
    }
    if (numWrong == 4) {
        ctx.beginPath(); //left arm
        ctx.moveTo(150, 135);
        ctx.lineTo(120, 160);
        ctx.stroke();
    }
    if (numWrong == 5) {
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //sad mouth
        ctx.arc(150, 112, 9, 0, Math.PI, true);
        ctx.stroke();
        ctx.beginPath(); //right leg
        ctx.moveTo(149, 188);
        ctx.lineTo(180, 230);
        ctx.stroke();
    }
    if (numWrong == 6) {
        ctx.beginPath(); //left leg
        ctx.moveTo(151, 188);
        ctx.lineTo(120, 230);
        ctx.stroke();
    }
}

function hangman() {
    var x = word.length;
    var y = x - 1;
    var spaces = 0;
    var validChar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "-", "'");
    for (z = 0; z < word.length; z++) {
        var letter = word.substring(y, x);
        if (validChar.indexOf(letter) > -1) {
            x--;
            y--;
        }
    }
    x = word.length;
    y = x - 1;
    while (x > 0) {
        numChar++;
        var letter = word.substring(y, x);
        if (letter === " ") {
            document.getElementById('letter' + x).innerHTML = "&nbsp;";
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('letter' + x).style.display = "block";
            document.getElementById('underline' + x).style.display = "block";
            spaces++;
        }
        else if (letter === "-" || letter === "'") {
            document.getElementById('letter' + x).innerHTML = letter;
            document.getElementById('letter' + x).style.display = "block";
            document.getElementById('underline' + x).style.display = "block";
            spaces++;
        }
        else {
            document.getElementById('letter' + x).innerHTML = letter;
            document.getElementById('letter' + x).style.visibility = "hidden";
            document.getElementById('underline' + x).style.display = "block";
            document.getElementById('underline' + x).style.borderBottom = "3px solid black";
        }
        x--;
        y--;
    }
    phraseLength = word.length - spaces;
    document.getElementById('multiPage').style.display = "none";
    document.getElementById('gamePage').style.display = "block";
    splitWords();
}

// win
function win() {
    var ul1 = document.getElementById('underline1').offsetWidth;
    var again = document.getElementById('again');
    var results = document.getElementById('results');
    results.style.visibility = "visible";
    results.style.color = "#00b100";
    if (numWrong > 6) {
        results.innerHTML = "YOU WIN!";
        document.getElementById('letterBank').style.display = "none";
        again.style.display = "block";
        document.getElementById('home').style.display = "block";
        document.getElementById('vidSent').style.display = "block";
        if (ul1 == 50) {
            results.style.lineHeight = "70px";
            results.style.fontSize = "30px";
        }
        if (ul1 == 28) {
            results.style.lineHeight = "50px";
            results.style.fontSize = "25px";
        }
        if (ul1 == 18) {
            results.style.lineHeight = "40px";
            results.style.fontSize = "20px";
        }
    }
    else {
        results.innerHTML = "You win!";
        document.getElementById('letterBank').style.display = "none";
        again.style.display = "block";
        document.getElementById('home').style.display = "block";
        document.getElementById('vidSent').style.display = "block";
        if (ul1 == 50) {
            again.style.marginTop = "75px";
            results.style.marginTop = "75px";
            results.style.fontSize = "200px";
        }
        if (ul1 == 28) {
            again.style.marginTop = "50px";
            results.style.marginTop = "40px";
            results.style.fontSize = "100px";
        }
        if (ul1 == 18) {
            again.style.marginTop = "40px";
            results.style.marginTop = "15px";
            results.style.fontSize = "75px";
        }
    }
}

// reset
function reset() {
    var ul1 = document.getElementById('underline1').offsetWidth;
    var results = document.getElementById('results');
    var again = document.getElementById('again');
    for (a = 1; a < 101; a++) {
        document.getElementById('letter' + a).innerHTML = "&nbsp;";
        document.getElementById('underline' + a).style.width = ul1 + "px";
        if (ul1 == 50) {
            document.getElementById('underline' + a).style.marginRight = "5px";
            results.style.height = "70px";
        }
        else if (ul1 == 28) {
            document.getElementById('underline' + a).style.marginRight = "3px";
            results.style.height = "50px";
        }
        else {
            document.getElementById('underline' + a).style.marginRight = "3px";
            results.style.height = "40px";
        }
        document.getElementById('underline' + a).style.display = "none";
        document.getElementById('underline' + a).style.borderBottom = "0px";
    }
    var bank = document.getElementById("letterBank").querySelectorAll("div");
    var cBank = document.getElementById("challengeBank").querySelectorAll("div");
    for (b = 0; b < 26; b++) {
        bank[b].style.visibility = "visible";
        cBank[b].style.visibility = "visible";
    }
    numWrong = 0;
    numRight = 0;
    phraseLength = 0;
    numChar = 0;
    results.style.marginTop = "5px";
    results.style.lineHeight = "40px";
    results.innerHTML = " ";
    document.getElementById('vidSent').style.display = "none";
    document.getElementById('letterBank').style.display = "block";
    again.style.marginTop = "0px";
    again.style.display = "none";
    document.getElementById('home').style.display = "none";
    if (phrases.indexOf(word) > -1) {
        phrases.splice(rand, 1);
        phrase();
    }
    else if (movies.indexOf(word) > -1) {
        movies.splice(rand, 1);
        movie();
    }
    else if (songs.indexOf(word) > -1) {
        songs.splice(rand, 1);
        song();
    }
    else if (document.getElementById('charcount').innerHTML > 0) {
        document.getElementById('gamePage').style.display = "none";
        document.getElementById('input').value = "";
        document.getElementById('charcount').innerHTML = "0";
        document.getElementById('multiPage').style.display = "block";
    }
}

