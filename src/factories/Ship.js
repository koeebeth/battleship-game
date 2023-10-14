export default class Ship {
    constructor (name, length) {
        this.name = name;
        this.length = length;
        this.hitCount = 0;
    }

    hit () {
        if (!this.isSunk){
            this.hitCount += 1;
        }
    }

    isSunk () {
        return this.hitCount === this.length;
    }
}