const min = 11;
const max = 81;
const jsonKey = "gf";
const smallTab = "                ";
const mediumTab = "                    ";
const skippedNumArr = [
    26,
    27,
    29,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    47,
    48,
    50,
    51,
    57,
    58,
    59,
    60,
    62,
    63,
    64,
    65,
    70,
    71,
    74,
    75,
    76,
    77,
    79
];

console.log("!---Copy from here---!");
console.log(smallTab + "\"" + jsonKey + "\": [");

for (var i = min; i <= max; i++) {
    if (skippedNumArr.includes(i)) {
        // Do nothing
    } else if (i == max) {
        console.log(mediumTab + i);
    } else {
        console.log(mediumTab + i + ",");
    }
}
console.log(smallTab + "]");
console.log("!-----Copy to here-----!");