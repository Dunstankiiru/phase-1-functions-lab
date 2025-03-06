// Code your solution in this file!
const headquarters = 42;
const blockLengthInFeet =264;
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - headquarters);
    //console.log(distanceFromHqInBlocks(50));
}

function distanceFromHqInFeet(someValue) {
    const blocks= distanceFromHqInBlocks(someValue);
    return Math.abs (blocks) * blockLengthInFeet;
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(start - destination) * blockLengthInFeet;
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare of $25 for distances over 2000 feet but under 2500 feet
    } else {
        return 'cannot travel that far'; // Over 2500 feet is not allowed
    }
}
// Example usage:
//console.log(distanceFromHqInFeet(50)); // Output: 2112
//console.log(distanceTravelledInFeet(34, 38)); // Output: 1056
//console.log(calculatesFarePrice(34, 38)); // Output: 13.12