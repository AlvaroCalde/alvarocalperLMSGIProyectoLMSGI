const texto=document.querySelectorAll("li")
const btn=document.getElementById("boton")

texto[0].addEventListener('click',function(){
    if(texto[0].style.backgroundColor!="grey"){
        texto[0].style.backgroundColor="grey"
    }else{
        texto[0].style.backgroundColor="white"
    }   
})
texto[1].addEventListener('click',function(){
    if(texto[1].style.backgroundColor!="grey"){
        texto[1].style.backgroundColor="grey"
    }else{
        texto[1].style.backgroundColor="white"
    }   
})
texto[2].addEventListener('click',function(){
    if(texto[2].style.backgroundColor!=="grey"){
        texto[2].style.backgroundColor="grey"
    }else{
        texto[2].style.backgroundColor="white"
    }   
})

btn.addEventListener('click',function(){
    texto.forEach( i =>{
        if(btn.textContent === "Mostrar"){
            texto.forEach( i=>{
                i.style.visibility = "visible"    
            })
            btn.textContent="Ocultar"
        }else {   
            texto.forEach( i=>{
                if(i.style.backgroundColor === "grey"){
                i.style.visibility = "hidden"
                
                } 
            })    
            btn.textContent="Mostrar"      
        }
    })
})

