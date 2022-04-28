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
    constructor(x, y, radius, color, leader) {
        this.postion = new Vector(x, y)
        this.velocity = new Vector(1, 1)
        this.radius = radius
        this.color = color
        this.trail = []
        this.leader = leader
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.postion.x, this.postion.y, 5, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
    }
    update() {
        this.draw()
        this.velocity.add(gravity)
        this.velocity.multiply(friction)
        this.postion.x += this.velocity.x
        this.postion.y += this.velocity.y
        this.collsionCheck()
    }
    collsionCheck() {
        if (this.postion.x > width) {
            this.postion.x = width
            this.velocity.reflect(new Vector(-1, 0))
        } else if (this.postion.x < 0) {
            this.postion.x = 0
            this.velocity.reflect(new Vector(1, 0))
        }
        if (this.postion.y > height) {
            this.postion.y = height
            this.velocity.reflect(new Vector(0, -1))
        } else if (this.postion.y < 0) {
            this.postion.y = 0
            this.velocity.reflect(new Vector(0, 1))
        }
    }
    setVelocity(velocity) {
        this.velocity = velocity
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
    const slime = new Slime(e.clientX, e.clientY, 10, 'red')
    slimes.push(slime)
})

const vector = new Vector(-1, 1)
const animate = () => {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'rgba(0,0,0,0.1)'
    ctx.fillRect(0, 0, width, height)
    slimes.forEach((slime, index, array) => {
        slime.update()
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
