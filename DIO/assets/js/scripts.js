var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var aviso = "Número muito alto";
var aviso1 = "Proibido número negativo";

function increment(){
    currentNumber = currentNumber +1;
    if(currentNumber<10){
    currentNumberWrapper.innerHTML = currentNumber;
    }else{
        alert(aviso);
    }
    
    
}

function decrement(){
    currentNumber = currentNumber -1;
    if(currentNumber>=0){
    currentNumberWrapper.innerHTML = currentNumber;
    }else{
        alert(aviso1);
    }
    
}




