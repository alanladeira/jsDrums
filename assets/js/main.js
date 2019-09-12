window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[key-code="${e.keyCode}"]`);
    const keys = document.querySelector(`div[key-code="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();    
    keys.classList.add('playing')

    removerclasse()

    function removerclasse(){
        window.addEventListener('keyup', function(e){
            const keys = document.querySelector(`div[key-code="${e.keyCode}"]`);        
            keys.classList.remove('playing')        
        });
    }   
});

const btn = document.getElementById('btn-close')
const aviso = document.querySelector('.aviso')
const close = document.querySelector('.close')

function fechar(){  
    aviso.style.display='none'    
}

btn.addEventListener('click', fechar)
close.addEventListener('click', fechar)