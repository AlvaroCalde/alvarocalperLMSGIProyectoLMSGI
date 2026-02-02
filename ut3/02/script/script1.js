const btn=document.getElementById("boton")
const img=document.getElementById("myImagen")

btn.addEventListener('click',function(){
    if(img.style.display=="none"){
        img.style.display="block";
        btn.textContent="Ocultar"
    }else{
        img.style.display="none";
        btn.textContent="Mostrar"
    }
})