document.addEventListener("DOMContentLoaded", function() {
    const bCrear = document.getElementById("bCrear");
    const bBorrar = document.getElementById("bBorrar");
    const bOcultar = document.getElementById("bOcultar");
    const bBorrarC = document.getElementById("bBorrarC");
    const bTema = document.getElementById("bTema");
    const tarjetas = document.getElementById("tarjC");
    const titulo = document.getElementById("tit");
    const descripcion = document.getElementById("desc");
    const img=document.getElementsByTagName("img"); 
    

    bCrear.addEventListener("click", () => {
        

        titulo.textContent="";
        descripcion.textContent="";
        
        const tarjeta=document.createElement("div")

        const numero=Math.floor(Math.random() * 1000);

        tarjeta.innerHTML= `
            <img src="https://picsum.photos/200?random=${numero}" alt="imagen">
            <h3>${titulo.value}</h3>
            <p>${descripcion.value}</p>
            <button id="bOcultar">Ocultar imagen</button> 
            <button id="bCambiar">Cambiar estilo</button>  
            <button id="bBorrarC">Borrar card</button> 
        `

        tarjetas.appendChild(tarjeta);
    });

    bBorrar.addEventListener("click", () => {
        tarjetas.innerHTML = "";
    });

});