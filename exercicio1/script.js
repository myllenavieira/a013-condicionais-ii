const num = +prompt('Digite um número.') //seu numero aqui

if(num % 2 === 0){
    if(num % 3 === 0){
        alert('É divisivel por 2 e 3');
    }else{
        alert('É divisivel por 2 e não por 3');
    }
}else{
    alert('Não é divisivel por 2');
}

if(num % 2 === 0 && num % 3 === 0){
    alert('É divisivel por 2 e 3');
}else{
    alert('Não é divisivel por 2 e 3');
}
