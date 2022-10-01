const hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
const btn= document.querySelector('button')
const body= document.getElementsByTagName('main')
const p= document.createElement('p')
var hexColor='#'

btn.addEventListener('click', ()=>{
    for(let i=0;i<6;i++){
        hexColor+=hex[getRand()]
    }
    document.body.style.backgroundColor=hexColor
    p.textContent=`Current backgound color is ${hexColor}`
    body[0].appendChild(p)
    hexColor='#'
})

function getRand(){
    return Math.floor(Math.random()*hex.length)
}
