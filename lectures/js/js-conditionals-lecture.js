
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




































