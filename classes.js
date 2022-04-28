class Vector {
    constructor(x = getRandom(1, -1), y = getRandom(1, -1)) {
        if (x.x) {
            this.x = x.x - y.x
            this.y = x.y - y.y
        } else {
            this.x = x
            this.y = y
        }
    }

    add(value) {
        if (value.x || value.y) {
            this.x += value.x
            this.y += value.y
        } else {
            this.x += value
            this.y += value
        }
        return this
    }
    substract(value) {
        this.x -= value
        this.y -= value
        return this
    }
    multiply(value) {
        this.x *= value
        this.y *= value
        return this
    }
    divide(value) {
        this.x /= value
        this.y /= value
        return this
    }
    getMagnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    getDirction() {
        const angle = Math.atan2(this.y, this.x)
        return {
            x: Math.cos(angle),
            y: Math.sin(angle),
        }
    }
    normalize() {
        if (this.getMagnitude() != 0) {
            this.divide(this.getMagnitude())
        }
        return this
    }
    setMagnitude(value) {
        return this.normalize().multiply(value)
    }
    reflect(vector) {
        this.x = this.x - 2 * this.dot(vector) * vector.x
        this.y = this.y - 2 * this.dot(vector) * vector.y
        return this
    }
    dot(vector) {
        return this.x * vector.x + this.y * vector.y
    }
}
