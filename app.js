const words = document.querySelectorAll('.word');

function animateAll(animate){
    setTimeout(function(){
        animate(words[0]);
        setTimeout(function(){
            animate(words[1]);
            setTimeout(function(){
                animate(words[2]);
            },1000);
        },1000)
    },1000);
}

function animate(word){
    word.classList.add("animate");
}
animateAll(animate);