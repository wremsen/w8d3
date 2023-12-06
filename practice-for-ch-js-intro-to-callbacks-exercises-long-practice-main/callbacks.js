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


Function.prototype.myBind = function (context) {
    return () => {
        this.apply(context)
    }
}

class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
  turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"