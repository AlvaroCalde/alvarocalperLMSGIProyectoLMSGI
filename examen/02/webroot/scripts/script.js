document.addEventListener("DOMContentLoaded", function() {
    const bCrear = document.getElementById("bCrear");
    const bBorrar = document.getElementById("bBorrar");
    const bCambiar = document.getElementById("bTema");
    const cuerpo = document.body;
    const botones = document.getElementById("botones");
    const tarjetas = document.getElementById("tarjC");
    const titulo = document.getElementById("tit");
    const descripcion = document.getElementById("desc"); 
    

    bCrear.addEventListener("click", () => {

        const titulo = document.getElementById("tit").value;
        const descripcion = document.getElementById("desc").value;


        if(!titulo | !descripcion){
            titulo.focus;
            alert("Complete los campos");
            return;
        }else{
        
        const tarjeta=document.createElement("div")

        const numero=Math.floor(Math.random() * 1000);

        tarjeta.innerHTML= `
            <img src="https://picsum.photos/200?random=${numero}" alt="imagen" id="${numero}" class="img">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
            <button class="bOcultar">Ocultar imagen</button> 
            <button class="bCambiar">Cambiar estilo</button>  
            <button class="bBorrarC">Borrar card</button> 
        `
        

        tarjetas.appendChild(tarjeta);
        titulo.textContent="";
        descripcion.textContent="";
        titulo.focus;

        //Botones que se crean en cada Card
        
        //Botón ocultar imagen
        const btnOcultar = tarjeta.querySelector(".bOcultar");
        const imagen = tarjeta.querySelector(".img");
    
        btnOcultar.addEventListener("click", () => {
            imagen.classList.toggle("hidden");
        });


        //Botón borrar Card
        const btnBorrarC = tarjeta.querySelector(".bBorrarC");

        btnBorrarC.addEventListener("click", () => {
            tarjeta.remove();
        });

        //Botón cambiar estilo (lo cambio al estilo oscuro)
        const btnCambiar = tarjeta.querySelector(".bCambiar");
        btnCambiar.addEventListener("click", () => {
            tarjeta.classList.toggle("dark"); 
        });}
    });

    bBorrar.addEventListener("click", () => {
        tarjetas.innerHTML = "";
        titulo.textContent="";
        descripcion.textContent="";
    });

    bCambiar.addEventListener("click",()=>{
        titulo.classList.toggle("dark");
        descripcion.classList.toggle("dark");
        botones.classList.toggle("dark");
        cuerpo.classList.toggle("dark");
        tarjetas.classList.toggle("dark");

    });
    

});