const btn= document.getElementsByClassName("btn");
const inp= document.querySelector('input');

btn[0].addEventListener("click",()=>{
    document.body.style.backgroundColor=inp.value;
})