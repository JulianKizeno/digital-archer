const game = {
    canvasDom: undefined,
    contx: undefined,
    canvasSize: {
        width: window.innerWidth,
        height: window.innerHeight,
        
    },
    player: undefined,
    balloons: [],
    ghosts: [],
    interval: undefined,
    counter : 0,
    score: 0,
    goneBalloons : [],
    lives: 8,
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
            if(this.goneBalloons.length === this.lives){
               this.gameOver()
            }
            this.counter++
            this.clearScreen()
            this.deleteBalloons()
            this.deleteGhosts()
            this.deleteArrows()
            this.checkAllCollisions()
            this.balloons.forEach(elm => elm.move())
            this.drawBalloon()
            this.ghosts.forEach(elmt => elmt.move())
            this.drawGhosts()
            if(this.counter % 100 === 0){
                this.generateBalloon()
                if(this.counter % 10 === 0){                   
                    this.generateGhosts()
                }
            }
            this.player.arrows.forEach(arrow => arrow.moveArrow())
            this.player.arrows.forEach(arrow => arrow.drawArrow())
            this.drawPlayer()
            this.drawScore()
            this.player.movePlayer()
        }, 1000/50)

    },

    clearScreen() {
        this.contx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },

    drawPlayer(){
        this.player.drawPlayer()
    },

    //------BALLOONS------

    drawBalloon() {
        this.balloons.forEach(elm => elm.drawInit())
    },

    generateBalloon(){
        this.balloons.push(new Balloon(this.contx, this.posX, this.canvasSize.height + 60, this.width, this.height, this.canvasSize))
    },

    deleteBalloons(){
        this.goneBalloons = this.balloons.filter(ballon => ballon.posY <= - 60)
    },

    // -------GHOSTS-------

    drawGhosts() {
        this.ghosts.forEach(ghost => ghost.draw())
    },

    generateGhosts(){
        let gst = new Ghosts(this.contx, this.canvasSize.width + 60, this.posY, this.width, this.height, this.canvasSize)
        this.ghosts.push(gst)
    },

    deleteGhosts(){
        console.log(this.ghosts.length)
        this.ghosts = this.ghosts.filter(ghost => ghost.posX >= - 60)
    },

    deleteArrows(){
        this.player.arrows = this.player.arrows.filter(arrow => arrow.posX <= this.canvasSize.width)

    },

    //------SCORE------

    drawScore(){
        this.contx.fillStyle = 'white'
        this.contx.font = '40px Arial'
        this.contx.fillText(`Score: ${this.score} lives: ${this.lives-this.goneBalloons.length}`, this.canvasSize.width - 320, 50) 
    },
    
    //--------COLLISIONS--------

    isCollision(obj1,obj2){
        return obj1.posX < obj2.posX + obj2.width  &&
               obj1.posX + obj1.width > obj2.posX    &&
               obj1.posY < obj2.posY + obj2.height &&
               obj1.height + obj1.posY > obj2.posY 
     },

    checkAllCollisions(){
        this.player.arrows.forEach(arrow => { 
            this.balloons.forEach((balloon,index) => { 
                if(this.isCollision(arrow, balloon)){
                    this.balloons.splice(index,1)
                    this.score++
                }
            })
        })
        this.ghosts.forEach(ghost => {
            if(this.isCollision(this.player, ghost)){
                this.gameOver()
            }
        })    
    },


    gameOver(){
        clearInterval(this.interval)
        alert('YOU LOSE! :(')
    }
}
