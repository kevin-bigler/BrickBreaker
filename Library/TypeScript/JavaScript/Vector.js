// Classes
/**
 * @class Vector
 * @param x - Contains the x Value for the vector
 * @param y - Contains the y Value for the Vector
 */
export class Vector {
    constructor(x = 0, y = 0) {
        this.x = x || 0;
        this.y = y || 0;
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
    }
    mult(factor) {
        if (factor instanceof Vector) {
            this.x *= factor.x;
            this.y *= factor.y;
        }
        else {
            this.x *= factor;
            this.y *= factor;
            return this;
        }
    }
    div(divisor) {
        if (divisor instanceof Vector) {
            this.x /= divisor.x;
            this.y /= divisor.y;
        }
        else {
            this.x /= divisor;
            this.y /= divisor;
        }
    }
    limit(max) {
        let mSq = (this.x * this.x) + (this.y * this.y);
        if (mSq > max * max) {
            this.div(Math.sqrt(mSq)); //normalize it
            this.mult(max);
        }
        return this;
    }
}
//# sourceMappingURL=Vector.js.map