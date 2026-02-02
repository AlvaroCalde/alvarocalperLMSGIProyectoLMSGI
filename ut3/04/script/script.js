const items=document.querySelectorAll(".item");
const btnAdd=document.getElementById("bAñadir");
const btnAddP=document.getElementById("bAñadirP");
const btnDelItem=document.getElementById("bEliminar");
const btnDelLista=document.getElementById("bBorrar");
const inputElement=document.getElementById("inputElemento");
//Añadir al final
btnAdd.addEventListener("click", ()=>{
    const nuevoLi=document.createElement("li");
    nuevoLi.textContent=inputElement.value;
    nuevoLi.classList.add("item");
    document.querySelector("ul").appendChild(nuevoLi);
    inputElement.value="";
    inputElement.focus();
})

//Añadir al principio
btnAddP.addEventListener("click",()=>{
    const nuevoLi=document.createElement("li");
    nuevoLi.textContent=inputElement.value;
    nuevoLi.classList.add("item");
    document.querySelector("ul").insertBefore(nuevoLi,items[0]);
    inputElement.value="";
    inputElement.focus();
})

//Eliminar
btnDelItem.addEventListener("click",()=>{
    const lista=document.querySelector("ul");
    const ultimo=lista.lastElementChild;
    if(ultimo){
        lista.removeChild(ultimo);
    }
})

//Borrar
btnDelLista.addEventListener("click",()=>{
    const lista=document.querySelector("ul");
    lista.innerHTML="";
})
