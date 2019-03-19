/*global $*/

/*FUNCIONES*/

/*1. Función indexView() que permite imprimir el contenido dinámico de la página de inicio*/
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
    <section id="carouselwelcome">
    <!--Carrusel con contenido de materialize-->
        <section class="carousel carousel-slider center">
            <div id="onecarousel" class="carousel-item">
                <div class="carouselcontent">
                    <h2>titulo carrusel 1</h2>
                    <p>Parrafo carrusel 1</p>                    
                </div>
            </div>
            <div id="twocarousel" class="carousel-item">
                <div class="carouselcontent">
                <h2>titulo carrusel 2</h2>
                <p>Parrafo carrusel 2</p>                  
                </div>
            </div>
            <div id="threecarousel" class="carousel-item">
                <div class="carouselcontent">
                    <h2>titulo carrusel 3</h2>
                    <p>Parrafo carrusel 3</p> 
                </div>
            </div>
        </section> 
    </section>
    
    <button class="btnstart">Iniciar Búsqueda</button>

    <section>
        <h3>Recomendaciones<h3>    
    </section>

    `
    /*MANEJO DOM PÁGINA INICIO*/
    /*Página Búsqueda Indicadores a partir del elemento button*/  
    Array.from(document.getElementsByClassName('btnstart')).forEach(element=>{
        element.addEventListener('click',() =>{
            searchView()
        })
    }) 
};

/*2. Función aboutView() que permite imprimir el contenido dinámico de la página ¿Qué es Onda Retro?*/
function aboutView(){
    document.getElementById('dinamicpage').innerHTML = '';
    document.getElementById('dinamicpage').innerHTML += 

    `
    <section id="aboutview" class="row"> 
        <h3>¿Qué es Onda Retro?</h3>     
        <h4>Página en construcción</h4>
    </section>             
    `  

}




/*II.Manejo del DOM */
/*a)Inicialización página de inicio*/
document.addEventListener('DOMContentLoaded', () =>{ 
    indexView(); 
})

/*b)Página de inicio a partir del logo*/
document.getElementsByTagName('a')[0].addEventListener('click', () => {
    indexView();
})

/*b)Página ¿Qué es Onda Retro? desde el elemento navbar*/
Array.from(document.getElementsByClassName('aboutshow')).forEach(element=>{
    element.addEventListener('click',()=>{
        aboutView()
    })
})