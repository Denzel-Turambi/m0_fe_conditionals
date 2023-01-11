var goodDrivingRecord = true;
var age = 25;
if (goodDrivingRecord === true && age >= 25) {
    console.log(`Discount for car rental has been added`)
} else if (goodDrivingRecord === true || age > 25) {
    console.log(`No discount. Pay full price`)
} else if (goodDrivingRecord === false && age < 25) {
    console.log(`Someone else will need to sign for the rental`)
}

