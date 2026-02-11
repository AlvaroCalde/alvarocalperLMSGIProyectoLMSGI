document.addEventListener("DOMContentLoaded", ()=>{
    const cTabla=document.getElementById("bCrear");
    const eTabla=document.getElementById("bEliminar");
    const columnas=document.getElementById("inputCol");
    const filas=document.getElementById("inputFil");
    const tabla=document.getElementById("tabla").querySelector("tbody");
    const error=document.getElementById("mensajeError");

    //Poner el foco en filas
    window.addEventListener("load", ()=>{
        filas.focus();
    })

    //crear tabla
    cTabla.addEventListener('click', ()=>{

        const nFil=parseInt(filas.value);
        const nCol=parseInt(columnas.value);

        error.textContent="";

        if(isNaN(nFil) || isNaN(nCol) || nFil<1 || nCol<1){
            error.textContent="ERROR: Por favor ingrese números válidos para filas y columnas";
            error.classList.add(".oculto");
            return;
        }

        tabla.innerHTML="";

        for(let i=0; i<nFil;i++){
            let filTabla=tabla.insertRow();
            for(let j=0;j<nCol;j++){
                let nuevaFila=filTabla.insertCell();
                nuevaFila.textContent=`Fila ${i+1}, Columna ${j+1}`;
            }
        }

    })

    //borrar
    eTabla.addEventListener('click', ()=>{
        tabla.innerHTML="";
        error.classList.add(".oculto");
    })
})

