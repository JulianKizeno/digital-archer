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
    init(id){
        this.canvasDom = document.getElementById(id)
        this.canvasDom.height = this.canvasSize.height
        this.canvasDom.width = this.canvasSize.width
        this.contx = this.canvasDom.getContext('2d')  
        this.startGame()
        this.player = new Player(this.contx, 0, 0, 150, 150, this.canvasSize)
        
    },

    startGame(){
        this.interval = setInterval(() => {
            this.counter++
            this.clearScreen()
            this.deleteBalloons()
            this.deleteArrows()
            //this.checkAllCollisions()
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
        const size = 60
        const randomVel = Math.random() * (2 - 1) + 1
        const randomPosx = Math.floor(Math.random() * (1240 - 200) + 200)
        this.balloons.push(new Balloon(this.contx, randomPosx, this.canvasSize.height + size, size, size, this.canvasSize, randomVel))
    },

    deleteBalloons(){
        this.balloons = this.balloons.filter(ballon => ballon.posY >= -60)
    },
    
    deleteArrows(){
        this.player.arrows = this.player.arrows.filter(arrow => arrow.posX <= this.canvasSize.width)

    },

    drawPlayer(){
        this.player.drawPlayer()
    }

    //isCollision(obj1,obj2){
    //  return (this.arrow.posX + width > this.balloon.posX 
    //  && this.arrow.posX + width + height > this.balloon.posX + height) 
    //     //ojb1.posX > obj2.posX+obj2.width
    //     //asegrúrate que todas tus clases tienen las propiedades iguales posX, posY, width, height
    // },
    // checkAllCollisions(){
    //     this.player.arrows.foreach((arrow,idx) => {
    //         this.balloons.foreach((balloon,index) => {
    //             this.isCollision(arrow, balloon)
    //         })
    //     })    
    // }
}


 //isCollision(arrow,globo) del arrow y del globo
                                    //break img isBroken true <-- Opcional
                                    //si true, array de globos --> splice(index,1)
        //})