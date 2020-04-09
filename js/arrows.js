class Arrows {

    constructor(contx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.contx = contx
        this.posX = playerPosX + playerWidth
        this.posY = playerPosY + playerHeight - 85
        this.arrowWidth = 150
        //this.playerHeight = playerHeight
        this.arrowHeight = 10
        this.velX = 4
        this.arrow = new Image()
        this.arrow.src = `./images/arrow.png`
      

    }
  
    drawArrow() {
        this.contx.drawImage(this.arrow, this.posX, this.posY, this.arrowWidth, this.arrowHeight)
    }
  
    moveArrow() {
      this.posX += this.velX
    }
}
  