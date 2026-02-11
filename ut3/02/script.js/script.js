const btn=document.getElementById("boton");
const img=document.getElementsById("myImagen");

btn.addEventListener('click',function(){
    img.classList.toggle("oculto");
    if(ImageBitmapRenderingContext.classList.contains("oculto")){
        btn.textContent="Mostrar"
    }else{
        btn.textContent="Ocultar"
    }
});