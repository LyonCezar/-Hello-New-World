console.log('------------calculadora')

let numero = 5 
let number = 10
let texto = 'fazendo soma'
//     let resultado = prompt('digite um numero')
console.log(numero)

numero++
console.log(number+numero)

console.log(number+texto)


for (let n = 0; n < 11; n++){

    for (let m = 0; m < 11; m++){

    console.log(n+' X '+m+' = '+(n*m))

    }
    
   

}








console.log('------------- array')
let index = 4


let fruta = [

    'laranja','maça','pera','uva','tangerina'

]
console.log(fruta[index])

fruta.push('morango') // .push adiciona um elemento no ultimo Index do ARRAY
fruta.unshift('kiwi') // .unshift adiciona um elemento no primeiro Index do ARRAY
//    fruta.pop() // . .pop remove o ultimo elemento do Index no ARRAY
//    fruta.shift() // .shift remove o primeiro elemento do Index do ARRAY
console.log(fruta.length) 

for (let i = 0; i < fruta.length; i++){
    console.log(fruta[i])

} 

