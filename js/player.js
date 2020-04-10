
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
        this.keyState = {
            keyDown : false,
            keyUp : false,
        }
    }
    drawPlayer() {
        this.contx.drawImage(this.player, this.posX, this.posY, this.width, this.height)
    }
    
    movePlayer() {
        if(this.keyState.keyDown && this.posY < this.canvasSize.height - this.height ){
            this.posY += this.vel
        }
        if(this.keyState.keyUp && this.posY > 0 ){
            this.posY -= this.vel
        }
    }
    
    createArrow(){
        this.arrows.forEach(arrow => arrow.drawArrow())
    }
    
    eventListener() {
        document.addEventListener('keydown', e => {
            e.keyCode === 40 ? this.keyState.keyDown = true : null
            e.keyCode === 38 ? this.keyState.keyUp = true : null         
            e.keyCode === 32 ? this.throwArrows() : null         
        })
        document.addEventListener('keyup', e => {
            e.keyCode === 40 ? this.keyState.keyDown = false : null
            e.keyCode === 38 ? this.keyState.keyUp = false : null                 
        })
    }
    
    throwArrows(){
        if(this.arrows.length < 5){

            this.arrows.push(new Arrows(this.contx, this.posX, this.posY, this.width, this.height)) 
        }
        
    }
   


    
}