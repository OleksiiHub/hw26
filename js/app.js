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
    console.log(this);
}

const accumulator = new Accumulator()

function plusOne() {
    accumulator.plusOne()
    accumulator.printItems()
}

function minusOne() {
    accumulator.minusOne()
    accumulator.printItems()
}

function clearAccum() {
    accumulator.clearAccum()
    accumulator.printItems()
}

