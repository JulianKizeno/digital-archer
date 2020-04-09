const game = {
    canvasDom: undefined,
    contx: undefined,
    canvasSize: {
        width: window.innerWidth,
        height: window.innerHeight,
        
    },
    player: undefined,
    balloons: [],
    interval: undefined,
    counter : 0,
    score: 0,
    goneBalloons : [],
    balloonsToLose: 6,
    init(id){
        this.canvasDom = document.getElementById(id)
        this.canvasDom.height = this.canvasSize.height
        this.canvasDom.width = this.canvasSize.width
        this.contx = this.canvasDom.getContext('2d')  
        this.startGame()
        this.player = new Player(this.contx, 0, 0, 130, 130, this.canvasSize)
        
    },

    startGame(){
        this.interval = setInterval(() => {
            if(this.goneBalloons.length === this.balloonsToLose){
               this.gameOver()
            }
            //console.log(this.goneBalloons)
            this.counter++
            this.clearScreen()
            this.deleteBalloons()
            this.deleteArrows()
            this.checkAllCollisions()
            this.balloons.forEach(elm => elm.move())
            this.drawBalloon()
            if(this.counter % 100 === 0){
                this.generateBalloon()
            }
            this.player.arrows.forEach(arrow => arrow.moveArrow())
            this.player.arrows.forEach(arrow => arrow.drawArrow())
            this.drawPlayer()
        }, 1000/60)

    },

    clearScreen() {
        this.contx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },

    drawBalloon() {
        this.balloons.forEach(elm => elm.drawInit())
    },

    generateBalloon(){
        this.balloons.push(new Balloon(this.contx, this.posX, this.canvasSize.height + 60, this.width, this.height, this.canvasSize, this.vel))
    },

    deleteBalloons(){
        this.goneBalloons = this.balloons.filter(ballon => ballon.posY <= - 60)
    },
    
    deleteArrows(){
        this.player.arrows = this.player.arrows.filter(arrow => arrow.posX <= this.canvasSize.width)

    },

    drawPlayer(){
        this.player.drawPlayer()
    },
    
    drawScore(){

    },

    isCollision(obj1,obj2, /*obj3*/){
        return obj1.posX < obj2.posX + obj2.width  &&
               obj1.posX + obj1.width > obj2.posX    &&
               obj1.posY < obj2.posY + obj2.height &&
               obj1.height + obj1.posY > obj2.posY 
     },

    checkAllCollisions(){
        this.player.arrows.forEach((arrow,idx) => { 
            this.balloons.forEach((balloon,index) => { 
                //this.ghosts.forEach((ghost, indx) => {
                    if(this.isCollision(arrow, balloon)){
                        this.balloons.splice(index,1)
                        //this.ghosts.splice(indx,1)
                        console.log(this.balloons)
                    }
              //})   
            })
        })    
    },


    gameOver(){
        clearInterval(this.interval)
        alert('You are not good enough')
    }
}

// socore += number of collisions