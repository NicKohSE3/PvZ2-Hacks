const min = 1;
const max = 190;
const jsonKey = "pli";
const smallTab = "                ";
const mediumTab = "                    ";
const bigTab = "                        ";
const skippedNumArr = [];

console.log("!---Copy from here---!");
console.log(smallTab + "\"" + jsonKey + "\": [");

for (var i = min; i <= max; i++) {
    if (skippedNumArr.includes(i)) {
        // Do nothing
    } else if (i == max) {
        console.log(mediumTab + "{");
        console.log(bigTab + "\"p\": " + i + ",");
        console.log(bigTab + "\"c\": " + 1 + ",");
        console.log(bigTab + "\"a\": " + 4 + ",");
        console.log(bigTab + "\"b\": [],");
        console.log(bigTab + "\"t\": " + -1);
        console.log(mediumTab + "}");
    } else {
        console.log(mediumTab + "{");
        console.log(bigTab + "\"p\": " + i + ",");
        console.log(bigTab + "\"c\": " + 1 + ",");
        console.log(bigTab + "\"a\": " + 4 + ",");
        console.log(bigTab + "\"b\": [],");
        console.log(bigTab + "\"t\": " + -1);
        console.log(mediumTab + "}");
    }
}
console.log(smallTab + "]");
console.log("!-----Copy to here-----!");