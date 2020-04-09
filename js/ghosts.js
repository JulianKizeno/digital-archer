
class Ghosts {
    constructor(contx, posX, posY, width, height, canvasSize, vel) {
        this.contx = contx
        this.posX = posX
        this.posY = Math.floor(Math.random() * (canvasSize.height + 60 ))
        this.width = 45
        this.height = 50
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
        this.vel = Math.random() * (1.5 - 1) + 1
        this.ghost = new Image()
        this.ghost.src = `./images/ghost1.png`
    }

    draw() {

        this.contx.drawImage(this.ghost, this.posX, this.posY, this.width, this.height)
    }

    move() {
        this.posX -= this.vel 
    
    }

}
