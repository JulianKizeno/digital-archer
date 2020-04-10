
window.onload = () => {

    document.querySelector('#start').addEventListener('click', ()=>{
        document.querySelector('.intro').classList.toggle('hidden')
        document.querySelector('#myCanvas').classList.toggle('hidden')
        game.init('myCanvas')

    })


   
    };
