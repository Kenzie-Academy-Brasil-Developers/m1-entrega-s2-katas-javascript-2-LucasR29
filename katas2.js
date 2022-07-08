// comece a criar a sua função add na linha abaixo
function add(x,y){
    return x+y
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(x,y){
    let resultado = 0
    for(let i = 0; i < y; i++){
        resultado = add(resultado,x)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x,n){
    let resultado = x
    for(let i = 1; i < n; i++){
        resultado = multiply(resultado,x)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(x){
    let resultado = x
    for(let i = 1; i < x ; i++){
        resultado = multiply(resultado, i)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(num){
    let resultado = 0
    let fibo_1 = 0
    let fibo_2 = 1
    if(num == 0){
        return 0
    }else if(num == 1){
        return 1
    }
    for(let i = 1 ; i < num; i++){
        if(fibo_1 > fibo_2){
            fibo_2 = add(resultado,fibo_1)
            if(i == num-1){
                return fibo_2
            }
        }else if(fibo_2 > fibo_1 && fibo_2 > resultado){
            resultado = add(fibo_1,fibo_2)
            if(i == num-1){
                return resultado
            }
        }else if(resultado > fibo_1){
            fibo_1 = add(fibo_2,resultado)
            if(i == num-1){
                return fibo_1
            }
        }
    }
    
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
console.log(fibonacci(5))
