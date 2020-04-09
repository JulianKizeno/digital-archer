class Arrows {

    constructor(contx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.contx = contx
        this.posX = playerPosX + playerWidth
        this.posY = playerPosY + playerHeight - 74
        this.width = 130
        this.height = 5
        this.velX = 5
        this.arrow = new Image()
        this.arrow.src = `./images/arrow.png`
      

    }
  
    drawArrow() {
        this.contx.drawImage(this.arrow, this.posX, this.posY, this.width, this.height)
    }
  
    moveArrow() {
      this.posX += this.velX
    }
}
  