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
        if (value.x || value.y) {
            this.x -= value.x
            this.y -= value.y
        } else {
            this.x -= value
            this.y -= value
        }
        return this
    }

    multiply(value) {
        if (value.x || value.y) {
            this.x *= value.x
            this.y *= value.y
        } else {
            this.x *= value
            this.y *= value
        }
        return this
    }

    divide(value) {
        if (value.x || value.y) {
            this.x /= value.x
            this.y /= value.y
        } else {
            this.x /= value
            this.y /= value
        }
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
    setVector(vector) {
        this.x = vector.x
        this.y = vector.y
        return this
    }
}

class Particle {
    constructor(x, y, radius, color, lifeTime = 10, velocity) {
        this.postion = new Vector(x, y)
        this.velocity =
            velocity || new Vector(getRandom(4, -4), getRandom(4, -4))
        this.radius = radius
        this.color = color
        this.alpha = 1
        this.lifeTime = 1 / lifeTime
    }

    draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.postion.x, this.postion.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
    }

    update() {
        this.draw()
        this.alpha -= this.lifeTime
        this.velocity.add(gravity || 0.1)
        this.velocity.multiply(friction || 0.999)
        this.postion.x += this.velocity.x
        this.postion.y += this.velocity.y
    }
    setVelocity(velocity) {
        this.velocity.setVector(velocity)
    }

    setPostion(vector) {
        this.postion.setVector(vector)
    }
}
