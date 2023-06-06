
function getRandoByJeremy(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}
console.log("Inside for_loops.js");

function showMultiplicationTable(number) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// showMultiplicationTable(parseInt(prompt("Enter a number")));

function returnEvenOrOdd(number) {
    if(number % 2 === 0) return 'is even';
    else return 'is odd';
}


function randomEvenOrOdd() {
    for(let i = 0; i < 10; i++) {
        const randomNumber = getRandoByJeremy(20, 200);
        // console.log(`${randomNumber} ${returnEvenOrOdd(randomNumber)}`);
        
        if(randomNumber % 2 === 0) {
            console.log(`${randomNumber} is even`);
        } else {
            console.log(`${randomNumber} is odd`);
        }
    }
}

// randomEvenOrOdd();

function numPyramid() {
    for(let i = 1; i < 10; i++) {
        console.log(`${i.toString().repeat(i)}`);
    }
}

function numPyramidButDifficult() {
    for(let i = 1; i <= 9; i++) {
        let oneLevelOfMyPyramid = '';
        for(let j = 1; j <= i; j++) {
            oneLevelOfMyPyramid = oneLevelOfMyPyramid + i;
        }
        console.log(oneLevelOfMyPyramid);
    }
}



// numPyramid();
// numPyramidButDifficult();


function oneHundredToFive() {
    // for(let i = 20; i > 0; i--) {
    //     console.log(i*5);
    // }
    
    for(let i = 100; i >= 5; i -= 5) {
        console.log(i);
    }
    
}
// oneHundredToFive()



