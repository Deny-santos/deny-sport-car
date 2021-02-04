window.onscroll = function(){
    sc()
}

function sc(){
    var seta = document.getElementById("seta")
    if(document.documentElement.scrollTop > 100){
        seta.style.display = "block"
    }
    else{
        seta.style.display = "none"
    }
    
}
var seta = document.getElementById("seta")

seta.addEventListener("click", function(){
    document.documentElement.scrollTop = 0
})
