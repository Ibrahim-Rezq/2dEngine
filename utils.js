const getRandom = (max = 100, min = 0) => {
    return Math.random() * (max - min) + min
}

const getRandomInt = (max = 100, min = 0) => {
    return Math.floor(getRandom(max, min))
}

const getDistance = (object1, object2) => {
    const distanceX = object1.x - object2.x
    const distanceY = object1.y - object2.y
    return Math.sqrt(distanceX * distanceX + distanceY * distanceY)
}

const getVelocity = (postion1, postion2) => {
    const angle = Math.atan2(postion1.y - postion2.y, postion1.x - postion2.x)
    const velocity = {
        x: -Math.cos(angle),
        y: -Math.sin(angle),
    }
    return velocity
}

const clamp = (num, max, min = 0) => Math.min(Math.max(num, min), max)

const circleCollsion = (object, object2) => {
    if (!object2) {
        if (object.postion.x > width) {
            object.setPostion(new Vector(width, object.postion.y))
            object.setVelocity(object.velocity.reflect(new Vector(-1, 0)))
        } else if (object.postion.x < 0) {
            object.setPostion(new Vector(0, object.postion.y))
            object.setVelocity(object.velocity.reflect(new Vector(1, 0)))
        }
        if (object.postion.y > height) {
            object.setPostion(new Vector(object.postion.x, height))
            object.setVelocity(object.velocity.reflect(new Vector(0, -1)))
        } else if (object.postion.y < 0) {
            object.setPostion(new Vector(object.postion.x, 0))
            object.setVelocity(object.velocity.reflect(new Vector(0, 1)))
        }
    }
}
const squreCollsion = (object, object2) => {
    if (!object2) {
        if (object.postion.x > width) {
            object.setPostion(new Vector(width, object.postion.y))
            object.setVelocity(object.velocity.reflect(new Vector(-1, 0)))
        } else if (object.postion.x < 0) {
            object.setPostion(new Vector(0, object.postion.y))
            object.setVelocity(object.velocity.reflect(new Vector(1, 0)))
        }
        if (object.postion.y > height) {
            object.setPostion(new Vector(object.postion.x, height))
            object.setVelocity(object.velocity.reflect(new Vector(0, -1)))
        } else if (object.postion.y < 0) {
            object.setPostion(new Vector(object.postion.x, 0))
            object.setVelocity(object.velocity.reflect(new Vector(0, 1)))
        }
    }
}
