const hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
const colors=['red','green','blue','white','cyan','grey']
const btn= document.querySelector('button')
const body= document.getElementsByTagName('main')
const p= document.createElement('p')


btn.addEventListener('click', ()=>{
    var check=Math.floor(Math.random()*3)

    if(check==0){
        colorOutput='#'
        for(let i=0;i<6;i++){
            colorOutput+=hex[getRand(hex.length)]
        }
    }
    else if(check==1){
        colorOutput='rgb('
        for(let i=0;i<3;i++){
            if(i==2){
                colorOutput+=getRand(226)+`)`;
            }
            else{
                colorOutput+=getRand(226)+`, `;
            }
        }
    }
    else{
        let rand=getRand(colors.length)
        colorOutput=colors[rand]
    }
    document.body.style.backgroundColor=colorOutput
    p.textContent=`Current backgound color is ${colorOutput}`
    body[0].appendChild(p)
    
})

function getRand(length){
    return Math.floor(Math.random()*length)
}
