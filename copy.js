let btn=document.querySelector('button')
let text=document.querySelector('textarea')

btn.addEventListener('click' , ()=>{
    text.select()
    let textcopy=text.value;
    navigator.clipboard.writeText(textcopy)
    btn.innerHTML='copied'
    setTimeout(()=>{
        
        btn.innerHTML='copy'

    },1000)
})
