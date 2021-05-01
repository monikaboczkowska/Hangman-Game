var arrayWithTitles = new Array(11);
arrayWithTitles[0] = "Once Upon A Time In The West";
arrayWithTitles[1] = "Raiders Of The Lost Ark";
arrayWithTitles[2] = "Back To The Future";
arrayWithTitles[3] = "The Shawshank Redemption";
arrayWithTitles[4] = "The Lord Of The Rings";
arrayWithTitles[5] = "Casablanca";
arrayWithTitles[6] = "The Big Lebowski";
arrayWithTitles[7] = "The Usual Suspects";
arrayWithTitles[8] = "Saving Private Ryan";
arrayWithTitles[9] = "Twelve Angry Men";
arrayWithTitles[10] = "The Silence Of The Lambs";

function lottery() {
    var lotteryNumber = Math.round(Math.random() * arrayWithTitles.length);
    randomlySelectedTitle = arrayWithTitles[lotteryNumber];
}

lottery();


var title = randomlySelectedTitle;

title = title.toUpperCase();


var lenghtOfTitle = title.length;

var numberOfHits = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var title1 = "";

for (i = 0; i < lenghtOfTitle; i++) {
    if (title.charAt(i) == " ") title1 = title1 + " ";
    else title1 = title1 + "-";
}

function showTitle() {
    document.getElementById("board").innerHTML = title1;


}

window.onload = start;

var letters = new Array(25);

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";

function start() {

    var contentOfDiv = "";

    for (i = 0; i <= 25; i++) {

        var element = "letter" + i;

        contentOfDiv = contentOfDiv + '<div class="letter" onclick="check(' + i + ')" id="' + element + '">' + letters[i] + '</div>';
        if ((i + 1) % 7 == 0) contentOfDiv = contentOfDiv + '<div style="clear:both;"></div>';
    }

    document.getElementById("alphabet").innerHTML = contentOfDiv;

    showTitle();
}

String.prototype.setCharacter = function (place, sign) {
    if (place > this.length - 1) return this.toString();

    else return this.substr(0, place) + sign + this.substr(place + 1);
}


function check(nr) {

    var hitLetter = false;

    for (i = 0; i < lenghtOfTitle; i++) {
        if (title.charAt(i) == letters[nr]) {
            title1 = title1.setCharacter(i, letters[nr]);

            hitLetter = true;
        }
    }

    if (hitLetter == true) {

        yes.play();
        var element = "letter" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        showTitle();

    } else {

        no.play();
        var element = "letter" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";

        document.getElementById(element).setAttribute("onclick", ";");


        //skucha
        numberOfHits++;
        var image = "img/s" + numberOfHits + ".jpg";
        document.getElementById("gallows").innerHTML = '<img src="' + image + '" alt="" />';
    }

    //wygrana
    if (title == title1)
        document.getElementById("alphabet").innerHTML = "You won! Congratulations! <br />" + title + '<br /><br /><span class="reset" onclick="location.reload()">Would you like to play again?</span>';


    //przegrana
    if (numberOfHits >= 9)
        document.getElementById("alphabet").innerHTML = "Sorry! You lost... <br /> Answer it: <br />" + title + '<br /><br /><span class="reset" onclick="location.reload()">Would you like to play again?</span>';
}
