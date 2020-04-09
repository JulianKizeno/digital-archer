
class Balloon {

    constructor(contx, posX, posY, width, height, canvasSize, vel) {
        this.contx = contx
        this.posX = Math.floor(Math.random() * (1240 - 200) + 200)
        this.posY = posY
        this.width = 45
        this.height = 50
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
        this.vel = Math.random() * (2 - 1) + 1
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