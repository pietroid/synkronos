class Blot {
    constructor(x, y, size, factor1) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.factor1 = factor1;
        this.availableMass = 1;
    }

    isTouching(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return d < this.size / 2 + other.size / 2;
    }

}

dist = function(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}