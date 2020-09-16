function randomNumber(){
    var num = Math.floor(Math.random() * 10)
    test = document.getElementById('test')
    test.innerHTML = num;

if(test.innerHTML <=2){
    document.getElementById('myimage').src = "images/b1.png"
} else if(test.innerHTML <=5){
    document.getElementById('myimage').src = "images/b2.png"
} else if(test.innerHTML <=7){
    document.getElementById('myimage').src = "images/bully.png"
} else if(test.innerHTML <=9){
    document.getElementById('myimage').src = "images/goldie.png"
}

}


function reset(){
    document.getElementById('myimage').src = "images/guess.png"
}