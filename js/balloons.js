
class Balloon {

    constructor(contx, posX, posY, width, height, canvasSize, vel) {
        this.contx = contx
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
        this.vel = vel
        this.isBroken = false,
        this.balloon = new Image()
        this.balloon.src = `./images/balloon2.png`
        this.balloonBreak = new Image()
        this.balloonBreak = './images/break-balloon.png'

    }

    drawInit() {
        // this.isBroken ?
        // this.contx.drawImage(this.balloonBreak, this.posX, this.posY, this.balloonW, this.balloonH) : this.ballon
        this.contx.drawImage(this.balloon, this.posX, this.posY, this.width, this.height)
    }
    
    move() {

        this.posY -= this.vel
        
    }

}