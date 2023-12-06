class Clock {
    constructor() {
        this.date = new Date("December 06, 2023 14:01:00");
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    _tick() {
        this._incrementSeconds();
        this.printTime();
    }

    _incrementSeconds() {
        this.seconds++
        if (this.seconds === 60){
            this.seconds = 0;
            this._incrementMinutes();
        }
    }

    _incrementMinutes() {
        this.minutes++
        if (this.minutes === 60){
            this.minutes = 0;
            this._incrementHours();
        }
    }

    _incrementHours() {
        this.hours++
        if (this.hours === 24){
            this.hours = 0;
        }
    }
}


const readline = require('readline');


reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function addNumbers (sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
        completionCallback(sum);
    } else {
        reader.question("Enter a number", function(answer) {
            console.log(sum + answer)
        })
        addNumbers(sum, numsLeft - 1, completionCallback)
    }
    reader.close();
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));




