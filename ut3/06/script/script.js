document.addEventListener("DOMContentLoaded", function() {
    const bCrear = document.getElementById("bCrear");
    const bBorrar = document.getElementById("bBorrar");
    const contenedorTabla = document.getElementById("Tabla");
    const error = document.getElementById("error");
    const iFila = document.getElementById("fila");
    const iColumna = document.getElementById("columna");

    bCrear.addEventListener("click", () => {
        const filas = parseInt(iFila.value);
        const columnas = parseInt(iColumna.value);

        contenedorTabla.textContent="";
        error.textContent="";

        if (isNaN(filas) || isNaN(columnas) || filas < 1 || columnas < 1) {
            error.textContent = "Por favor, ingrese números válidos para filas y columnas (mayores que 0)";
            error.classList.remove("oculto");
            return;
        }

        const tabla=document.createElement("table");
        
        for (let i = 0; i < filas; i++) {
            const fila = tabla.insertRow();
            for (let j = 0; j < columnas; j++) {
                const celda=fila.insertCell();
                
                const numero=Math.floor(Math.random() * 1000);
                const urlImagen = `https://picsum.photos/200?random=${numero}`;

                celda.classList.add("carta");
                celda.style.backgroundImage = `url('${urlImagen}')`;
                
                celda.addEventListener("click", function() {
                    this.classList.toggle("vuelta");
                });
            }
        }
        contenedorTabla.appendChild(tabla);
    });

    bBorrar.addEventListener("click", () => {
        contenedorTabla.innerHTML = "";
        mensajeError.classList.add("oculto");
    });
});