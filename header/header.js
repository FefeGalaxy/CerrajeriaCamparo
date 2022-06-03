function headerContent(e){
    const headerE = document.createElement("div");
    headerE.innerHTML = `
    <header class="header">
    <h3 class="header_titulo">CERRAJERIA CAMPARO</h3>
    <div class="header_burger" >
        <img class="header_burger_img" src="img/llaves-burger-img.png" onclick="sound.play()" alt="menu">
    </div>
</header>

    <div class="header__menu">
    <a class="contenido__cerraduras" href="./cerraduras.html">Cerraduras</a>
    <a class="contenido__candados" href="./candados.html">Candados</a>
    <a class="contenido__cerrojos" href="./cerrojos.html">Cerrojos</a>
    <a class="contenido__herrajes" href="./herrajes.html">Herrajes</a>
    <a class="contenido__llaveros_c" href="./llaverosc.html">Llaveros cortos</a>
    <a class="contenido__llaveros_l" href="./llaverosl.html">Llaveros largos</a>
    <a class="contenido__pasadores" href="./pasadores.html">Pasadores</a>
    </div>
    <section class="header__ventana">
    <div class="header__ventana-cierra">
    <button class="header__ventana-cierra-b">X</button>
    </div>
    <div class="header__ventana__contenido">
    <a class="contenido__cerraduras" href="./cerraduras.html">Cerraduras</a>
    <a class="contenido__candados" href="./candados.html">Candados</a>
    <a class="contenido__cerrojos" href="./cerrojos.html">Cerrojos</a>
    <a class="contenido__herrajes" href="./herrajes.html">Herrajes</a>
    <a class="contenido__llaveros_c" href="./llaverosc.html">Llaveros cortos</a>
    <a class="contenido__llaveros_l" href="./llaverosl.html">Llaveros largos</a>
    <a class="contenido__pasadores" href="./pasadores.html">Pasadores</a>
    </div>
    </section>
    `

    const botonAbrir = headerE.querySelector(".header_burger_img");
    const botonCerrar = headerE.querySelector(".header__ventana-cierra");
    const ventana = headerE.querySelector(".header__ventana");
       
        botonAbrir.addEventListener("click", ()=>{
           ventana.style.display = "inherit";
        });
        botonCerrar.addEventListener("click", ()=>{
           ventana.style.display = "";
        });
        e.appendChild(headerE);

}