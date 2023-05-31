
// Initializing a word array and sorting functions for use in later example
const wordArray = [
    'cat',
    'dog',
    'tree',
    'car',
    'book',
    'banana',
    'computer',
    'elephant',
    'house',
    'orange',
    'guitar',
    'flower',
    'mountain',
    'butterfly',
    'sunflower',
    'restaurant',
    'university',
    'chocolate',
    'watermelon',
    'television'
];

const sortAToZ = array => {
    const sortedArray = [...array];
    return sortedArray.sort((a, b) => a.localeCompare(b));
}

const sortZToA = array => {
    const sortedArray = [...array];
    return sortedArray.sort((a, b) => b.localeCompare(a));
}

const sortShortToLong = array => {
    const sortedArray = [...array];
    return sortedArray.sort((a, b) => a.length - b.length);
}

const sortLongToShort = array => {
    const sortedArray = [...array];
    return sortedArray.sort((a, b) => b.length - a.length);
}





// const userWantsToDelete = confirm("Do you want to delete?");



// if(userWantsToDelete) {
//     console.log("delete");
//     const timeOfDelete = //code to put time in
// }
// else {
//     console.log("No delete");
// }
//
//
// timeOfDelete;




userWantsToDelete ? console.log("delete") : console.log("no delete");

// console.log("the rest of the program is running");


const fishBiting = confirm("are the fish biting?");
const amountOfTimeSittingInMinutes = parseInt(prompt("How long have you been sitting there?"));
//
// if(fishBiting) {
//     console.log("Reel that fish in!");
// } else if(amountOfTimeSittingInMinutes > 3) {
//     console.log("Time to recast");
// } else {
//     console.log("Keep staring at the water");
// }

const output = fishBiting ? "reel fish in" : amountOfTimeSittingInMinutes > 3 ? "recast" : "keep staring";

console.log(output);


// if(hungry) {
//     if(hasMoney){
//         // get food
//     }
// }
//
// if(hungry && hasMoney) {
//     // get food
// }




// const sortOption = prompt("How do you want to sort the list");
//
// switch(sortOption) {
//     case "a to z":
//         console.log(sortAToZ(wordArray));
//         break;
//     case "z to a":
//         console.log(sortZToA(wordArray));
//         break;
//     case "small to big":
//         console.log(sortShortToLong(wordArray));
//         break;
//     case "big to small":
//         console.log(sortLongToShort(wordArray));
//         break;
//     default:
//         console.log(wordArray);
//         break;
// }




























