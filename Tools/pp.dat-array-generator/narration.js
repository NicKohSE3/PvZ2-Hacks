const max = 63;
const jsonKey = "ne";
const smallTab = "                ";
const bigTab = "                    ";
const skippedNumsArr = [];

console.log("!---Copy from here---!");
console.log(smallTab + "\"" + jsonKey + "\": [");

for (var i = 11; i <= max; i++) {
    if (i == max) {
        console.log(bigTab + i);
    } else {
        console.log(bigTab + i + ",");
    }
}
console.log(smallTab + "]");
console.log("!-----Copy to here-----!");