function Accumulator() {
    this.accum = 100;
}

Accumulator.prototype.plusOne = function (plusNum) {
    this.accum += 1;
}

Accumulator.prototype.minusOne = function (minusNum) {
    this.accum -= 1;
}

Accumulator.prototype.clearAccum = function (clearNum) {
    this.accum = 100;
}

Accumulator.prototype.printItems = function () {
    // for (let i = 0; i < this.accum.length; i++) {
    //     console.log(`${this.accum}`);
    // }
    console.log(this);
}

const accumulator = new Accumulator()

function plusOne() {
    const plusNum = 1;
    accumulator.plusOne(plusNum)
    accumulator.printItems()
}

function minusOne() {
    const minusNum = 1;
    accumulator.minusOne(minusNum)
    accumulator.printItems()
}

function clearAccum() {
    const minusNum = 100;
    accumulator.clearAccum(minusNum)
    accumulator.printItems()
}

