/*
                "plis": [
                    {
                        "p": 27,
                        "l": 20,
                        "x": 113,
                        "m": 200
                    },
*/

const min = 1;
const max = 190;
const jsonKey = "plis";
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
        console.log(bigTab + "\"l\": " + 20 + ",");
        console.log(bigTab + "\"x\": " + 0 + ",");
        console.log(bigTab + "\"m\": " + 200);
        console.log(mediumTab + "}");
    } else {
        console.log(mediumTab + "{");
        console.log(bigTab + "\"p\": " + i + ",");
        console.log(bigTab + "\"l\": " + 20 + ",");
        console.log(bigTab + "\"x\": " + 0 + ",");
        console.log(bigTab + "\"m\": " + 200);
        console.log(mediumTab + "},");
    }
}
console.log(smallTab + "]");
console.log("!-----Copy to here-----!");