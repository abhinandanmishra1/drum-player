window.addEventListener('onkeydown',function(e){
    // const audio=document.
    if(e.key!=undefined){
        const audio=document.querySelector(`audio[data-key="${e.keycode}"]`);
        console.log(audio);
        console.log(e.keyCode);
    }
})