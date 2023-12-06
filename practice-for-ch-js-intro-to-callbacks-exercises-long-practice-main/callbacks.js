// class Clock {
//     constructor() {
//         this.date = new Date("December 06, 2023 14:01:00");
//         this.hours = this.date.getHours();
//         this.minutes = this.date.getMinutes();
//         this.seconds = this.date.getSeconds();
//         setInterval(this._tick.bind(this), 1000);
//     }

//     printTime() {
//         console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
//     }

//     _tick() {
//         this._incrementSeconds();
//         this.printTime();
//     }

//     _incrementSeconds() {
//         this.seconds++
//         if (this.seconds === 60){
//             this.seconds = 0;
//             this._incrementMinutes();
//         }
//     }

//     _incrementMinutes() {
//         this.minutes++
//         if (this.minutes === 60){
//             this.minutes = 0;
//             this._incrementHours();
//         }
//     }

//     _incrementHours() {
//         this.hours++
//         if (this.hours === 24){
//             this.hours = 0;
//         }
//     }
// }


// // const readline = require('readline');


// // reader = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// //   });

// // function addNumbers (sum, numsLeft, completionCallback) {
// //     if (numsLeft === 0) {
// //         completionCallback(sum);
// //     } else {
// //         reader.question("Enter a number", function(answer) {
// //             console.log(sum + answer)
// //         })
// //         addNumbers(sum, numsLeft - 1, completionCallback)
// //     }
// //     reader.close();
// // }

// // addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


// const readline = require('readline');

// reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft >= 1) {
//         reader.question('Enter a number', function (answer) {
//             sum += parseInt(answer)
//             console.log(sum);
//             if (numsLeft === 1) {
//                 completionCallback(sum)
//                 reader.close()
//                 return;
//             }
//             addNumbers(sum, numsLeft - 1, completionCallback)
//         });
//     }
// }
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


// Function.prototype.myBind = function (context) {
//     return () => {
//         this.apply(context)
//     }
// }

// class Lamp {
//     constructor() {
//       this.name = "a lamp";
//     }
//   }
  
//   const turnOn = function() {
//     console.log("Turning on " + this.name);
//   };
  
//   const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
//   const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"










const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell you whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Sup, is ${el1} > ${el2}? Enter Yes or No: `, function(answer) {
    if (answer === "Yes") {
        callback(true)
    } else {
        callback(false)
    }
  });
};

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

