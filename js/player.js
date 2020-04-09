
class Player {
    
    constructor(contx, posX, posY, width, height, canvasSize) {
        this.contx = contx
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
        this.vel = 20
        this.player = undefined
        this.eventListener()
        this.player = new Image()
        this.player.src = `./images/longbow.png`
        this.arrows = []
    }
    drawPlayer() {
        this.contx.drawImage(this.player, this.posX, this.posY, this.width, this.height)
    }
    
    movePlayer(dir) {
        dir === 'down' && this.posY < this.canvasSize.height - this.height ? this.posY += this.vel : null
        dir === 'up' && this.posY > 0 ? this.posY -= this.vel : null
    }
    
    createArrow(){
        this.arrows.forEach(arrow => arrow.drawArrow())
    }
    
    eventListener() {
        document.addEventListener('keydown', e => {
            e.keyCode === 40 ? this.movePlayer('down') : null
            e.keyCode === 38 ? this.movePlayer('up') : null         
            e.keyCode === 32 ? this.throwArrows() : null         
        })
    }
    
    throwArrows(){
        this.arrows.push(new Arrows(this.contx, this.posX, this.posY, this.width, this.height)) 
        console.log(this.arrows);
        
    }
   


    
}