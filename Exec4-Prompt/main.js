let aceito = true
let nome

do { 
    nome = prompt('primeiro nome')
    
    if (nome=='Lyon') { 
        aceito = false
        console.log('Nome aceito')
    
    }else if (nome=='Erick') {
        aceito = false
        console.log('Nome aceito')

    }else if (nome=='Silvia') {
        aceito = false
        console.log('Nome aceito')

    }else  {
        aceito = true
        console.log('Nome não aceito')
    }

    
} while(aceito)


console.log(nome)

let lastname

do {

    lastname = prompt('ultimo nome')

    if (lastname =='Cezar') {
        aceito = false
        console.log('Nome aceito')
      
    }else if (lastname=='Kleniving') {
        aceito = false
        console.log('Nome aceito')
    
    }else if (lastname=='Pimenta') {
        aceito = false
        console.log('Nome aceito')

    }else  {
        aceito = true
        console.log('Nome não aceito')
    }



    

}while (aceito)


console.log(lastname)

