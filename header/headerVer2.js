function headerContent(e){
    const headerE = document.createElement("div");
    headerE.innerHTML = `
    <header class="header">
    <h1 class="header_titulo">Cerrajeria Camparo</h1>
    <div class="header_burger" >
        <img class="header_burger_img" src="img/llaves-burger-img.png" onclick="sound.play()" alt="menu">
    </div>
</header>

    <div class="header__menu">
    <a class="contenido__cerraduras" href="./cerradurasVer2.html?ver2-1">Cerraduras</a>
    <a class="contenido__candados" href="./candadosVer2.html?ver2-1">Candados</a>
    <a class="contenido__cerrojos" href="./cerrojosVer2.html?ver2-1">Cerrojos</a>
    <a class="contenido__herrajes" href="./herrajesVer2.html?ver2-1">Herrajes</a>
    <a class="contenido__llaveros_c" href="./llaveroscVer2.html?ver2-1">Llaveros cortos</a>
    <a class="contenido__llaveros_l" href="./llaveroslVer2.html?ver2-1">Llaveros largos</a>
    <a class="contenido__pasadores" href="./pasadoresVer2.html?ver2-1">Pasadores</a>
    </div>
    <section class="header__ventana">
    <div class="header__ventana-cierra">
    <button class="header__ventana-cierra-b">X</button>
    </div>
    <div class="header__ventana__contenido">
    <a class="contenido__cerraduras" href="./cerradurasVer2.html?ver2-1">Cerraduras</a>
    <a class="contenido__candados" href="./candadosVer2.html?ver2-1">Candados</a>
    <a class="contenido__cerrojos" href="./cerrojosVer2.html?ver2-1">Cerrojos</a>
    <a class="contenido__herrajes" href="./herrajesVer2.html?ver2-1">Herrajes</a>
    <a class="contenido__llaveros_c" href="./llaveroscVer2.html?ver2-1">Llaveros cortos</a>
    <a class="contenido__llaveros_l" href="./llaveroslVer2.html?ver2-1">Llaveros largos</a>
    <a class="contenido__pasadores" href="./pasadoresVer2.html?ver2-1">Pasadores</a>
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