/* Manejo del DOM */
function indexView(){

    /*JQuery elementos Materialize*/ 
    $(document).ready(function(){
        //Navbar
        $('.sidenav').sidenav();

        //carousel
        $('.carousel').carousel({            
            indicators: true            
        });       

    });

    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 
    `
    <section id="welcomeimage">
    <!--Carrusel con contenido de materialize-->
        <section class="carousel carousel-slider center">
            <div id="onecarousel" class="carousel-item">
                <div class="carouselcontent">
                    <h2>Índice de datos</h2>
                    <p class="white-text">Proporciona una lista de conjuntos de datos disponibles del Banco Mundial, incluyendo gráficos comparativos para cada uno de ellos.</p>
                    <button class="btnstart">Indicadores</button>
                </div>
            </div>
            <div id="twocarousel" class="carousel-item">
                <div class="carouselcontent">
                    <h2>Índice de datos</h2>
                    <p class="white-text">Herramienta de análisis y visualización que contiene información de países latinoamericanos (Brasil, Chile, México y Perú)</p>
                    <button class="btnstart">Indicadores</button>
                </div>
            </div>
            <div id="threecarousel" class="carousel-item">
                <div class="carouselcontent">
                    <h2>Índice de datos</h2>
                    <p class="white-text">Fácil acceso a información básica de 138 indicadores desde el año 1960 al 2017.</p>
                    <button class="btnstart">Indicadores</button>
                </div>
            </div>
        </section> 
    </section>   