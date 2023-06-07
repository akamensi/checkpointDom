var somm = document.querySelector('#somme')
var bplus = document.querySelectorAll('.btnPlus')
var bmoins = document.querySelectorAll('.btnMoins')
var del = document.querySelectorAll('.fa-trash')
var heart = document.querySelectorAll('.fa-heart')
var count= document.querySelector('.price')

for(let i = 0;i<bplus.length;i++){
    bplus[i].addEventListener('click',function(){
        bplus[i].previousElementSibling.innerHTML++
        SommeTotale()

    })
}

for(let i = 0; i<bmoins.length;i++){
    bmoins[i].addEventListener('click',function(){
        if(bmoins[i].nextElementSibling.innerHTML>0){
            bmoins[i].nextElementSibling.innerHTML--
            SommeTotale()
        }        
    })
}

for(let i = 0;i<del.length;i++){
    del[i].addEventListener('click',function(){
        del[i].parentElement.remove()
        SommeTotale()
})
}

for(let i = 0;i<heart.length;i++){
    heart[i].addEventListener('click',function(){
        heart[i].classList.toggle('akamensi')
    })
}



function SommeTotale(){
    var pric = document.querySelectorAll('.price')
    var count = document.querySelectorAll('.count')
    var somm = document.querySelector('#somme')
    var sum = 0

    for(let i = 0;i<pric.length;i++){
        sum = sum + pric[i].innerHTML*count[i].innerHTML
    }

    return somm.innerHTML = sum
}

