
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

function sortAToZ(array) {
    const sortedArray = [...array];
    return sortedArray.sort((a, b) => a.localeCompare(b));
}

function sortZToA(array) {
    const sortedArray = [...array];
    return sortedArray.sort((a, b) => b.localeCompare(a));
}

function sortShortToLong(array) {
    const sortedArray = [...array];
    return sortedArray.sort((a, b) => a.length - b.length);
}

function sortLongToShort(array) {
    const sortedArray = [...array];
    return sortedArray.sort((a, b) => b.length - a.length);
}




































