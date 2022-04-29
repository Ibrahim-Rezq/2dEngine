const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const width = canvas.width
const height = canvas.height

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2,
}
const gravity = new Vector(0, 2)
const friction = 0.998
const bounce = 1
const speed = 15
let color = 'black'

class Slime {
    constructor(x, y, radius, color) {
        this.postion = new Vector(x, y)
        this.velocity = new Vector(5, 5)
        this.radius = radius || 5
        this.color = color
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.postion.x, this.postion.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
    }
    update() {
        this.draw()
        // this.velocity.add(gravity)
        this.velocity.multiply(friction)
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
const slimes = []

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const slime = new Slime(
            200 + i * 10,
            200 + j * 10,
            2,
            'blue',
            i === 0 && true
        )
        slimes.push(slime)
    }
}

addEventListener('click', (e) => {
    const slime = new Particle(e.clientX, e.clientY, 10, 'red')
    slimes.push(slime)
})

const vector = new Vector(-1, 1)
const animate = () => {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'rgba(0,0,0,0.1)'
    ctx.fillRect(0, 0, width, height)
    slimes.forEach((slime, index, array) => {
        slime.update()
        circleCollsion(slime)
        if (slime.alpha && slime.alpha <= 0) {
            array.splice(index, 1)
        }
    })
}
addEventListener('mousemove', (e) => {
    mouse = {
        x: e.clientX,
        y: e.clientY,
    }
    slimes.forEach((slime, index, array) => {
        if (getDistance(slime.postion, mouse) < 200) {
            // slime.setVelocity(vel.normalize())
            vel = new Vector(mouse, slime.postion)
        }
    })
})
animate()
