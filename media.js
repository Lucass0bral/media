window.addEventListener('load',function(){
    document.querySelector('#btn').addEventListener('click',function(){
        CalculaMedia();
    });
});

function CalculaMedia(){

    
    var teste = parseFloat(document.querySelector('#teste').value);
    if (isNaN(teste)){
    alert('Digite um Valor Válido');
    return false
    }

    var prova = parseFloat(document.querySelector('#prova').value);
    if (isNaN(prova)){
    alert('Digite um Valor Válido');
    return false
    }

    var media=(teste+prova)/2;

    document.querySelector('#resultado').innerHTML= "Sua média é " + media;
    return true   

 
}