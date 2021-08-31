console.log('testando')

let div = document.querySelector('.content')


let div2 = document.createElement('p')// <p></p>
div2.innerHTML = 'testando 2' //  <p>testando 2</p>


div.appendChild(div2) 

let div3 = document.createElement('div')
div3.innerHTML = 'div 3'
div.appendChild(div3)


//elemento.style.background = 'green'
//elemento.style.color = 'white'