// body
document.body.classList.add(".body-estilo")

        var b=document.body;
        b.style.backgroundColor="#f4f4f4";
        b.style.textAlign="center";

        var boton=document.getElementsByTagName("button")
        boton[0].addEventListener('click',function(){
            var cu=document.body.style.backgroundColor="black"
            t.style.color="#ffff"
        });

        boton[1].addEventListener('click',function(){
            var cu=document.body.style.backgroundColor="#f4f4f4"
            t.style.color="#666"
        });

        var t=document.getElementById("titulo");
        t.style.color="#666"
        t.style.fontWeight="bold"
        t.style.marginBottom="30px"
        t.style.textTransform="uppercase"
        var parrafo=document.getElementsByTagName("p")
        for (let i=0;i<parrafo.length;i++){
            parrafo[i].style.fontSize="20px"
            parrafo[i].style.padding="5px"
        }
        
        parrafo[0].style.color="#e74c3c"
        parrafo[0].style.backgroundColor="#ffe6e6"
        parrafo[0].style.border="5px solid #c0392b"

        parrafo[1].style.color="#2ecc71"
        parrafo[1].style.backgroundColor="#eaffea"
        parrafo[1].style.border="5px solid #27ea60"

        parrafo[2].style.color="#3498db"
        parrafo[2].style.backgroundColor="#e6f2ff"
        parrafo[2].style.border="5px solid #2980b9"
